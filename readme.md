# M&R Design - Osobná karta portfólia

Moderná, responzívna webová stránka pre služby návrhu nechtov vytvorená pomocou čistého HTML, CSS a JavaScript.

## Funkcie

- Responzívny dizajn - Funguje na počítači, tablete a mobile
- Plynulé animácie - CSS keyframes a JavaScript spúšťače posúvania
- Interaktívna galéria - Slider obrázkov aktivovaný hoverom
- Moderný layout - Flexbox a CSS Grid
- Optimalizovaný výkon - Lenivé načítanie obrázkov, optimalizácie prehliadača
- Mobilný QR prístup - Ľahké mobilné testovanie cez QR kód

## Použitie

### Klonovanie repozitára

```
git clone https://github.com/username/PersonalCard.git
```

### Otvorenie projektu

1. Naklonujte alebo stiahnite projekt
2. Otvorte `index.html` vo VS Code
3. Nainštalujte rozšírenie **Live Server**
4. Kliknite pravým tlačidlom → "Open with Live Server"
5. Naskenujte QR kód pre mobilný prístup

## Štruktúra projektu

Projekt používa čisté HTML, CSS a JavaScript bez rámcov. Štruktúra je organizovaná do priečinkov pre štýly, skripty a assety.

### Stromová štruktúra

```
PersonalCard/
├── index.html                 # Hlavný HTML súbor
├── css/
│   ├── style.css             # Hlavné CSS importy
│   ├── header-logo.css       # Štýly hlavičky a loga
│   ├── navigation.css        # Štýly navigačného menu
│   ├── content.css           # Hlavný obsah a typografia
│   ├── images.css            # Štýly galérie slider
│   └── responzive.css        # Pravidlá responzívneho dizajnu
├── js/
│   ├── optimization.js       # Optimalizácie výkonu a prehliadača
│   └── slogan-animation.js   # Animácie spúšťané posúvaním
└── assets/
    ├── logo.svg              # Logo spoločnosti
    └── *.jpg                 # Obrázky galérie
```

### Popis technológií a súborov

#### HTML

index.html obsahuje hlavnú štruktúru stránky s sémantickým HTML5.

#### CSS

Súbory CSS sú rozdelené na moduly: style.css pre hlavné importy, header-logo.css pre hlavičku, navigation.css pre navigáciu, content.css pre obsah, images.css pre galériu a responzive.css pre responzívny dizajn.

#### JavaScript

optimization.js obsahuje optimalizácie výkonu a prehliadača, slogan-animation.js obsahuje animácie spúšťané posúvaním pomocou Intersection Observer API.

#### Obrázky

Galéria obsahuje obrázky nechtov stiahnuté z Unsplash.

#### Ostatné

logo.svg je SVG logo spoločnosti.

## Ako projekt funguje

Stránka používa Intersection Observer API na spúšťanie animácií pri posúvaní, CSS pre moderné štýlovanie s Flexbox a Grid, a JavaScript pre interaktívne prvky ako galéria slider. Je optimalizovaná pre rôzne prehliadače a zariadenia.

## Ako rozšíriť projekt

- Pridajte nové obrázky do priečinka assets/
- Upravte CSS súbory pre nové štýly alebo prvky
- Rozšírte JavaScript pre ďalšie interaktivity
- Aktualizujte HTML štruktúru podľa potreby

## Online verzia

Projekt live: https://Saydva.github.io/PersonalCard

![QR Code](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://Saydva.github.io/PersonalCard)

_Poznámka: Po nahratí nahraďte `username` a `PersonalCard` vaším skutočným používateľským menom GitHub a názvom repozitára._
