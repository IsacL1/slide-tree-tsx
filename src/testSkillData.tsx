import React from 'react';
import { SkillType } from "beautiful-skill-tree"

export const SlideTree: SkillType[] = [
    {
        id: "soyale8",
        title: "Soyale",
        /*attribute: {
            family: "1",
            level: "E"
        },*/
        tooltip: {
            content: "A backward slide, hip internal rotation, one foot on external edge",
            direction: "bottom"
        },
        optional: true,
        children: [
            {
                id: "soyale4",
                title: "Soyale 4 wheels",
                /*attribute: {
                    family: "1",
                    level: "D"
                },*/
                tooltip: {
                    content: "Basic on soyale 8 wheels, sliding wheel on 4 wheels, supporting on toe",
                },
                optional: false,
                children: [
                    {
                        id: "soyalet",
                        title: "Soyale Toe",
                        /*attribute: {
                            family: "1",
                            level: "D"
                        },*/
                        tooltip: {
                            content: "Basic on soyale 4 wheels, sliding wheel on toe, supporting on 4 wheels"
                        },
                        children: [
                            {
                                id: "soyalett",
                                title: "Soyale Toe Toe",
                                /*attribute: {
                                    family: "1",
                                    level: "D"
                                },*/
                                tooltip: {
                                    content: "Basic on soyale 4 wheels, both of sliding and supporting are on toe"
                                },
                                children: []
                            },
                            {
                                id: "soyaleth",
                                title: "Soyale Toe Heel",
                                /*attribute: {
                                    family: "1",
                                    level: "D"
                                },*/
                                tooltip: {
                                    content: "Basic on soyale 4 wheels, sliding wheel on toe, supporting on heel"
                                },
                                optional: false,
                                children: []
                            }
                        ]
                    },
                    {
                        id: "soyaleh",
                        title: "Soyale Heel Toe",
                        /*attribute: {
                            family: "1",
                            level: "D"
                        },*/
                        tooltip: {
                            content: "Basic on soyale 4 wheels, sliding wheel on heel, supporting on toe"
                        },
                        optional: false,
                        children: [
                            {
                                id: "soyaleht",
                                title: "Soyale Heel Toe",
                                /*attribute: {
                                    family: "1",
                                    level: "D"
                                },*/
                                tooltip: {
                                    content: "Basic on soyale 4 wheels, sliding wheel on heel, supporting on toe"
                                },
                                optional: false,
                                children: []
                            },
                            {
                                id: "soyalehh",
                                title: "Soyale Heel Heel",
                                /*attribute: {
                                    family: "1",
                                    level: "D"
                                },*/
                                tooltip: {
                                    content: "Basic on soyale 4 wheels, sboth of sliding and supporting are on heel"
                                },
                                optional: false,
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "acid4",
        title: "Acid 4 wheels",
        /*attribute: {
            family: "1",
            level: "E"
        },*/
        tooltip: {
            direction: "top",
            content: "E"
        },
        optional: false,
        children: [
            {
                id: "acidt",
                title: "Acid toe",
                /*attribute: {
                    family: "1",
                    level: "E"
                },*/
                tooltip: {
                    content: ""
                },
                optional: false,
                children: [
                    {
                        id: "acidtt",
                        title: "Acid toe toe",
                        /*attribute: {
                            family: "1",
                            level: "D"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: []
                    },
                    {
                        id: "acidht",
                        title: "Acid heel toe",
                        /*attribute: {
                            family: "1",
                            level: "D"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: []
                    },
                    {
                        id: "xacid4",
                        title: "Cross Acid 4 wheels",
                        /*attribute: {
                            family: "2",
                            level: "D"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: [
                            {
                                id: "xacidt",
                                title: "Cross Acid toe",
                                /*attribute: {
                                    family: "1",
                                    level: "D"
                                },*/
                                tooltip: {
                                    direction: "top",
                                    content: ""
                                },
                                optional: false,
                                children: [
                                    {
                                        id: "xacidtt",
                                        title: "Cross Acid toe toe",
                                        /*attribute: {
                                            family: "2",
                                            level: "C2"
                                        },*/
                                        tooltip: {
                                            content: ""
                                        },
                                        optional: false,
                                        children: []
                                    },
                                    {
                                        id: "xacidht",
                                        title: "Cross Acid heel toe",
                                        /*attribute: {
                                            family: "2",
                                            level: "C"
                                        },*/
                                        tooltip: {
                                            content: ""
                                        },
                                        optional: false,
                                        children: []
                                    }
                                ]
                            },
                            {
                                id: "xacidh",
                                title: "Cross Acid heel",
                                /*attribute: {
                                    family: "2",
                                    level: "D"
                                },*/
                                tooltip: {
                                    content: ""
                                },
                                optional: false,
                                children: [
                                    {
                                        id: "xacidhh",
                                        title: "Cross Acid heel heel",
                                        /*attribute: {
                                            family: "2",
                                            level: "C"
                                        },*/
                                        tooltip: {
                                            content: ""
                                        },
                                        optional: false,
                                        children: []
                                    },
                                    {
                                        id: "xacidth",
                                        title: "Cross Acid toe heel",
                                        /*attribute: {
                                            family: "2",
                                            level: "C"
                                        },*/
                                        tooltip: {
                                            content: ""
                                        },
                                        optional: false,
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "acidh",
                title: "Acid heel",
                /*attribute: {
                    family: "1",
                    level: "E"
                },*/
                tooltip: {
                    content: ""
                },
                optional: false,
                children: [
                    {
                        id: "acidth",
                        title: "Acid toe heel",
                        /*attribute: {
                            family: "1",
                            level: "D"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: []
                    },
                    {
                        id: "acidhh",
                        title: "Acid heel heel",
                        /*attribute: {
                            family: "1",
                            level: "D"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: []
                    }
                ]
            },
            {
                id: "xacid4",
                title: "Cross Acid 4 wheels",
                /*attribute: {
                    family: "2",
                    level: "D"
                },*/
                tooltip: {
                    content: ""
                },
                optional: false,
                children: []
            }
        ]
    },
    {
        id: "ps8",
        title: "Powerslide",
        /*attribute: {
            family: "4",
            level: "E"
        },*/
        tooltip: {
            content: ""
        },
        optional: false,
        children: [
            {
                id: "psh",
                title: "Powerslide heel",
                /*attribute: {
                    family: "4",
                    level: "E"
                },*/
                tooltip: {
                    content: ""
                },
                optional: false,
                children: [
                    {
                        id: "psht",
                        title: "Powerslide heel toe",
                        /*attribute: {
                            family: "4",
                            level: "E"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: []
                    },
                    {
                        id: "pshh",
                        title: "Powerslide heel heel",
                        /*attribute: {
                            family: "4",
                            level: "E"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: []
                    }
                ]
            },
            {
                id: "pst",
                title: "Powerslide toe",
                /*attribute: {
                    family: "5",
                    level: "E"
                },*/
                tooltip: {
                    content: ""
                },
                optional: false,
                children: [
                    {
                        id: "pstt",
                        title: "Powerslide toe toe",
                        /*attribute: {
                            family: "5",
                            level: "E"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: []
                    },
                    {
                        id: "psth",
                        title: "Powerslide toe heel",
                        /*attribute: {
                            family: "5",
                            level: "E"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: []
                    }
                ]
            }
        ]
    },
    {
        id: "soul4",
        title: "Soul 4 wheels",
        /*attribute: {
            family: "4",
            level: "E"
        },*/
        tooltip: {
            content: ""
        },
        optional: false,
        children: [
            {
                id: "soulh",
                title: "Soul heel",
                /*attribute: {
                    family: "4",
                    level: "E"
                },*/
                tooltip: {
                    content: ""
                },
                optional: false,
                children: []
            },
            {
                id: "soult",
                title: "Soul toe",
                /*attribute: {
                    family: "4",
                    level: "E"
                },*/
                tooltip: {
                    content: ""
                },
                optional: false,
                children: []
            }
        ]
    },
    {
        id: "es4",
        title: "Ernsui 4 wheels",
        /*attribute: {
            family: "1",
            level: "C"
        },*/
        tooltip: {
            content: "A backward slide, one leg hip external rotation and press on internal edge"
        },
        optional: false,
        children: [
            {
                id: "estt",
                title: "Ernsui toe toe",
                /*attribute: {
                    family: "1",
                    level: "B"
                },*/
                tooltip: {
                    content: "Basic on Ernsui 4 wheels, both of sliding and supporting are on toe"
                },
                optional: false,
                children: []
            },
            {
                id: "esht",
                title: "Ernsui heel toe",
                /*attribute: {
                    family: "1",
                    level: "B"
                },*/
                tooltip: {
                    content: "Basic on Ernsui 4 wheels, sliding on heel and supporting on toe"
                },
                optional: false,
                children: []
            },
            {
                id: "esth",
                title: "Ernsui toe heel",
                /*attribute: {
                    family: "1",
                    level: "B"
                },*/
                tooltip: {
                    content: "Basic on Ernsui 4 wheels, sliding on toe and supporting on heel"
                },
                optional: false,
                children: []
            },
            {
                id: "eshh",
                title: "Ernsui heel heel",
                /*attribute: {
                    family: "1",
                    level: "B"
                },*/
                tooltip: {
                    content: "Basic on Ernsui 4 wheels, both of sliding and supporting are on heel"
                },
                optional: false,
                children: []
            }
        ]
    }
]

export const levelE: SkillType[] = [
    {
        id: "soyale8",
        title: "Soyale",
        /*attribute: {
            family: "1",
            level: "E"
        },*/
        tooltip: {
            content: "A backward slide, hip internal rotation, one foot on external edge",
            direction: "bottom"
        },
        optional: true,
        children: [
            {
                id: "soyale4",
                title: "Soyale 4 wheels",
                /*attribute: {
                    family: "1",
                    level: "D"
                },*/
                tooltip: {
                    content: "Basic on soyale 8 wheels, sliding wheel on 4 wheels, supporting on toe"
                },
                optional: false,
                children: [
                    {
                        id: "soyalet",
                        title: "Soyale Toe",
                        /*attribute: {
                            family: "1",
                            level: "D"
                        },*/
                        tooltip: {
                            content: "Basic on soyale 4 wheels, sliding wheel on toe, supporting on 4 wheels"
                        },
                        children: [
                            {
                                id: "soyalett",
                                title: "Soyale Toe Toe",
                                /*attribute: {
                                    family: "1",
                                    level: "D"
                                },*/
                                tooltip: {
                                    content: "Basic on soyale 4 wheels, both of sliding and supporting are on toe"
                                },
                                children: []
                            },
                            {
                                id: "soyaleth",
                                title: "Soyale Toe Heel",
                                /*attribute: {
                                    family: "1",
                                    level: "D"
                                },*/
                                tooltip: {
                                    content: "Basic on soyale 4 wheels, sliding wheel on toe, supporting on heel"
                                },
                                optional: false,
                                children: []
                            }
                        ]
                    },
                    {
                        id: "soyaleh",
                        title: "Soyale Heel Toe",
                        /*attribute: {
                            family: "1",
                            level: "D"
                        },*/
                        tooltip: {
                            content: "Basic on soyale 4 wheels, sliding wheel on heel, supporting on toe"
                        },
                        optional: false,
                        children: [
                            {
                                id: "soyaleht",
                                title: "Soyale Heel Toe",
                                /*attribute: {
                                    family: "1",
                                    level: "D"
                                },*/
                                tooltip: {
                                    content: "Basic on soyale 4 wheels, sliding wheel on heel, supporting on toe"
                                },
                                optional: false,
                                children: []
                            },
                            {
                                id: "soyalehh",
                                title: "Soyale Heel Heel",
                                /*attribute: {
                                    family: "1",
                                    level: "D"
                                },*/
                                tooltip: {
                                    content: "Basic on soyale 4 wheels, sboth of sliding and supporting are on heel"
                                },
                                optional: false,
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "acid4",
        title: "Acid 4 wheels",
        /*attribute: {
            family: "1",
            level: "E"
        },*/
        tooltip: {
            direction: "top",
            content: "E"
        },
        optional: false,
        children: [
            {
                id: "acidt",
                title: "Acid toe",
                /*attribute: {
                    family: "1",
                    level: "E"
                },*/
                tooltip: {
                    content: ""
                },
                optional: false,
                children: [
                    {
                        id: "acidtt",
                        title: "Acid toe toe",
                        /*attribute: {
                            family: "1",
                            level: "D"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: []
                    },
                    {
                        id: "acidht",
                        title: "Acid heel toe",
                        /*attribute: {
                            family: "1",
                            level: "D"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: []
                    },
                    {
                        id: "acid4",
                        title: "href='soyalett'",
                        /*attribute: {
                            family: "1",
                            level: "D"
                        },*/
                        tooltip: {
                            content: ""
                        }, children: []
                    }
                ]
            }
        ]
    },
    {
        id: "soul4",
        title: "Soul 4 wheels",
        /*attribute: {
            family: "4",
            level: "E"
        },*/
        tooltip: {
            content: ""
        },
        optional: false,
        children: [
            {
                id: "soulh",
                title: "Soul heel",
                /*attribute: {
                    family: "4",
                    level: "E"
                },*/
                tooltip: {
                    content: ""
                },
                optional: false,
                children: []
            },
            {
                id: "soult",
                title: "Soul toe",
                /*attribute: {
                    family: "4",
                    level: "E"
                },*/
                tooltip: {
                    content: ""
                },
                optional: false,
                children: []
            }
        ]
    },
    {
        id: "ps8",
        title: "Powerslide",
        /*attribute: {
            family: "4",
            level: "E"
        },*/
        tooltip: {
            content: ""
        },
        optional: false,
        children: [
            {
                id: "psh",
                title: "Powerslide heel",
                /*attribute: {
                    family: "4",
                    level: "E"
                },*/
                tooltip: {
                    content: ""
                },
                optional: false,
                children: [
                    {
                        id: "psht",
                        title: "Powerslide heel toe",
                        /*attribute: {
                            family: "4",
                            level: "E"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: []
                    },
                    {
                        id: "pshh",
                        title: "Powerslide heel heel",
                        /*attribute: {
                            family: "4",
                            level: "E"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: []
                    }
                ]
            },
            {
                id: "pst",
                title: "Powerslide toe",
                /*attribute: {
                    family: "5",
                    level: "E"
                },*/
                tooltip: {
                    content: ""
                },
                optional: false,
                children: [
                    {
                        id: "pstt",
                        title: "Powerslide toe toe",
                        /*attribute: {
                            family: "5",
                            level: "E"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: []
                    },
                    {
                        id: "psth",
                        title: "Powerslide toe heel",
                        /*attribute: {
                            family: "5",
                            level: "E"
                        },*/
                        tooltip: {
                            content: ""
                        },
                        optional: false,
                        children: []
                    }
                ]
            }
        ]
    }
]

export const levelC: SkillType[] = [
    {
        id: "es4",
        title: "Ernsui 4 wheels",
        /*attribute: {
            family: "1",
            level: "C"
        },*/
        tooltip: {
            content: "A backward slide, one leg hip external rotation and press on internal edge"
        },
        optional: false,
        children: [
            {
                id: "estt",
                title: "Ernsui toe toe",
                /*attribute: {
                    family: "1",
                    level: "B"
                },*/
                tooltip: {
                    content: "Basic on Ernsui 4 wheels, both of sliding and supporting are on toe"
                },
                optional: false,
                children: []
            },
            {
                id: "esht",
                title: "Ernsui heel toe",
                /*attribute: {
                    family: "1",
                    level: "B"
                },*/
                tooltip: {
                    content: "Basic on Ernsui 4 wheels, sliding on heel and supporting on toe"
                },
                optional: false,
                children: []
            },
            {
                id: "esth",
                title: "Ernsui toe heel",
                /*attribute: {
                    family: "1",
                    level: "B"
                },*/
                tooltip: {
                    content: "Basic on Ernsui 4 wheels, sliding on toe and supporting on heel"
                },
                optional: false,
                children: []
            },
            {
                id: "eshh",
                title: "Ernsui heel heel",
                /*attribute: {
                    family: "1",
                    level: "B"
                },*/
                tooltip: {
                    content: "Basic on Ernsui 4 wheels, both of sliding and supporting are on heel"
                },
                optional: false,
                children: []
            }
        ]
    }
]

export const levelB: SkillType[] = [
    {
        id: "xes4",
        title: "Cross Ernsui 4 wheels",
        /*attribute: {
            family: "1",
            level: "B"
        },*/
        tooltip: {
            content: "A skill like Ernsui but cross"
        },
        optional: false,
        children: [
            {
                id: "xest",
                title: "Cross Ernsui toe",
                /*attribute: {
                    family: "1",
                    level: "A"
                },*/
                tooltip: {
                    content: "Basic on Cross Ernsui 4 wheels, sliding tip toe"
                },
                optional: false,
                children: []
            },
            {
                id: "xesh",
                title: "Cross Ernsui heel",
                /*attribute: {
                    family: "1",
                    level: "A"
                },*/
                tooltip: {
                    content: "Basic on Cross Ernsui 4 wheels, sliding on heel"
                },
                optional: false,
                children: []
            },
            {
                id: "xestt",
                title: "Cross Ernsui toe toe",
                /*attribute: {
                    family: "1",
                    level: "A"
                },*/
                tooltip: {
                    content: "Basic on Cross Ernsui 4 wheels, sliding tip toe"
                },
                optional: false,
                children: []
            },
            {
                id: "xesht",
                title: "Cross Ernsui heel toe",
                /*attribute: {
                    family: "1",
                    level: "A"
                },*/
                tooltip: {
                    content: "Basic on Cross Ernsui 4 wheels, sliding tip toe"
                },
                optional: false,
                children: []
            },
            {
                id: "xeshh",
                title: "Cross Ernsui heel heel",
                /*attribute: {
                    family: "1",
                    level: "A"
                },*/
                tooltip: {
                    content: "Basic on Cross Ernsui 4 wheels, both of slidingand support are heel. Btw, it is theory exist"
                },
                optional: false,
                children: []
            }
        ]
    }
]

export const levelA: SkillType[] = [
    {
        id: "xes4",
        title: "Cross Ernsui 4 wheels",
        /*attribute: {
            family: "1",
            level: "B"
        },*/
        tooltip: {
            content: "A skill like Ernsui but cross"
        },
        optional: false,
        children: [
            {
                id: "xest",
                title: "Cross Ernsui toe",
                /*attribute: {
                    family: "1",
                    level: "A"
                },*/
                tooltip: {
                    content: "Basic on Cross Ernsui 4 wheels, sliding tip toe"
                },
                optional: false,
                children: []
            },
            {
                id: "xesh",
                title: "Cross Ernsui heel",
                /*attribute: {
                    family: "1",
                    level: "A"
                },*/
                tooltip: {
                    content: "Basic on Cross Ernsui 4 wheels, sliding on heel"
                },
                optional: false,
                children: []
            },
            {
                id: "xestt",
                title: "Cross Ernsui toe toe",
                /*attribute: {
                    family: "1",
                    level: "A"
                },*/
                tooltip: {
                    content: "Basic on Cross Ernsui 4 wheels, sliding tip toe"
                },
                optional: false,
                children: []
            },
            {
                id: "xesht",
                title: "Cross Ernsui heel toe",
                /*attribute: {
                    family: "1",
                    level: "A"
                },*/
                tooltip: {
                    content: "Basic on Cross Ernsui 4 wheels, sliding tip toe"
                },
                optional: false,
                children: []
            },
            {
                id: "xeshh",
                title: "Cross Ernsui heel heel",
                /*attribute: {
                    family: "1",
                    level: "A"
                },*/
                tooltip: {
                    content: "Basic on Cross Ernsui 4 wheels, both of slidingand support are heel. Btw, it is theory exist"
                },
                optional: false,
                children: []
            }
        ]
    }
]
