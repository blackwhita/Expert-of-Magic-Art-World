onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Fluid.of('astralsorcery:liquid_starlight', 100),
            input: 'create:refined_radiance',
            energy: 5000,
        },
        {
            output: Fluid.of('emendatusenigmatica:molten_redstone', 100),
            input: 'minecraft:redstone',
            energy: 5000,
        },
        {
            output: Fluid.of('emendatusenigmatica:molten_redstone', 900),
            input: 'minecraft:redstone_block',
            energy: 45000,
        },
        {
            output: Fluid.of('emendatusenigmatica:molten_cast_iron', 144),
            input: 'emendatusenigmatica:cast_iron_ingot',
            energy: 5000,
        },
        {
            output: Fluid.of('emendatusenigmatica:molten_cast_iron', 1296),
            input: 'emendatusenigmatica:cast_iron_block',
            energy: 45000,
        },
        {
            output: Fluid.of('kubejs:molten_black_iron', 144),
            input: 'extendedcrafting:black_iron_ingot',
            energy: 5000,
        },
        {
            output: Fluid.of('kubejs:molten_black_iron', 1296),
            input: 'extendedcrafting:black_iron_block',
            energy: 45000,
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.crucible(recipe.output, recipe.input).energy(recipe.energy);//.id(recipe.id)
    });
});
