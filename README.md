# Public Assets Guide

This folder contains public assets that are served directly by Vite.

## Adding Your Profile Photo

To display your profile photo in the Hero section:

1. **Place your image file here**: Save `profile.jpg` in this directory (`/public/profile.jpg`)
2. **Supported formats**: JPG, PNG, WebP (JPG recommended for professional photos)
3. **Recommended size**: 
   - Width: 600px
   - Height: 700px
   - File size: < 500KB (optimize if needed)
4. **Optimization tip**: Use tools like TinyJPG or ImageOptim to reduce file size without quality loss

## Image Optimization Commands

Using ImageMagick (if installed):
```bash
convert profile.jpg -quality 85 -resize 600x700 -gravity center -extent 600x700 profile-optimized.jpg
```

Using ffmpeg:
```bash
ffmpeg -i profile.jpg -vf scale=600:700 -q:v 5 profile-optimized.jpg
```

## Fallback Behavior

If `profile.jpg` is not found, a placeholder will be displayed with your initial "A" and instructions.

Once you add the file, refresh your browser to see the updated profile photo.
