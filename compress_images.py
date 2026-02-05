#!/usr/bin/env python3
"""
Image compression script for portfolio graphics
Reduces file sizes while maintaining visual quality
"""

from PIL import Image
import os
from pathlib import Path

# Configuration
INPUT_DIR = Path("public/graphics")
BACKUP_DIR = Path("public/graphics_backup")
MAX_WIDTH = 1920
MAX_HEIGHT = 1440
QUALITY = 85  # JPEG quality (1-100)

def compress_images():
    """Compress all PNG images in the graphics folder"""
    
    # Create backup directory
    BACKUP_DIR.mkdir(exist_ok=True)
    
    # Get all PNG files
    png_files = list(INPUT_DIR.glob("*.png"))
    
    if not png_files:
        print(f"No PNG files found in {INPUT_DIR}")
        return
    
    print(f"Found {len(png_files)} PNG files to compress\n")
    
    for png_file in png_files:
        try:
            # Get original size
            original_size = png_file.stat().st_size / (1024 * 1024)  # MB
            
            # Backup original
            backup_path = BACKUP_DIR / png_file.name
            if not backup_path.exists():
                print(f"Backing up {png_file.name} → {backup_path}")
                with open(png_file, 'rb') as src, open(backup_path, 'wb') as dst:
                    dst.write(src.read())
            
            # Open and process image
            print(f"\nProcessing {png_file.name}...")
            img = Image.open(png_file)
            
            # Convert RGBA to RGB if needed (for JPEG conversion to reduce size further)
            if img.mode == 'RGBA':
                # Create white background for transparency
                rgb_img = Image.new('RGB', img.size, (255, 255, 255))
                rgb_img.paste(img, mask=img.split()[3] if len(img.split()) == 4 else None)
                img = rgb_img
            
            # Resize if too large
            img.thumbnail((MAX_WIDTH, MAX_HEIGHT), Image.Resampling.LANCZOS)
            
            # Save as optimized PNG with compression
            img.save(
                png_file,
                'PNG',
                optimize=True,
                quality=QUALITY
            )
            
            # Get new size
            new_size = png_file.stat().st_size / (1024 * 1024)  # MB
            reduction = ((original_size - new_size) / original_size) * 100
            
            print(f"  Original: {original_size:.2f} MB")
            print(f"  Compressed: {new_size:.2f} MB")
            print(f"  Reduction: {reduction:.1f}%")
            
        except Exception as e:
            print(f"  ERROR: {e}")
    
    print("\n✅ Compression complete!")

if __name__ == "__main__":
    compress_images()
