/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'berkshire-swash, cursive': '<script src=\"http://use.edgefonts.net/berkshire-swash:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['184px', '122px', '350px', '28px', 'auto', 'auto'],
                            overflow: 'visible',
                            text: "Viaja todos los dias a 59.000!!",
                            align: "left",
                            font: ['berkshire-swash, cursive', [1.7, "em"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textShadow: ["rgba(0,0,0,1.00)", 2, 3, 8]
                        },
                        {
                            id: 'LAN',
                            type: 'image',
                            rect: ['-74px', '-88px', '132px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"LAN.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '100px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    labels: {
                        "Inicio": 0,
                        "Inicio_Texto": 2000,
                        "Fin": 7000
                    },
                    data: [
                        [
                            "eid4",
                            "location",
                            0,
                            2000,
                            "easeInExpo",
                            "${LAN}",
                            [[-7.87, -50.86, 0, 0, 0, 0,0],[48.43, 66.55, 249.28, 84.99, 145.53, 49.62,135.98],[274.86, 45.54, 0, 0, 0, 0,366.49]]
                        ],
                        [
                            "eid6",
                            "location",
                            2500,
                            1500,
                            "easeOutBounce",
                            "${LAN}",
                            [[275.02, 45.41, 0, 0, 0, 0,0],[77.36, 45.5, 0, 0, 0, 0,197.65]]
                        ],
                        [
                            "eid8",
                            "top",
                            4000,
                            2000,
                            "linear",
                            "${Text3}",
                            '122px',
                            '31px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Banner_edgeActions.js");
})("EDGE-40676326");
