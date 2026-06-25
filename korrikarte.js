// ==UserScript==
// @name         Korri 255
// @version      0.5
// @description  draw on map
// @author       Shinko to Kuma, suilenroc
// @match        https://de255.die-staemme.de/game.php?village=*screen=map*
// @grant        none
// ==/UserScript==
$.getScript("https://shinko-to-kuma.com/scripts/mapSdk.js").done(function() {

// ============================================================
// FARB-KONFIGURATION
// ============================================================
// Linien
const COLOR_KORRI     = "#39FF14"; // Neongrün  - Off & Deff Korridore
const COLOR_GRENZE_ASE = "#FF6600"; // Orange    - Adelsgrenze ASE
const COLOR_GRENZE_OLY = "#00FF00"; // Grün      - Adelsgrenze OLY

// Schrift
const COLOR_TEXT_NAME   = "#FFFFFF"; // Weiß      - Spielernamen
const COLOR_TEXT_SELF   = "#39FF14"; // Neongrün  - Eigener Name (OffensiveTurtle)
const COLOR_TEXT_LABEL  = "#FFFF00"; // Gelb      - Beschriftungen (Off/Deff/Front Spieler)
const COLOR_TEXT_OPEN   = "#AAAAAA"; // Grau      - Offene Slots

const FONT_NAME  = "bold 11px Arial"; // Spielernamen
const FONT_LABEL = "bold 13px Arial"; // Beschriftungen

// ============================================================
// ADELSGRENZEN
// ============================================================

// ----- Adelsgrenze ASE (Orange) -----
MapSdk.lines.push({x1: 554.5, y1: 599.5, x2: 554.5, y2: 624.5, styling:{main: {"strokeStyle": COLOR_GRENZE_ASE,"lineWidth": 3},mini: {"strokeStyle": COLOR_GRENZE_ASE,"lineWidth": 3}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 554.5, y1: 624.5, x2: 534.5, y2: 639.5, styling:{main: {"strokeStyle": COLOR_GRENZE_ASE,"lineWidth": 3},mini: {"strokeStyle": COLOR_GRENZE_ASE,"lineWidth": 3}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 534.5, y1: 639.5, x2: 534.5, y2: 664.5, styling:{main: {"strokeStyle": COLOR_GRENZE_ASE,"lineWidth": 3},mini: {"strokeStyle": COLOR_GRENZE_ASE,"lineWidth": 3}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 534.5, y1: 664.5, x2: 499.5, y2: 699.5, styling:{main: {"strokeStyle": COLOR_GRENZE_ASE,"lineWidth": 3},mini: {"strokeStyle": COLOR_GRENZE_ASE,"lineWidth": 3}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 499.5, y1: 699.5, x2: 499.5, y2: 799.5, styling:{main: {"strokeStyle": COLOR_GRENZE_ASE,"lineWidth": 3},mini: {"strokeStyle": COLOR_GRENZE_ASE,"lineWidth": 3}},drawOnMini: true,drawOnMap: true,});

// ----- Adelsgrenze OLY (Grün) -----
MapSdk.lines.push({x1: 554.5, y1: 599.5, x2: 609.5, y2: 599.5, styling:{main: {"strokeStyle": COLOR_GRENZE_OLY,"lineWidth": 3},mini: {"strokeStyle": COLOR_GRENZE_OLY,"lineWidth": 3}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 609.5, y1: 599.5, x2: 609.5, y2: 494.5, styling:{main: {"strokeStyle": COLOR_GRENZE_OLY,"lineWidth": 3},mini: {"strokeStyle": COLOR_GRENZE_OLY,"lineWidth": 3}},drawOnMini: true,drawOnMap: true,});

// ============================================================
// OFF KORRIDORE (x = Korridor-Position, y: 450.5 → 544.5)
// ============================================================

// ----- Separator-Linie (horizontal, trennt Off von Deff) -----
MapSdk.lines.push({x1: 609.5, y1: 544.5, x2: 799.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 609.5, y1: 554.5, x2: 699.5, y2: 554.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 699.5, y1: 554.5, x2: 749.5, y2: 594.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});

// Separator-Labels
MapSdk.texts.push({x: 619.5, y: 542, text: "Off",          color: COLOR_TEXT_NAME,  font: FONT_LABEL, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 659.5, y: 542, text: "Off",          color: COLOR_TEXT_NAME,  font: FONT_LABEL, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 699.5, y: 542, text: "Off",          color: COLOR_TEXT_NAME,  font: FONT_LABEL, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 739.5, y: 542, text: "Off",          color: COLOR_TEXT_NAME,  font: FONT_LABEL, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 619.5, y: 548, text: "Front Spieler",color: COLOR_TEXT_LABEL, font: FONT_LABEL, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 659.5, y: 548, text: "Front Spieler",color: COLOR_TEXT_LABEL, font: FONT_LABEL, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 699.5, y: 548, text: "Front Spieler",color: COLOR_TEXT_LABEL, font: FONT_LABEL, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 739.5, y: 548, text: "Front Spieler",color: COLOR_TEXT_LABEL, font: FONT_LABEL, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 619.5, y: 556, text: "Deff",         color: COLOR_TEXT_NAME,  font: FONT_LABEL, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 659.5, y: 556, text: "Deff",         color: COLOR_TEXT_NAME,  font: FONT_LABEL, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 699.5, y: 556, text: "Deff",         color: COLOR_TEXT_NAME,  font: FONT_LABEL, drawOnMap: true, drawOnMini: true});

// ----- Korri 01 | x=614 | democ -----
MapSdk.lines.push({x1: 614.5, y1: 450.5, x2: 614.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 612, y: 507, text: "democ",   color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 02 | x=619 | Denno -----
MapSdk.texts.push({x: 619, y: 507, text: "Denno",   color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});
// Hinweis: Denno teilt sich den Bereich mit democ (keine eigene Linie)

// ----- Korri 03 | x=624 | Aragorn -----
MapSdk.lines.push({x1: 624.5, y1: 450.5, x2: 624.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 627, y: 507, text: "Aragorn", color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 04 | x=629 | Hamburg -----
MapSdk.lines.push({x1: 629.5, y1: 450.5, x2: 629.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 632, y: 513, text: "Hamburg", color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 05 | x=634 | Tecmec -----
MapSdk.lines.push({x1: 634.5, y1: 450.5, x2: 634.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 637, y: 507, text: "Tecmec",  color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 06 | x=639 | Katamann -----
MapSdk.lines.push({x1: 639.5, y1: 450.5, x2: 639.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 645, y: 513, text: "Katamann",color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 07 | x=649 | NevaDaha -----
MapSdk.lines.push({x1: 649.5, y1: 450.5, x2: 649.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 652, y: 507, text: "NevaDaha",color: COLOR_TEXT_SELF, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 08 | x=654 | Ratze / Beatstime -----
MapSdk.lines.push({x1: 654.5, y1: 450.5, x2: 654.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 657, y: 513, text: "Ratze",    color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 657, y: 515, text: "Beatstime",color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 09 | x=659 | Spikezzi -----
MapSdk.lines.push({x1: 659.5, y1: 450.5, x2: 659.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 662, y: 507, text: "Spikezzi", color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 10 | x=664 | Flo / Galen -----
MapSdk.lines.push({x1: 664.5, y1: 450.5, x2: 664.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 667, y: 513, text: "Flo",      color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 667, y: 515, text: "Galen",    color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 11 | x=669 | Coddy -----
MapSdk.lines.push({x1: 669.5, y1: 450.5, x2: 669.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 672, y: 507, text: "Coddy",    color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 12 | x=674 | Turtle (OffensiveTurtle) -----
MapSdk.lines.push({x1: 674.5, y1: 450.5, x2: 674.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 679, y: 507, text: "Turtle",   color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 13 | x=684 | Tim -----
MapSdk.lines.push({x1: 684.5, y1: 450.5, x2: 684.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 689, y: 507, text: "Tim",      color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 14 | x=694 | RJB -----
MapSdk.lines.push({x1: 694.5, y1: 450.5, x2: 694.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 697, y: 507, text: "RJB",      color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 15 | x=699 | Robby -----
MapSdk.lines.push({x1: 699.5, y1: 450.5, x2: 699.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 702, y: 513, text: "Robby",    color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 16 | x=704 | Dr.Schmerz -----
MapSdk.lines.push({x1: 704.5, y1: 450.5, x2: 704.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 707, y: 507, text: "Dr.Schmerz",color: COLOR_TEXT_NAME,font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 17 | x=709 | Shyclon -----
MapSdk.lines.push({x1: 709.5, y1: 450.5, x2: 709.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 715, y: 513, text: "Shyclon",  color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 18 | x=719 | Hamburg -----
MapSdk.lines.push({x1: 719.5, y1: 450.5, x2: 719.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 722, y: 507, text: "Hamburg",  color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 19 | x=724 | Offen -----
MapSdk.lines.push({x1: 724.5, y1: 450.5, x2: 724.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 727, y: 513, text: "Offen",    color: COLOR_TEXT_OPEN, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 20 | x=729 | Offen -----
MapSdk.lines.push({x1: 729.5, y1: 450.5, x2: 729.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 732, y: 507, text: "Offen",    color: COLOR_TEXT_OPEN, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 21 | x=734 | Offen -----
MapSdk.lines.push({x1: 734.5, y1: 450.5, x2: 734.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 737, y: 513, text: "Offen",    color: COLOR_TEXT_OPEN, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Korri 22 | x=739 | Offen -----
MapSdk.lines.push({x1: 739.5, y1: 450.5, x2: 739.5, y2: 544.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});

// ============================================================
// DEFF KORRIDORE
// ============================================================

// ----- Deff Korri 01 | x=514 | Katamann -----
MapSdk.lines.push({x1: 514.5, y1: 699.5, x2: 514.5, y2: 799.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 506.5, y: 705, text: "Katamann",   color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 02 | x=529 | WensiHasi -----
MapSdk.lines.push({x1: 529.5, y1: 699.5, x2: 529.5, y2: 799.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 522.5, y: 705, text: "WensiHasi",  color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 03 | x=544 | Kantega -----
MapSdk.lines.push({x1: 544.5, y1: 679.5, x2: 544.5, y2: 799.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 537.5, y: 705, text: "Kantega",    color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 04 | x=554 | Scrumhalf -----
MapSdk.lines.push({x1: 554.5, y1: 679.5, x2: 554.5, y2: 799.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 549.5, y: 685, text: "Scrumhalf",  color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 05 | x=564 | Gottverdammi -----
MapSdk.lines.push({x1: 564.5, y1: 679.5, x2: 564.5, y2: 799.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 559.5, y: 680, text: "Gottverdammi",color: COLOR_TEXT_NAME,font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 06 | x=574 | Hamburg / Leroy -----
MapSdk.lines.push({x1: 574.5, y1: 679.5, x2: 579.5, y2: 729.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 569.5, y: 685, text: "Hamburg",    color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 579.5, y: 680, text: "Leroy",      color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 07 | x=584 | NevaDaha -----
MapSdk.lines.push({x1: 584.5, y1: 679.5, x2: 594.5, y2: 729.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 589.5, y: 680, text: "NevaDaha",   color: COLOR_TEXT_SELF, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 08 | x=594 | Deluxe -----
MapSdk.lines.push({x1: 594.5, y1: 679.5, x2: 614.5, y2: 729.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 599.5, y: 680, text: "Deluxe",     color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 09 | x=604 | IngLuHe / Tohuwabohuy -----
MapSdk.lines.push({x1: 604.5, y1: 679.5, x2: 634.5, y2: 729.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 612.5, y: 680, text: "IngLuHe",    color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 612.5, y: 685, text: "Tohuwabohuy",color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 10 | x=609 | tecmec / KingSimon -----
MapSdk.lines.push({x1: 609.5, y1: 669.5, x2: 659.5, y2: 724.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 620.5, y: 657.5, text: "tecmec",   color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 635.5, y: 655.5, text: "KingSimon",color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 11 | x=624 | Mandelbrot / Coltmaker -----
MapSdk.lines.push({x1: 624.5, y1: 649.5, x2: 674.5, y2: 699.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 638.5, y: 634.5, text: "Mandelbrot",color: COLOR_TEXT_NAME,font: FONT_NAME, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 638.5, y: 637.5, text: "Coltmaker", color: COLOR_TEXT_NAME,font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 12 | x=629 | Dr.Schmerz / Beatstime -----
MapSdk.lines.push({x1: 629.5, y1: 639.5, x2: 689.5, y2: 699.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 643.5, y: 609.5, text: "Dr.Schmerz",color: COLOR_TEXT_NAME,font: FONT_NAME, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 643.5, y: 612.5, text: "Beatstime", color: COLOR_TEXT_NAME,font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 13 | x=639 | Zanderlord / Gangsta -----
MapSdk.lines.push({x1: 639.5, y1: 619.5, x2: 704.5, y2: 684.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 658.5, y: 594.5, text: "Zanderlord",color: COLOR_TEXT_NAME,font: FONT_NAME, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 658.5, y: 597.5, text: "Gangsta",   color: COLOR_TEXT_NAME,font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 14 | x=654 | Flo / Ratze / OffensiveTurtle -----
MapSdk.lines.push({x1: 654.5, y1: 604.5, x2: 719.5, y2: 669.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 673.5, y: 579.5, text: "Flo",            color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 673.5, y: 582.5, text: "Ratze",          color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 673.5, y: 585.5, text: "OffensiveTurtle",color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 15 | x=669 | DSTyrann / Shyclon -----
MapSdk.lines.push({x1: 669.5, y1: 589.5, x2: 734.5, y2: 654.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.texts.push({x: 688.5, y: 564.5, text: "DSTyrann",color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});
MapSdk.texts.push({x: 688.5, y: 567.5, text: "Shyclon", color: COLOR_TEXT_NAME, font: FONT_NAME, drawOnMap: true, drawOnMini: true});

// ----- Deff Korri 16 | x=674 | (diagonale Linie) -----
MapSdk.lines.push({x1: 674.5, y1: 564.5, x2: 749.5, y2: 639.5, styling:{main: {"strokeStyle": COLOR_KORRI,"lineWidth": 2},mini: {"strokeStyle": COLOR_KORRI,"lineWidth": 2}},drawOnMini: true,drawOnMap: true,});

// ============================================================
// RELOAD
// ============================================================
MapSdk.mapOverlay.reload();});