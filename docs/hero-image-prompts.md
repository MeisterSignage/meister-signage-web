# Hero-Image Prompts für neue Lösungsseiten

**Status:** Alle 6 neuen Lösungsseiten nutzen aktuell wiederverwendete Platzhalter
aus `/images/products/`. Für SEO (Bild-Suche, Uniqueness) und visuelle Konsistenz
sollten eigene Hero-Bilder generiert werden.

## Generierungs-Tipps

- **Tool:** ChatGPT (DALL·E 3) oder Midjourney v6
- **Format:** 16:9 (Hero) – DALL-E nutzt `1792×1024`
- **Stil-Anker:** "professional commercial photography, natural daylight,
  Swiss minimalist aesthetic, warm neutral tones, shallow depth of field,
  no text or logos visible on screens"
- **Negative:** "no watermarks, no people looking at camera, no stock photo look,
  no overly saturated colors"
- **Nach Download:** Mit Sharp-Script auf WebP/-400w/-800w bringen:
  ```bash
  cp ~/Downloads/dalle-output.png public/images/products/<dateiname>.png
  npm run images
  ```

---

## 1. Digitale Kundenstopper

**Aktuell:** `/images/products/Mobile-Display-Outdoor.webp` (Platzhalter)
**Neuer Dateiname:** `public/images/products/Kundenstopper-Outdoor.webp`
**Seite:** `/loesungen/digitale-kundenstopper`

### DALL-E Prompt
```
A 43-inch freestanding outdoor digital A-board display on a Swiss town
square pedestrian street in front of a small boutique shop. Late afternoon
golden hour lighting, slight bokeh of cobblestones and shopfronts in the
background. The display is on a sleek black mobile base with wheels and a
matte black bezel, screen showing a colorful abstract product visual (no
readable text). The display looks weatherproof and premium. Composition:
display on the left third, shop facade softly blurred on the right.
Photorealistic commercial product photography, 16:9 cinematic format,
warm Swiss small-town atmosphere, no people in foreground.
```

---

## 2. Digitales Werbedisplay

**Aktuell:** `/images/products/Schuhladen-Meister-Signage.webp` (3× wiederverwendet)
**Neuer Dateiname:** `public/images/products/Werbedisplay-Retail.webp`
**Seite:** `/loesungen/digitales-werbedisplay`

### DALL-E Prompt
```
Interior of a modern Swiss retail store at point-of-sale: a 50-inch
wall-mounted ultra-thin digital signage display in portrait orientation,
hanging next to a clothing rack with neatly arranged garments. The display
shows a vibrant abstract fashion campaign visual with bold color blocks
(no readable text or logos). Soft daylight streaming from large windows
on the left, polished concrete floor, warm wooden shelving. Composition:
display dominant in the right third, store interior receding into soft
focus. Photorealistic interior commercial photography, Swiss minimalist
retail aesthetic, 16:9 cinematic format, no people visible.
```

---

## 3. Digitale Schaufensterwerbung

**Aktuell:** `/images/products/Schuhladen-Meister-Signage.webp` (3× wiederverwendet)
**Neuer Dateiname:** `public/images/products/Schaufensterwerbung-Highbright.webp`
**Seite:** `/loesungen/digitale-schaufensterwerbung`

### DALL-E Prompt
```
Exterior nighttime view of a Swiss high-street boutique shop window with
a large 55-inch high-brightness digital signage display mounted behind
the glass facing outward. The display glows brightly with a colorful
seasonal sale visual (no readable text), illuminating the wet cobblestone
sidewalk in front. Reflections of street lamps and a few blurred passersby
in the window glass. Composition: shop window centered, slight upward
camera angle, dramatic contrast between dark street and luminous display.
Photorealistic urban commercial photography, moody Swiss city evening
atmosphere, 16:9 cinematic format.
```

---

## 4. Digitale Infostele

**Aktuell:** `/images/products/Hotelempfang-Meister-Signage.webp` (Platzhalter)
**Neuer Dateiname:** `public/images/products/Infostele-Lobby.webp`
**Seite:** `/loesungen/digitale-infostele`

