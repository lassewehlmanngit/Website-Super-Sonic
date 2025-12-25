# Favicon Generation Instructions

Das SVG-Favicon wurde bereits erstellt (`public/favicon.svg`). Für optimale Browser-Kompatibilität sollten Sie zusätzlich PNG-Versionen erstellen.

## Erforderliche Favicon-Größen:

1. **favicon-16x16.png** (16x16px)
2. **favicon-32x32.png** (32x32px)
3. **favicon-192x192.png** (192x192px) - für PWA
4. **favicon-512x512.png** (512x512px) - für PWA
5. **apple-touch-icon.png** (180x180px) - für iOS

## Empfohlene Tools:

### Option 1: Online Tool
- Besuchen Sie: https://realfavicongenerator.net/
- Laden Sie das `public/favicon.svg` hoch
- Generieren Sie alle benötigten Formate
- Laden Sie die generierten Dateien in den `public/` Ordner hoch

### Option 2: ImageMagick (Command Line)
```bash
# Install ImageMagick (falls nicht vorhanden)
brew install imagemagick

# Konvertieren Sie das SVG zu PNG in verschiedenen Größen
convert public/favicon.svg -resize 16x16 public/favicon-16x16.png
convert public/favicon.svg -resize 32x32 public/favicon-32x32.png
convert public/favicon.svg -resize 192x192 public/favicon-192x192.png
convert public/favicon.svg -resize 512x512 public/favicon-512x512.png
convert public/favicon.svg -resize 180x180 public/apple-touch-icon.png
```

### Option 3: Figma / Design Tool
- Öffnen Sie das SVG in Figma oder einem anderen Design-Tool
- Exportieren Sie in den benötigten PNG-Größen
- Speichern Sie die Dateien im `public/` Ordner

## OG Image (Open Graph)

Für Social Media Previews benötigen Sie auch ein OG-Image:
- **og-image.jpg** (1200x630px empfohlen)
- Speichern Sie es als `public/og-image.jpg`

Dieses Bild wird verwendet, wenn Ihre Website auf Facebook, Twitter, LinkedIn etc. geteilt wird.

