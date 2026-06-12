# Olejník Face Work — GitHub Pages web

Jednoduchá one-page stránka pripravená na GitHub Pages. Stačí rozbaliť ZIP a nahrať obsah priečinka do GitHub repository.

## Súbory

- `index.html` — texty, sekcie, linky, služby, workshopy
- `style.css` — dizajn, farby, mobilná verzia, hero zoom efekt, responzivita
- `script.js` — mobilné menu, video modal, header pri scrollovaní
- `assets/images/` — fotky
- `assets/video/` — video

## Čo upraviť pred publikovaním

### 1. WhatsApp číslo

V `index.html` vyhľadaj:

```txt
421900000000
```

Nahraď vlastným číslom vo formáte bez pluska, napríklad:

```txt
4219XXXXXXXX
```

### 2. Instagram

V `index.html` nájdi:

```html
https://www.instagram.com/
```

Nahraď vlastným linkom.

### 3. E-mail

Nájdeš:

```html
mailto:olejnikjozef123@gmail.com
```

Uprav podľa potreby.

### 4. Služby

V sekcii `services` sú pripravené 4 kartičky:

- Face Massage
- Face Work Session
- Fascia Release
- Face Workout Intro

Neskôr prepíš názvy, texty, dĺžku, ceny a linky.

### 5. Workshopy

V sekcii `workshops` sú pripravené 3 fotky a text. Neskôr sem doplníš konkrétne formáty workshopov, termíny a počet miest.

### 6. Pred / Po fotky

V sekcii `before-after` sú placeholdery. Neskôr môžeš vložiť obrázky takto:

```html
<div class="ba-slot">
  <img src="assets/images/before-1.jpg" alt="Pred sedením">
</div>
```

Potom pridaj fotku do `assets/images/`.

## GitHub Pages postup

1. Vytvor nový GitHub repository, napríklad `olejnik-face-work`.
2. Nahraj všetky súbory z tohto priečinka.
3. Choď do `Settings → Pages`.
4. Source: `Deploy from a branch`.
5. Branch: `main`, folder: `/root`.
6. Po uložení GitHub vygeneruje URL webu.

## Lokálne spustenie

Stačí otvoriť `index.html` v prehliadači.
