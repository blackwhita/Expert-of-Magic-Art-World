onEvent('recipes', (event) => {
    event.remove({ output: 'ftbsluice:diamond_mesh' });
    event.remove({ output: 'ftbsluice:blazing_mesh' });
    event.remove({ output: 'pneumaticcraft:pressure_chamber_wall' });
    //powah
    event.remove({ output: 'powah:thermoelectric_plate' });
    const recipes = [
        {
            inputs: [Item.of('ftbsluice:gold_mesh', 1),Item.of('minecraft:redstone', 4),Item.of('minecraft:diamond',4),Item.of('minecraft:gold_ingot', 4)],
            output: Item.of('ftbsluice:diamond_mesh', 1),
            type: 'heated',
        },
        {
            inputs: [Item.of('ftbsluice:diamond_mesh', 1),Item.of('resourcefulbees:blaze_honeycomb', 4),Fluid.of("minecraft:lava", 500)],
            output: Item.of('ftbsluice:blazing_mesh', 1),
            type: 'superheated',
        },
        {
            inputs: [Item.of('minecraft:ghast_tear', 1),Item.of('#forge:sand', 4),Fluid.of("minecraft:lava", 500)],
            output: Item.of('minecraft:soul_sand', 1),
            type: 'heated',
        },
        {
            inputs: [Item.of('pneumaticcraft:reinforced_stone', 8),Fluid.of("minecraft:lava", 500)],
            output: Item.of('pneumaticcraft:pressure_chamber_wall', 1),
            type: 'superheated',
        },
        //powah
        {
            inputs: [Item.of('immersiveengineering:thermoelectric_generator', 1),Fluid.of("minecraft:lava", 500)],
            output: Item.of('powah:thermoelectric_plate', 1),
            type: 'superheated',
        },
        //ther
        {
            inputs: [Item.of('emendatusenigmatica:lumium_ingot', 1)],
            output: Fluid.of('emendatusenigmatica:molten_lumium', 1000),
            type: 'superheated',
        },
        {
            inputs: [Item.of('emendatusenigmatica:cast_iron_ingot', 1)],
            output: Fluid.of('emendatusenigmatica:molten_cast_iron', 1000),
            type: 'superheated',
        },
        {
            inputs: [Item.of('minecraft:redstone', 1)],
            output: Fluid.of('emendatusenigmatica:molten_redstone', 100),
            type: 'heated',
        },
        {
            inputs: [Item.of('minecraft:redstone_block', 1)],
            output: Fluid.of('emendatusenigmatica:molten_redstone', 900),
            type: 'superheated',
        },
        {
            inputs: [Item.of('minecraft:blaze_powder', 8)],
            output: Item.of('minecraft:blaze_rod', 1),
            type: 'unheated',
        },
        {
            inputs: [Item.of('minecraft:popped_chorus_fruit', 1)],
            output: Fluid.of('integrateddynamics:liquid_chorus', 125),
            type: 'superheated',
        },
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.compacting(recipe.output, recipe.inputs)//.id(recipe.id);
        if (recipe.type == 'heated') {
            re.heated();
        }
        if (recipe.type == 'superheated') {
            re.superheated();
        }
    });
});
