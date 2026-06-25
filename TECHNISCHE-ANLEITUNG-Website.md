# Technische Anleitung: Website erstellen
### Schritt-für-Schritt für statische Websites (wie nadinejoest.de)

---

## 1. Vorbereitung & Tools

| Was | Tool | Kosten | Link |
|---|---|---|---|
| Domain registrieren | IONOS oder Namecheap | ~10–15 €/Jahr | ionos.de |
| Website hochladen & hosten | GitHub Pages | kostenlos | github.com |
| Kontaktformular | Formspree | kostenlos | formspree.io |
| Terminbuchung | Calendly | kostenlos | calendly.com |
| Schriften | Google Fonts | kostenlos | fonts.google.com |
| Vorschaubild (OG-Bild) | Canva | kostenlos | canva.com |
| Favicon (Browser-Icon) | favicon.io | kostenlos | favicon.io |
| Suchmaschinen-Überwachung | Google Search Console | kostenlos | search.google.com/search-console |

---

## 2. Dateien & Struktur

Jede Website besteht aus diesen Dateien im selben Ordner:

| Datei | Zweck |
|---|---|
| index.html | Startseite |
| leistungen.html | Leistungsseite |
| ueber-mich.html | Über-mich-Seite |
| kontakt.html | Kontaktseite |
| impressum.html | Impressum (Pflicht) |
| datenschutz.html | Datenschutz (Pflicht) |
| style.css | Design (Farben, Schriften, Abstände) |
| main.js | Interaktionen (Menü, Animationen) |
| sitemap.xml | Liste aller Seiten für Google |
| robots.txt | Anweisung für Suchmaschinen |
| favicon-32x32.png | Browser-Icon (Tab) |
| og-bild.jpg | Vorschaubild für Social Media |
| Bilder/ | Unterordner für alle Fotos |

> **Wichtig:** Dateinamen immer klein schreiben und keine Leerzeichen verwenden. GitHub unterscheidet zwischen Groß- und Kleinschreibung.

---

## 3. Aufbau jeder HTML-Seite

Jede Seite folgt demselben Aufbau:

| Bereich | Inhalt |
|---|---|
| Kopfbereich (Head) | Titel, Beschreibung, Schriften, Vorschaubild, Favicon |
| Navigation | Logo + Links + Button „Erstgespräch buchen" |
| Hauptinhalt | Der eigentliche Seiteninhalt |
| Footer | Alle Links, Kontaktdaten, Impressum, Datenschutz |

---

## 4. Schritt-für-Schritt: Neue Website aufsetzen

### Schritt 1 — GitHub vorbereiten
1. Kostenlosen Account auf github.com erstellen
2. Neues Repository anlegen (Name frei wählbar)
3. Alle Website-Dateien hochladen
4. Einstellungen öffnen → „Pages" → Branch „main" auswählen → Speichern
5. Die Website ist jetzt erreichbar unter: `benutzername.github.io/repositoryname`

### Schritt 2 — Eigene Domain verbinden
1. Domain bei IONOS o.ä. registrieren
2. Bei GitHub: Settings → Pages → Custom Domain eintragen
3. Bei IONOS: DNS-Einstellungen öffnen → CNAME-Eintrag auf `benutzername.github.io` setzen
4. Warten (bis zu 24 Stunden) → Website läuft dann unter der eigenen Domain

### Schritt 3 — Kontaktformular einrichten (Formspree)
1. Kostenlosen Account auf formspree.io erstellen
2. Neues Formular anlegen
3. Die angezeigte Formular-ID kopieren (sieht aus wie: `xjgdpnnd`)
4. Diese ID im Kontaktformular der Website eintragen
5. Test-Nachricht absenden und prüfen, ob sie ankommt

### Schritt 4 — Terminbuchung einrichten (Calendly)
1. Kostenlosen Account auf calendly.com erstellen
2. Verfügbarkeit und Terminlänge einstellen
3. Den persönlichen Link kopieren (z.B. `calendly.com/deinname/30min`)
4. Diesen Link bei allen „Erstgespräch buchen"-Buttons eintragen

### Schritt 5 — Schriften einbinden (Google Fonts)
1. fonts.google.com aufrufen
2. Gewünschte Schriften auswählen und anklicken
3. „Get embed code" → „@import" wählen
4. Den angezeigten Code ganz oben in die style.css Datei einfügen
5. Ab jetzt sind diese Schriften auf der gesamten Website verfügbar

---

## 5. Design: Übersichtlichkeit & Lesbarkeit

### Grundregeln

