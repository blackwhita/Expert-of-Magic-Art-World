onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [{ item: 'pneumaticcraft:compressed_stone' }],
            output: {
                item: 'occultism:otherstone',
                count: 2
            },
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'occultism:spirit_trade',
            ingredients: recipe.inputs,
            result: recipe.output
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
