onEvent('recipes', event => {
    event.remove({ id : 'thermal:compat/integrateddynamics/tree_extractor_integrateddynamics_menril' });
    event.remove({ id : 'thermal:compat/integrateddynamics/tree_extractor_integrateddynamics_menril_filled' });
})
/*onEvent('recipes', (event) => { 
    const recipes = [
        {
            output: 'thermal:upgrade_augment_1',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'emendatusenigmatica:invar_ingot',
                B: Item.of('thermal:energy_cell').ignoreNBT(),
                C: 'xnet:controller',
                D: 'pneumaticcraft:advanced_pcb',
                E: Item.of('thermal:fluid_cell').ignoreNBT()
            },
            id: 'thermal:augments/upgrade_augment_1'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});*/