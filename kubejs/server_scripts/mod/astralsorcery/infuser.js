onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'kubejs:perfect_dna',
            fluid: 'astralsorcery:liquid_starlight',
            consumptionChance: 8.00,
            output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:astral_bee' }).toJson(),
            count: 1,
            duration: 1000,
            id:'resourcefulbees:bee_jar/astral_bee'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'astralsorcery:infuser',
                fluidInput: recipe.fluid,
                input: Ingredient.of(recipe.input).toJson(),
                output: Item.of(recipe.output, recipe.count).toResultJson(),
                consumptionChance: recipe.consumptionChance,
                duration: recipe.duration,
                consumeMultipleFluids: false,
                acceptChaliceInput: true,
                copyNBTToOutputs: false
            })
            .id(recipe.id);
    });
});
