/*onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                { item: 'eomaw:ingot_iron_compressed_mould', count: 1 }
            ],
            loss_rate: 1,
            results: [{ item: 'pneumaticcraft:ingot_iron_compressed', count: 1 }],
            id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'
        },
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item';
            ingredients.push(input);
        });

        event
            .custom({
                type: 'pneumaticcraft:explosion_crafting',
                inputs: ingredients,
                loss_rate: recipe.loss_rate,
                results: recipe.results
            }).id(recipe.id);
    });
});*/