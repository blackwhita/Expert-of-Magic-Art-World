onEvent('recipes', (event) => {
        const recipes = [
        {
            input: 'integrateddynamics:menril_log',
            output: '2x integrateddynamics:crystalized_menril_chunk',
        },
        {
            input: 'integrateddynamics:menril_log_filled',
            output: '4x integrateddynamics:crystalized_menril_chunk',
        },
        {
            input: '4x astralsorcery:stardust',
            output: 'astralsorcery:starmetal_ore',
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input)//.id(recipe.id);
    });
});
