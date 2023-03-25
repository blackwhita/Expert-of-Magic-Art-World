onEvent('recipes', (event) => {

    data = {
        recipes: [
            {
                input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }).weakNBT().toJson(),
                output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:bloody_bee' }).toResultJson(),
                syphon: 50000,
                altarLevel: 3,
                consumptionRate: 50,
                drainRate: 50,
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .altar(recipe.output, recipe.input)
            .upgradeLevel(recipe.altarLevel)
            .altarSyphon(recipe.syphon)
            .consumptionRate(recipe.consumptionRate)
            .drainRate(recipe.drainRate)
    });
});
