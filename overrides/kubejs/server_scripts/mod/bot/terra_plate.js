onEvent('recipes', (event) => {
    event.remove({output : 'naturesaura:generator_limit_remover'})
    const recipes = [
        {
            inputs: [
                { item: 'naturesaura:sky_ingot' },
                { item: 'botania:mana_pearl' },
                { item: 'resourcefulbees:terrestrial_honeycomb' },
                { item: 'botania:mana_diamond' },
                { item: 'occultism:iesnium_ingot' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 300000,
        },
        {
            inputs: [
                { item: 'naturesaura:sky_ingot' },
                { item: 'botania:mana_pearl' },
                { item: 'botania:manasteel_ingot' },
                { item: 'botania:mana_diamond' },
                { item: 'occultism:iesnium_ingot' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 500000,
        },
        {
            inputs: [
                { item: 'botania:forest_eye' },
                { item: 'naturesaura:token_euphoria' },
                { item: 'naturesaura:token_rage' },
                { item: 'naturesaura:token_grief' },
                { item: 'naturesaura:token_terror' }
            ],
            output: { item: 'naturesaura:generator_limit_remover' },
            mana: 2000000,
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:terra_plate',
            ingredients: recipe.inputs.map((input) => Ingredient.of(input).toJson()),
            result: Item.of(recipe.output).toJson(),
            mana: recipe.mana
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
