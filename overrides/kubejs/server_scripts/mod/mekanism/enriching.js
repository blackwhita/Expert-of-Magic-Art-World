onEvent('recipes', (event) => {
        const recipes = [
        {
            input: 'integrateddynamics:menril_log',
            output: '2x integrateddynamics:crystalized_menril_chunk',
        },
        {
            input: 'integrateddynamics:menril_log_filled',
            output: '4x integrateddynamics:crystalized_menril_chunk',
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input)//.id(recipe.id);
    });
});