### DALL-E Prompt
```
A freestanding 55-inch vertical portrait-format digital information kiosk
(infostele) in the marble lobby of a modern Swiss corporate office building.
Sleek matte black floor stand, ultra-thin bezel, screen showing a clean
wayfinding interface with abstract icons and color-coded zones (no readable
text). Bright natural light from a large glass facade in the background,
softly blurred reception desk and indoor plants. Composition: kiosk
centered, slight low-angle perspective emphasizing its elegance and height.
Photorealistic architectural interior photography, Swiss minimalist
corporate aesthetic, 16:9 cinematic format, no people.
```

---

## 5. Digitale Raumbeschilderung

**Aktuell:** `/images/products/SparkQ-Design.webp` (Platzhalter)
**Neuer Dateiname:** `public/images/products/Raumbeschilderung-Meetingroom.webp`
**Seite:** `/loesungen/digitale-raumbeschilderung`

### DALL-E Prompt
```
Close-up of a 10-inch ultra-thin digital meeting room sign mounted on a
wooden door frame next to a modern Swiss office meeting room. The small
display shows a clean availability interface with a green "AVAILABLE" status
indicator and abstract calendar blocks (no readable text). Through the
slightly open glass door behind, softly blurred meeting room with chairs
and a whiteboard. Warm wooden door, brushed brass handle, soft indirect
LED corridor lighting. Composition: display in the center-left, door frame
diagonal lines leading the eye. Photorealistic interior detail photography,
Swiss corporate minimalist aesthetic, 16:9 cinematic format.
```

---

## 6. High-Brightness-Display

**Aktuell:** `/images/products/Schuhladen-Meister-Signage.webp` (3× wiederverwendet)
**Neuer Dateiname:** `public/images/products/HighBrightness-Schaufenster-Sonne.webp`
**Seite:** `/loesungen/high-brightness-display`

### DALL-E Prompt
```
Exterior daytime view of a Swiss city boutique shop window in direct
midday sunlight. Behind the glass, a 65-inch ultra-bright digital
signage display (3500 nits) is mounted facing outward, clearly visible
and vibrant despite the harsh sunlight reflecting off the window. The
display shows a colorful abstract product campaign (no readable text).
Sharp contrast between bright sunlit street and the luminous, perfectly
readable screen behind the glass. Composition: shop window dominant,
slight angle to show both the display brightness and the sun glare it
overcomes. Photorealistic urban commercial photography, bright clear
Swiss summer day, 16:9 cinematic format, no people in foreground.
```

---

## Nach der Bildgenerierung

1. **Download** als PNG, ablegen in `public/images/products/<dateiname>.png`
2. **Sharp-Script ausführen:**
   ```bash
   npm run images
   ```
   → generiert `.webp`, `-400w.webp`, `-800w.webp` Varianten
3. **JSON aktualisieren** – `heroImage`-Pfade in den 6 Lösungsseiten-JSONs
   auf die neuen Dateien zeigen lassen
4. **OverviewPage-Karten** (`app/loesungen/page.tsx`) – die `imageSrc`-Pfade
   der 6 Karten ebenfalls auf die neuen Bilder umstellen
5. **Commit + Deploy**

## Optional: 7. Sustainability-Hero

Falls du für die Sustainability-Story auf `/wissen/digital-signage-nachhaltigkeit`
auch noch ein Hero willst:

```
A flat-lay top-down photograph of an unboxed digital signage display
laying on a clean wooden workshop table. Around it: 100% cardboard
packaging components (no styrofoam visible), a small green plant in a
terracotta pot, a roll of brown craft paper, and the display's external
power adapter. Natural overhead daylight, warm wooden surface, Swiss
craftsmanship aesthetic. Composition: balanced symmetrical flat-lay,
display centered, accessories arranged around it. Photorealistic
commercial product photography, eco-conscious mood, 16:9 cinematic format.
```
