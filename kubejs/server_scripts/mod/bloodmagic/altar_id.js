onEvent('recipes', (event) => { 
    const recipes = [
        {
            input: 'emendatusenigmatica:arcane_gem',
            output: 'tomeofblood:blood_gem',
            syphon: 2000,
            altarLevel: 0,
            consumptionRate: 50,
            drainRate: 1,
            id:'tomeofblood:altar/blood_gem'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .altar(recipe.output, recipe.input)
            .upgradeLevel(recipe.altarLevel)
            .altarSyphon(recipe.syphon)
            .consumptionRate(recipe.consumptionRate)
            .drainRate(recipe.drainRate)
            .id(recipe.id);
    });
});
