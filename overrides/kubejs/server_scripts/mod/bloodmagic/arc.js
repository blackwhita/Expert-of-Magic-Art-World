/*onEvent('recipes', (event) => {
        const recipes = [
        {
            output: 'eidolon:unholy_symbol',
            input: 'bloodmagic:weakbloodorb',
            tool: '#bloodmagic:arc/reverter',
            extraOutputs: [],
            consume: true,
            id: 'bloodmagic:arc/reversion/weak_blood_orb'
        },
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .arc(recipe.output, recipe.input, recipe.tool, recipe.extraOutputs)
            .consumeIngredient(recipe.consume)
            //.id(recipe.id);

        if (recipe.outputFluid) {
            re.outputFluid(recipe.outputFluid);
        }
    });
});*/
