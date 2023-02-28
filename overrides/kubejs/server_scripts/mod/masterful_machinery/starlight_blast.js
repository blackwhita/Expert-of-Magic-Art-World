onEvent('recipes', (event) => {
    const mumetal = [
    'extendedcrafting:ender_ingot'
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output });
    });
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:high_steel_ingot', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:steel_ingot', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'astralsorcery:liquid_starlight', amount: 1024 }},
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 3000 } }
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:glass_lens', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sand', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'astralsorcery:liquid_starlight', amount: 1024 }},
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 200 } }
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:perfect_dna', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:industrial_dna', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:magic_dna', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'resourcefulbees:honey', amount: 10000 }},
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 8000 } }
            ],
            ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ender_ingot', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:starmetal_ingot', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:nether_star_block', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'rainbowcompound:chorusite_ingot', count: 8 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'mekanismgenerators:fusion_fuel', amount: 10000 }},
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } }
            ],
            ticks: 10,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'create:creative_blaze_cake', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'create:blaze_cake', count: 1 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 10000 } }
            ],
            ticks: 10,
        },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'blast_starlight_other';
        recipe.controllerId = 'blast_starlight';
        event.custom(recipe);
    });
});