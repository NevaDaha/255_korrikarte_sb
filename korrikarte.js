// ==UserScript==
// @name         Korri 255
// @version      1.0
// @description  draw on map
// @author       OffensiveTrutle, NevaDaha
// @match        https://de255.die-staemme.de/game.php?village=*screen=map*
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
   
    const win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
    const api = win.ScriptAPI;
    api.register('255-Korrikarte', true, 'Offensiv Turle, NevaDaha', 'nur-discord-support@die-staemme.de');
   
    win.$.getScript("https://shinko-to-kuma.com/scripts/mapSdk.js").done(function() {

    
    const win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
    var game_data = win.game_data;
    // console.log(game_data)

    // ============================================================
    // FARB-KONFIGURATION
    // ============================================================
    const COLOR_KORRI      = "#39FF14"; // Neongrün  - Off & Deff Korridore
    const COLOR_GRENZE_ASE = "#FF6600"; // Orange    - Adelsgrenze ASE
    const COLOR_GRENZE_OLY = "#00FF00"; // Grün      - Adelsgrenze OLY
    const COLOR_TEXT_NAME  = "#FFFFFF"; // Weiß      - Spielernamen
    const COLOR_TEXT_SELF  = "#39FF14"; // Neongrün  - Eigener Name
    const COLOR_TEXT_LABEL = "#FFFF00"; // Gelb      - Beschriftungen
    const COLOR_TEXT_OPEN  = "#AAAAAA"; // Grau      - Offene Slots
    const FONT_NAME        = "bold 11px Arial";
    const FONT_LABEL       = "bold 13px Arial";

    // ============================================================
    // SPIELER-KONFIGURATION
    // Felder: x = Kartenkoordinate, names = Spielernamen im Slot
    //         self: true = eigener Name (Neongrün)
    //         open: true = offener Slot (Grau)
    //         noLine: true = kein eigener Korridor (teilt sich Bereich)
    // ============================================================

    // ----- OFF KORRIDORE -----
    // y-Bereich: 450.5 (oben) → 544.5 (Separator)
    const OFF_Y_TOP    = 450.5;
    const OFF_Y_BOTTOM = 544.5;

    const OFF_KORRIS = [
        { nr:  1, x: 614, names: ["democ"]                          },
        { nr:  2, x: 619, names: ["Denno"],      noLine: true       }, // teilt Bereich mit Korri 01
        { nr:  3, x: 624, names: ["Aragorn"]                        },
        { nr:  4, x: 629, names: ["Hamburg"]                        },
        { nr:  5, x: 634, names: ["Tecmec"]                         },
        { nr:  6, x: 639, names: ["Katamann"]                       },
        { nr:  7, x: 649, names: ["NevaDaha"]                       },
        { nr:  8, x: 654, names: ["Ratze", "Beatstime"]             },
        { nr:  9, x: 659, names: ["Spikezzi"]                       },
        { nr: 10, x: 664, names: ["Flo", "Galen"]                   },
        { nr: 11, x: 669, names: ["Coddy"]                          },
        { nr: 12, x: 674, names: ["Turtle"],     self: true         },
        { nr: 13, x: 684, names: ["Tim"]                            },
        { nr: 14, x: 694, names: ["RJB"]                            },
        { nr: 15, x: 699, names: ["Robby"]                          },
        { nr: 16, x: 704, names: ["Dr.Schmerz"]                     },
        { nr: 17, x: 709, names: ["Shyclon"]                        },
        { nr: 18, x: 719, names: ["Hamburg"]                        },
        { nr: 19, x: 724, names: ["Offen"],      open: true         },
        { nr: 20, x: 729, names: ["Offen"],      open: true         },
        { nr: 21, x: 734, names: ["Offen"],      open: true         },
        { nr: 22, x: 739, names: [],             open: true         }, // nur Linie, kein Name
    ];

    // ----- DEFF KORRIDORE -----
    // Diagonale Linien: x1/y1 → x2/y2 manuell gepflegt (variabler Verlauf)
    // names: Spielernamen | labelX/labelY: Textposition
    const DEFF_KORRIS = [
        { nr:  1, x1: 514.5, y1: 699.5, x2: 514.5, y2: 799.5, names: ["Katamann"],              labelX: 506.5, labelY: 705   },
        { nr:  2, x1: 529.5, y1: 699.5, x2: 529.5, y2: 799.5, names: ["WensiHasi"],             labelX: 522.5, labelY: 705   },
        { nr:  3, x1: 544.5, y1: 679.5, x2: 544.5, y2: 799.5, names: ["Kantega"],               labelX: 537.5, labelY: 705   },
        { nr:  4, x1: 554.5, y1: 679.5, x2: 554.5, y2: 799.5, names: ["Scrumhalf"],             labelX: 549.5, labelY: 685   },
        { nr:  5, x1: 564.5, y1: 679.5, x2: 564.5, y2: 799.5, names: ["Gottverdammi"],          labelX: 559.5, labelY: 680   },
        { nr:  6, x1: 574.5, y1: 679.5, x2: 579.5, y2: 729.5, names: ["Hamburg", "Leroy"],      labelX: 569.5, labelY: 685   },
        { nr:  7, x1: 584.5, y1: 679.5, x2: 594.5, y2: 729.5, names: ["NevaDaha"],              labelX: 589.5, labelY: 680   },
        { nr:  8, x1: 594.5, y1: 679.5, x2: 614.5, y2: 729.5, names: ["Deluxe"],                labelX: 599.5, labelY: 680   },
        { nr:  9, x1: 604.5, y1: 679.5, x2: 634.5, y2: 729.5, names: ["IngLuHe","Tohuwabohuy"],  labelX: 612.5, labelY: 680   },
        { nr: 10, x1: 609.5, y1: 669.5, x2: 659.5, y2: 724.5, names: ["tecmec", "KingSimon"],   labelX: 620.5, labelY: 657.5 },
        { nr: 11, x1: 624.5, y1: 649.5, x2: 674.5, y2: 699.5, names: ["Mandelbrot","Coltmaker"],labelX: 638.5, labelY: 634.5 },
        { nr: 12, x1: 629.5, y1: 639.5, x2: 689.5, y2: 699.5, names: ["Dr.Schmerz","Beatstime"],labelX: 643.5, labelY: 609.5 },
        { nr: 13, x1: 639.5, y1: 619.5, x2: 704.5, y2: 684.5, names: ["Zanderlord","Gangsta"],  labelX: 658.5, labelY: 594.5 },
        { nr: 14, x1: 654.5, y1: 604.5, x2: 719.5, y2: 669.5, names: ["Flo","Ratze","Turtle"],  labelX: 673.5, labelY: 579.5, selfName: "Turtle" },
        { nr: 15, x1: 669.5, y1: 589.5, x2: 734.5, y2: 654.5, names: ["DSTyrann","Shyclon"],    labelX: 688.5, labelY: 564.5 },
        { nr: 16, x1: 674.5, y1: 564.5, x2: 749.5, y2: 639.5, names: [],                        labelX: 0,     labelY: 0     },
    ];

    // ============================================================
    // HILFSFUNKTION - Linie zeichnen
    // ============================================================
    function addLine(x1, y1, x2, y2, color, width = 2) {
        MapSdk.lines.push({
            x1, y1, x2, y2,
            styling: { main: { strokeStyle: color, lineWidth: width }, mini: { strokeStyle: color, lineWidth: width } },
            drawOnMini: true, drawOnMap: true,
        });
    }

    function addText(x, y, text, color, font) {
        MapSdk.texts.push({ x, y, text, color, font, drawOnMap: true, drawOnMini: true });
    }

    // ============================================================
    // ADELSGRENZEN
    // ============================================================

    // ----- Adelsgrenze ASE (Orange) -----
    addLine(554.5, 599.5, 554.5, 624.5, COLOR_GRENZE_ASE, 3);
    addLine(554.5, 624.5, 534.5, 639.5, COLOR_GRENZE_ASE, 3);
    addLine(534.5, 639.5, 534.5, 664.5, COLOR_GRENZE_ASE, 3);
    addLine(534.5, 664.5, 499.5, 699.5, COLOR_GRENZE_ASE, 3);
    addLine(499.5, 699.5, 499.5, 799.5, COLOR_GRENZE_ASE, 3);

    // ----- Adelsgrenze OLY (Grün) -----
    addLine(554.5, 599.5, 609.5, 599.5, COLOR_GRENZE_OLY, 3);
    addLine(609.5, 599.5, 609.5, 494.5, COLOR_GRENZE_OLY, 3);

    // ============================================================
    // OFF KORRIDORE - automatisch aus OFF_KORRIS generiert
    // ============================================================

    // Separator-Linien
    addLine(609.5, OFF_Y_BOTTOM, 799.5, OFF_Y_BOTTOM, COLOR_KORRI);
    addLine(609.5, 554.5,        699.5, 554.5,        COLOR_KORRI);
    addLine(699.5, 554.5,        749.5, 594.5,        COLOR_KORRI);

    // Separator-Labels (alle 40 Einheiten wiederholt)
    [619.5, 659.5, 699.5, 739.5].forEach(x => {
        addText(x, 542,  "Off",           COLOR_TEXT_NAME,  FONT_LABEL);
        addText(x, 548,  "Front Spieler", COLOR_TEXT_LABEL, FONT_LABEL);
    });
    [619.5, 659.5, 699.5].forEach(x => {
        addText(x, 556, "Deff", COLOR_TEXT_NAME, FONT_LABEL);
    });

    // Korridore generieren
    OFF_KORRIS.forEach(k => {
        const xPos   = k.x + 0.5;
        const color  = k.open ? COLOR_TEXT_OPEN : COLOR_TEXT_NAME;

        // Linie (außer noLine)
        //if (!k.noLine) {
        //    addLine(xPos, OFF_Y_TOP, xPos, OFF_Y_BOTTOM, COLOR_KORRI);
        //}

        // Namen untereinander (je +6px Abstand)
        k.names.forEach((name, i) => {
            const nameColor = k.self || (k.selfName === name) ? COLOR_TEXT_SELF
                            : k.open                          ? COLOR_TEXT_OPEN
                            :                                   COLOR_TEXT_NAME;
            const yOffset = i % 2 === 0 ? 507 : 513;
            addText(k.x + 2, yOffset + Math.floor(i / 2) * 6, name, nameColor, FONT_NAME);
        });
    });

    // ============================================================
    // DEFF KORRIDORE - automatisch aus DEFF_KORRIS generiert
    // ============================================================
    DEFF_KORRIS.forEach(k => {
        addLine(k.x1, k.y1, k.x2, k.y2, COLOR_KORRI);

        k.names.forEach((name, i) => {
            if (!k.labelX) return;
            const nameColor = (k.selfName === name) ? COLOR_TEXT_SELF : COLOR_TEXT_NAME;
            addText(k.labelX, k.labelY + (i * 3), name, nameColor, FONT_NAME);
        });
    });

    // ============================================================
    // RELOAD
    // ============================================================
    MapSdk.mapOverlay.reload();});
  })();