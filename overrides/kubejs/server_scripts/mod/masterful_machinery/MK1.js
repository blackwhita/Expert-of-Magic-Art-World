onEvent('recipes', (event) => {
    const mumetal = [
        'extendedcrafting:basic_component',
        'extendedcrafting:advanced_component',
        'mekanism:steel_casing',
        'ironfurnaces:rainbow_core',
        'modularrouters:item_router',
        'extrastorage:gold_crafter'
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output });
    });
    const recipes = [

        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_pity', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:cast_iron_gear', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:constantan_gear', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:electrum_gear', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:invar_gear', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:compressed_stone', count: 1 } },
                { type: 'masterfulmachinery:create_rotation', data: {"speed": 256 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: false, data: { air: 300 * 4 } }
            ],
              ticks: 80,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:steel_casing', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_advanced', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:upgrade_augment_3', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:steel_ingot', count: 4 } },
                { type: 'masterfulmachinery:create_rotation', data: {"speed": 256 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: false, data: { air: 300 * 4 } }
            ],
              ticks: 80,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'ironfurnaces:rainbow_core', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'rainbowcompound:rainbow_compound', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'ironfurnaces:rainbow_plating', count: 8 } },
                { type: 'masterfulmachinery:create_rotation', data: {"speed": 256 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: false, data: { air: 300 * 4 } }
            ],
              ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'modularrouters:item_router', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_pity', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:cast_iron_ingot', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:alu_fence', count: 4 } },
                { type: 'masterfulmachinery:create_rotation', data: {"speed": 256 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: false, data: { air: 300 * 4 } }
            ],
              ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:broken_advanced_pcb', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:printed_circuit_board', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:insulating_glass', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:high_steel_ingot', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'powah:steel_energized', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'powah:capacitor_spirited', count: 2 } },
                { type: 'masterfulmachinery:create_rotation', data: {"speed": 256 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: false, data: { air: 300 * 4 } }
            ],
              ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extrastorage:gold_crafter', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extrastorage:neural_processor', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'powah:steel_energized', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'ironchest:gold_chest', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extrastorage:iron_crafter', count: 1 } },
                { type: 'masterfulmachinery:create_rotation', data: {"speed": 256 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: false, data: { air: 300 * 4 } }
            ],
              ticks: 200,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'tanknull:tank_5', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:alloy_infused', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'tanknull:tank_1', count: 1 } },
                { type: 'masterfulmachinery:create_rotation', data: {"speed": 256 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: false, data: { air: 300 * 4 } }
            ],
              ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'dankstorage:dank_5', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:alloy_infused', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'dankstorage:dank_1', count: 1 } },
                { type: 'masterfulmachinery:create_rotation', data: {"speed": 256 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: false, data: { air: 300 * 4 } }
            ],
              ticks: 20,
        },
];

        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'assembly_machine_mk1_1';
        recipe.controllerId = 'assembly_machine_mk1';
        event.custom(recipe);
    });
});