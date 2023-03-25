onEvent('recipes', (event) => {
    event.remove({ output: 'extendedcrafting:luminessence' });
    const recipes = [
        {
            item_input: { item: 'minecraft:redstone_block' },
            fluid_output: { type: 'pneumaticcraft:fluid', fluid: 'thermal:redstone', amount: 1000 },
            pressure: 4.8,
            exothermic: false,
            temperature: { min_temp: 815 },
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:redstone', amount: 900 },
            item_input: { item: 'industrialforegoing:machine_frame_pity' },
            item_output: { item: 'thermal:fluid_cell_frame', count: 1 },
            pressure: 4.8,
            exothermic: false,
            temperature: { min_temp: 815 },
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'emendatusenigmatica:molten_lumium', amount: 1000 },
            item_output: { item: 'extendedcrafting:luminessence', count: 2 },
            pressure: 4.8,
            exothermic: false,
            temperature: { min_temp: 815 },
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:resin', amount: 100 },
            item_input: { item: 'integrateddynamics:menril_log' },
            fluid_output: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:menril_resin', amount: 100 },
            pressure: 4.8,
            exothermic: false,
            temperature: { min_temp: 815 },
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:resin', amount: 900 },
            item_input: { item: 'integrateddynamics:menril_wood' },
            fluid_output: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:menril_resin', amount: 900 },
            pressure: 4.8,
            exothermic: false,
            temperature: {min_temp: 815 },
        },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe)//.id(recipe.id);
    });
});
