onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'farmersdelight:onion',
            inputs: ['simplefarming:onion']
        },
        {
            output: 'simplefarming:onion',
            inputs: ['farmersdelight:onion']
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs)//.id(recipe.id);
    });
});
