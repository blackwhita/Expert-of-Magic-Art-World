onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                'naturesaura:birth_spirit',
                'minecraft:snowball'
            ],
            entity: 'thermal:blizz',
            aura: 100000,
            time: 120,
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'minecraft:andesite'
            ],
            entity: 'thermal:basalz',
            aura: 100000,
            time: 120,
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#forge:sandstone'
            ],
            entity: 'thermal:blitz',
            aura: 100000,
            time: 120,
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'minecraft:emerald_block',
                'minecraft:emerald_block',
                'minecraft:emerald_block'
            ],
            entity: 'minecraft:villager',
            aura: 1000000,
            time: 120,
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'eidolon:lesser_soul_gem',
                'occultism:spirit_attuned_gem'
            ],
            entity: 'minecraft:wandering_trader',
            aura: 1000000,
            time: 120,
        }
        /////////////////////////////////////////////
    ];
    /*animal_spawner_bee.forEach((bee) => {
        recipes.push(
            {
                inputs: [
                    'naturesaura:birth_spirit',
                    bee.input,
                    'minecraft:honeycomb_block'
                ],
                entity: bee.bee,
                aura: 100000,
                time: 120,
            }
        )
    })*/

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        event.custom(recipe)//.id(recipe.id);
    });
});
