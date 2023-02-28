/*onEvent('recipes', (event) => {
    const recipes = [
        {
            powerCost: 10000,
            inputCount: 100,
            ingredient: {item: 'mekanismmatter:universal_matter'},
            catalyst: { item: 'extendedcrafting:crystaltine_catalyst' },//催化剂
            result: { item: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}') },
            id: 'extendedcrafting:compressor1'
        }
    ]
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'extendedcrafting:compressor',
                powerCost: recipe.powerCost,
                inputCount: recipe.inputCount,
                ingredient: recipe.ingredient,
                catalyst: recipe.catalyst,
                result:recipe.result
            })
            .id(recipe.id);
    });
});*/
