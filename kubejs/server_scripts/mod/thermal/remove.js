onEvent('recipes', event => {
    event.remove({ id : 'thermal:compat/integrateddynamics/tree_extractor_integrateddynamics_menril' });
    event.remove({ id : 'thermal:compat/integrateddynamics/tree_extractor_integrateddynamics_menril_filled' });
})
onEvent('recipes', (event) => { 
    const recipes = [
        {
            output: 'eomaw:rf_coil_creative_augment_underfill',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'extendedcrafting:the_ultimate_ingot',
                B: 'thermal:rf_coil_augment'
            },
            id: 'eomaw:rf_coil_creative_augment_underfill'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});