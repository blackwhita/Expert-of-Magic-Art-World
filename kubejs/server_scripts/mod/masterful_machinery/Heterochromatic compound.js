onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'create:refined_radiance', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:glass_bottle', count: 4 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'create:chromatic_compound', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'resourcefulbees:starry_honey_bottle', count: 4 } },
                { type: 'masterfulmachinery:create_rotation', data: {"speed": 256 } }
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item:'create:shadow_steel', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'create:chromatic_compound', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:outpost_finder', count: 1 } },
                { type: 'masterfulmachinery:create_rotation', data: {"speed": 256 } }
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'createaddition:overcharged_alloy', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'create:chromatic_compound', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:wirecoil_structure_steel', count: 4 } },
                { type: 'masterfulmachinery:create_rotation', data: {"speed": 256 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 1000 } },
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'rainbowcompound:rainbow_compound', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'rainbowcompound:blazeite_ingot', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'rainbowcompound:chorusite_ingot', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'rainbowcompound:frostite_ingot', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'rainbowcompound:warpedite_ingot', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'createaddition:overcharged_alloy', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:refined_radiance', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:shadow_steel', count: 1 } },
                { type: 'masterfulmachinery:create_rotation', data: {"speed": 256 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 8000 } },
            ],
            ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'ars_nouveau:mythical_clay', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'ars_nouveau:marvelous_clay', count: 1 } },
                { type: 'masterfulmachinery:create_rotation', data: {"speed": 256 } }
            ],
            ticks: 20,
        },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'heterochromatic_compound_1';
        recipe.controllerId = 'heterochromatic_compound';
        event.custom(recipe);
    });
});