| Regel | Warum |
|---|---|
| Maximal 2 verschiedene Schriftarten | Mehr wirkt unruhig |
| Maximal 3–4 Farben | Mehr verwirrt den Besucher |
| Schriftgröße Fließtext: mindestens 16px | Kleiner ist auf Mobile schwer lesbar |
| Zeilenlänge: maximal 70 Zeichen | Längere Zeilen ermüden die Augen |
| Viel Weißraum zwischen Abschnitten | Wirkt hochwertiger, leichter lesbar |
| Überschriften klar gestuft: H1 → H2 → H3 | Struktur für Leser und Google |
| Pro Seite genau eine H1-Überschrift | Mehr verwirrt Suchmaschinen |

### Bewährte Schriftarten-Kombinationen

| Überschriften | Fließtext | Wirkung |
|---|---|---|
| Cormorant Garamond | DM Sans | Elegant, weiblich, modern |
| Playfair Display | Inter | Hochwertig, neutral |
| Lora | Source Sans Pro | Warm, vertrauenswürdig |

### Abstände (Empfehlung)

| Bereich | Abstand |
|---|---|
| Zwischen großen Abschnitten | 64–80px |
| Zwischen Überschrift und Text | 16–24px |
| Innenabstand bei Karten | 24–32px |
| Seitenränder auf Desktop | Inhalt maximal 1200px breit, zentriert |

---

## 6. Mobile Version

### Die häufigsten Fehler (und wie man sie vermeidet)

| Fehler | Lösung |
|---|---|
| Menü funktioniert nicht | Navigation braucht eine eindeutige ID und ein JavaScript für den Toggle-Button |
| Inhalte werden zu schmal/breit | Bilder immer mit `max-width: 100%` |
| Karten stehen nebeneinander statt untereinander | Kein festes Layout direkt im HTML eintragen — nur über CSS steuern |
| Text zu klein | Schriftgröße auf Mobile gesondert festlegen (mindestens 16px) |
| Buttons zu klein zum Tippen | Mindestgröße: 44px hoch |
| Zu wenig Seitenabstand | Mindestens 20px links und rechts auf Mobile |

### Was auf Mobile anders aussehen sollte

| Desktop | Mobile |
|---|---|
| 3 Karten nebeneinander | 1 Karte untereinander |
| Bild links, Text rechts | Bild oben, Text darunter |
| Große Abstände | Kleinere Abstände (ca. 40–44px) |
| Navigation als Leiste | Navigation als aufklappbares Hamburger-Menü |

### Testen

- Website im Browser aufrufen → F12 drücken → Handy-Symbol klicken → verschiedene Geräte durchklicken
- Immer auch auf einem echten Smartphone testen

---

## 7. Auffindbarkeit (SEO & Google)

### Für jede Seite zwingend erforderlich

| Element | Was eintragen | Zeichenanzahl |
|---|---|---|
| Seitentitel | Seitenthema + Name + Positionierung | 50–60 Zeichen |
| Beschreibung | Konkreter Nutzen + Handlungsaufforderung | 140–160 Zeichen |

> **Beispiel Titel:** `Business Support & Controlling | Nadine Joest`
> **Beispiel Beschreibung:** `E-Mail-Management, Prozessoptimierung und Controlling für Coaches. Klare Pakete ab 299 €.`

### Vorschaubild für Social Media (OG-Bild)

| Was | Details |
|---|---|
| Größe | 1200 × 630 Pixel |
| Format | JPG |
| Inhalt | Name, Kernaussage, ggf. Foto |
| Erstellen mit | Canva (kostenlos) |
| Dateiname | og-bild.jpg |
| Speicherort | Hauptordner der Website |

Dieses Bild erscheint automatisch, wenn die Website auf WhatsApp, LinkedIn oder Facebook geteilt wird.

### Favicon (Browser-Icon)

1. favicon.io aufrufen → „Text to ICO" wählen
2. Initialen eingeben (z.B. NJ)
3. Hintergrundfarbe = Markenfarbe, Textfarbe = Weiß
4. Herunterladen → Datei `favicon-32x32.png` in den Website-Ordner legen
5. In jeder HTML-Datei im Kopfbereich eintragen

### sitemap.xml erstellen

- Datei namens `sitemap.xml` im Hauptordner anlegen
- Darin alle Seiten der Website auflisten mit ihrer vollständigen Adresse
- Prioritäten vergeben: Startseite 1.0 → Hauptseiten 0.8–0.9 → Impressum/Datenschutz 0.3
- Nach dem Launch bei Google Search Console einreichen

### robots.txt erstellen

