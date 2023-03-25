onEvent('recipes', (event) => {
    event.remove({ output: 'occultism:otherworld_ashes'})
    event.remove({ id: 'immersiveengineering:cokeoven/charcoal'})
    const recipes = [
        {
            output: 'occultism:otherworld_ashes',
            input: 'occultism:otherworld_log',
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.coke_oven(recipe.output, recipe.input)//.id(recipe.id);
    });
});
