onEvent('recipes', (event) => {
    const mumetal = [
        'bloodmagic:demoncrystallizer',
        'bloodmagic:demoncrucible'
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output });
    });
    const recipes = [
        {
            inputs: [
                'bloodmagic:alchemy_flask',
                'bloodmagic:soulforge',
                'bloodmagic:voidsigil',
                'bloodmagic:sigilofholding'
            ],
            output: 'bloodmagic:demoncrystallizer',
            minimumDrain: 500.0,
            drain: 100.0,
        },
        {
            inputs: [
                'bloodmagic:syntheticpoint',
                'eidolon:crucible',
                'bloodmagic:telepositionsigil',
                'bloodmagic:lavasigil'
            ],
            output: 'bloodmagic:demoncrucible',
            minimumDrain: 400.0,
            drain: 100.0,
        },
    ]

    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .soulforge(recipe.output, recipe.inputs)
            .minimumDrain(recipe.minimumDrain)
            .drain(recipe.drain)
    });
});
