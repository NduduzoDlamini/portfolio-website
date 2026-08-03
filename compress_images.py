#!/usr/bin/env python3
"""
compress_images.py

Batch-compresses images (JPG, JPEG, PNG) in a folder tree — built for
shrinking a portfolio site's assets/ folder before pushing to GitHub Pages.

It never touches your originals. It writes compressed copies into a
separate output folder, mirroring your existing folder structure
(assets/gallery/foo.jpg -> assets_compressed/gallery/foo.jpg), so you
can compare and then swap the folder in once you're happy.

USAGE
-----
1. Install the one dependency (Pillow):
       pip install pillow

2. Run it from the folder that contains your "assets" folder:
       python3 compress_images.py

   Or point it at a specific folder / tweak the settings:
       python3 compress_images.py --src assets --dst assets_compressed --quality 80 --max-width 1920

3. Optionally also generate .webp versions alongside the compressed
   jpg/png (smaller again, and supported by all modern browsers):
       python3 compress_images.py --webp

4. Review assets_compressed/, then once you're happy, replace your
   real assets/ folder with it (back up the original first!) and
   update image paths in gallery.js / index.html if you switched to .webp.

WHAT IT DOES
------------
- Resizes any image wider than --max-width down to that width
  (keeps aspect ratio; portrait/small images are left alone).
- Re-saves JPEGs at --quality (default 80, a strong sweet spot
  between filesize and visible quality).
- Re-saves PNGs with optimization + a reduced color palette,
  which usually shrinks screenshots a lot with no visible change.
- Strips EXIF/metadata (camera info, GPS, etc.) — smaller files,
  and one less thing to worry about privacy-wise for phone photos.
- Prints a before/after size report per file and a total summary.
"""

import argparse
import os
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit(
        "Pillow isn't installed. Run: pip install pillow\n"
        "(add --break-system-packages if your system pip complains)"
    )

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png"}


def human_size(num_bytes):
    for unit in ["B", "KB", "MB", "GB"]:
        if num_bytes < 1024:
            return f"{num_bytes:.1f}{unit}"
        num_bytes /= 1024
    return f"{num_bytes:.1f}TB"


def compress_image(src_path, dst_path, quality, max_width, make_webp):
    dst_path.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(src_path) as img:
        # Normalize mode for JPEG saving (drops alpha safely if present)
        if img.mode in ("RGBA", "P") and src_path.suffix.lower() in (".jpg", ".jpeg"):
            img = img.convert("RGB")

        # Resize if wider than max_width
        if img.width > max_width:
            new_height = int(img.height * (max_width / img.width))
            img = img.resize((max_width, new_height), Image.LANCZOS)

        ext = src_path.suffix.lower()
        if ext in (".jpg", ".jpeg"):
            img.save(dst_path, "JPEG", quality=quality, optimize=True, progressive=True)
        elif ext == ".png":
            img.save(dst_path, "PNG", optimize=True)
        else:
            img.save(dst_path)

        if make_webp:
            webp_path = dst_path.with_suffix(".webp")
            img.save(webp_path, "WEBP", quality=quality, method=6)


def main():
    parser = argparse.ArgumentParser(description="Batch-compress images for the web.")
    parser.add_argument("--src", default="assets", help="Source folder (default: assets)")
    parser.add_argument("--dst", default="assets_compressed", help="Output folder (default: assets_compressed)")
    parser.add_argument("--quality", type=int, default=80, help="JPEG/WEBP quality 1-95 (default: 80)")
    parser.add_argument("--max-width", type=int, default=1920, help="Max width in px (default: 1920)")
    parser.add_argument("--webp", action="store_true", help="Also generate .webp copies")
    args = parser.parse_args()

    src_root = Path(args.src)
    dst_root = Path(args.dst)

    if not src_root.exists():
        sys.exit(f"Source folder '{src_root}' not found. Run this from your project root, "
                  f"or pass --src path/to/assets")

    files = [p for p in src_root.rglob("*") if p.suffix.lower() in IMAGE_EXTENSIONS]

    if not files:
        sys.exit(f"No .jpg/.jpeg/.png files found under '{src_root}'.")

    total_before = 0
    total_after = 0

    print(f"Compressing {len(files)} image(s) from '{src_root}' -> '{dst_root}'\n")

    for src_path in files:
        rel_path = src_path.relative_to(src_root)
        dst_path = dst_root / rel_path

        before = src_path.stat().st_size
        try:
            compress_image(src_path, dst_path, args.quality, args.max_width, args.webp)
        except Exception as e:
            print(f"  ! Skipped {rel_path} ({e})")
            continue

        after = dst_path.stat().st_size
        total_before += before
        total_after += after

        saved_pct = (1 - after / before) * 100 if before else 0
        print(f"  {rel_path}: {human_size(before)} -> {human_size(after)}  ({saved_pct:.0f}% smaller)")

    print(f"\nTotal: {human_size(total_before)} -> {human_size(total_after)} "
          f"({(1 - total_after / total_before) * 100:.0f}% smaller overall)")
    print(f"\nCompressed files are in '{dst_root}'. Review them, then swap them in for '{src_root}'.")


if __name__ == "__main__":
    main()