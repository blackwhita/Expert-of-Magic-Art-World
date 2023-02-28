onEvent('recipes', (event) => {
    const mumetal = [
    'bloodmagic:bettercapacityrune', 
    'bloodmagic:altarcapacityrune', 
    'bloodmagic:accelerationrune', 
    'bloodmagic:speedrune', 
    'bloodmagic:selfsacrificerune', 
    'bloodmagic:sacrificerune']
    mumetal.forEach((output) => {
        event.remove({ output: output });
    });
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:speedrune', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:blankrune', count: 1 } },
                { type: 'masterfulmachinery:items', data: {  tag: 'forge:stone', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:blankslate', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sugar', count: 2 } },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 96000 } }
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:sacrificerune', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:blankrune', count: 1 } },
                { type: 'masterfulmachinery:items', data: {  tag: 'forge:stone', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:reinforcedslate', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'powah:steel_energized', count: 2 } },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 96000 } }
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:selfsacrificerune', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:blankrune', count: 1 } },
                { type: 'masterfulmachinery:items', data: {  tag: 'forge:stone', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:reinforcedslate', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:ingot_refined_glowstone', count: 2 } },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 96000 } }
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:altarcapacityrune', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:blankrune', count: 1 } },
                { type: 'masterfulmachinery:items', data: {  tag: 'forge:stone', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:reinforcedslate', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal_extra:advanced_fluid_tank_augment', count: 2 } },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 96000 } }
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:bettercapacityrune', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:blankrune', count: 1 } },
                { type: 'masterfulmachinery:items', data: {  tag: 'forge:stone', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:reinforcedslate', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal_extra:bigger_fluid_tank_augment', count: 2 } },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 96000 } }
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:accelerationrune', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:blankrune', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal_extra:bigger_fluid_tank_augment', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:reinforcedslate', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'powah:steel_energized', count: 2 } },
                { type: 'masterfulmachinery:botania_mana', consumeInstantly: true, data: { amount: 96000 } }
            ],
            ticks: 20,
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'eroded_altar_1';
        recipe.controllerId = 'eroded_altar';
        event.custom(recipe);
    });
});