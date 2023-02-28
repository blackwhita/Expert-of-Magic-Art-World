onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:manasteel_bee' }).weakNBT().toJson()],
            output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:elementium_bee' }).toJson(),
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'botania:elven_trade',
                ingredients: recipe.inputs,
                output: recipe.output
            })
    });
});
