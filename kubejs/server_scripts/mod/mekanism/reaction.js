/*onEvent('recipes', (event) => {
        const recipes = [
        {
            itemInput: { amount: 2, ingredient: { tag: 'forge:fuels/bio' } },
            fluidInput: { amount: 10, tag: 'minecraft:water' },
            gasInput: { amount: 100, gas: 'mekanism:hydrogen' },
            energyRequired: 100,
            duration: 2000,
            itemOutput: { item: 'mekanism:substrate' },
            gasOutput: { gas: 'mekanism:ethene', amount: 100 },
        },
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'mekanism:reaction',
            itemInput: recipe.itemInput,
            fluidInput: recipe.fluidInput,
            gasInput: recipe.gasInput,
            duration: recipe.duration,
            itemOutput: recipe.itemOutput,
            gasOutput: recipe.gasOutput
        };
        if (recipe.energyRequired) {
            constructed_recipe.energyRequired = recipe.energyRequired;
        }
        event.custom(constructed_recipe)//.id(recipe.id);
    });
});*/