- Datei namens `robots.txt` im Hauptordner anlegen
- Inhalt: Alle Seiten dürfen gecrawlt werden + Verweis auf die Sitemap
- Keine weiteren Einstellungen nötig für einfache Websites

### Google Search Console einrichten

| Schritt | Was tun |
|---|---|
| 1 | search.google.com/search-console aufrufen |
| 2 | Domain eingeben und verifizieren (HTML-Datei-Methode wählen) |
| 3 | Verifizierungsdatei herunterladen und in den Website-Ordner hochladen |
| 4 | Verifizierung bestätigen |
| 5 | Sitemap einreichen unter „Sitemaps" |
| 6 | Nach 2–4 Wochen: Berichte prüfen |

---

## 8. Datenschutz & Impressum (Pflichtseiten)

### Impressum — Pflichtangaben

| Angabe | Beispiel |
|---|---|
| Vollständiger Name | Nadine Joest |
| Adresse | Straße, PLZ, Ort |
| Telefonnummer | 0151 67076970 |
| E-Mail-Adresse | kontakt@nadinejoest.de |
| USt-ID (sobald vorhanden) | DE123456789 |

### Datenschutz — welche Dienste müssen erwähnt werden

| Dienst | Erwähnen wenn |
|---|---|
| Hosting-Anbieter (z.B. GitHub Pages) | Immer |
| Google Fonts | Wenn über @import eingebunden |
| Kontaktformular (z.B. Formspree) | Wenn ein Formular vorhanden ist |
| Terminbuchung (z.B. Calendly) | Wenn ein Buchungslink vorhanden ist |
| Google Analytics | Wenn Besuchertracking eingesetzt wird |

> Für jede Änderung an verwendeten Diensten muss auch die Datenschutzseite aktualisiert werden.

---

## 9. Checkliste vor dem Launch

### Inhalt & Design
- [ ] Alle Seiten vollständig befüllt
- [ ] Rechtschreibung geprüft
- [ ] Alle Bilder werden angezeigt (Groß-/Kleinschreibung der Dateinamen prüfen)
- [ ] Alle Links funktionieren
- [ ] Formular abgesendet und E-Mail erhalten
- [ ] Buchungslink funktioniert
- [ ] Auf Smartphone getestet (echtes Gerät)
- [ ] Mobile Navigation funktioniert

### Technisch & SEO
- [ ] Seitentitel auf allen Seiten (50–60 Zeichen)
- [ ] Beschreibung auf allen Seiten (140–160 Zeichen)
- [ ] Vorschaubild (og-bild.jpg) vorhanden und eingetragen
- [ ] Favicon auf allen Seiten eingetragen
- [ ] sitemap.xml vorhanden
- [ ] robots.txt vorhanden

### Rechtliches
- [ ] Impressum vollständig
- [ ] Datenschutz vollständig (alle Dienste erwähnt)
- [ ] Datenschutz-Checkbox im Kontaktformular vorhanden

### Nach dem Launch
- [ ] Google Search Console verifiziert
- [ ] Sitemap bei Google eingereicht
- [ ] Website-URL in LinkedIn-Profil eingetragen
- [ ] URL in Google Business Profil eingetragen
- [ ] USt-ID nachträglich im Impressum ergänzen (sobald vorhanden)

---

## 10. Häufige Fehler & Lösungen

| Problem | Ursache | Lösung |
|---|---|---|
| Bilder werden nicht angezeigt | Dateiname falsch geschrieben (z.B. `Bilder/` statt `bilder/`) | Groß-/Kleinschreibung im Dateinamen und im HTML-Code angleichen |
| Mobile Menü öffnet sich nicht | Fehlende ID am Navigations-Element | Mit Entwickler prüfen lassen |
| Karten stehen auf Mobile nebeneinander | Layout direkt im HTML statt im CSS | Inline-Style entfernen, Layout nur im CSS steuern |
| Großer Leerraum unter dem Hero-Bild | Feste Mindesthöhe gesetzt | Mindesthöhe entfernen, nur Innenabstand verwenden |
| Schriften laden nicht | @import fehlt in der CSS-Datei | @import-Zeile ganz oben in style.css einfügen |
| Formular kommt nicht an | Falsche Formspree-ID | ID aus Formspree-Dashboard erneut kopieren und eintragen |
| Google Search Console Verifikation schlägt fehl | Seite noch nicht vollständig geladen | 10 Minuten warten, dann erneut versuchen |
| Sitemap-Fehler in Search Console | Datei noch nicht hochgeladen | sitemap.xml auf GitHub hochladen, dann erneut einreichen |

---

*Zuletzt aktualisiert: Juni 2026 · Erstellt auf Basis von nadinejoest.de*
