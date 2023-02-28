onEvent('recipes', (event) => {
    const mumetal = [
        'bloodmagic:weakbloodshard'
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output });
    }); 
    const recipes = [
        {
            inputs: [
                'occultism:afrit_essence',
                'bloodmagic:strong_tau',
                'bloodmagic:strong_tau',
                'bloodmagic:strong_tau',
                'bloodmagic:strong_tau'
            ],
            output: 'bloodmagic:weakbloodshard',
            count: 16,
            syphon: 1000,
            ticks: 200,
            orbLevel: 3,
        },
        {
            inputs: ['botania:elven_spreader', 'botania:life_essence', 'bloodmagic:corrosivecrystal', 'bloodmagic:vengefulcrystal', 'bloodmagic:destructivecrystal', 'bloodmagic:steadfastcrystal'],
            output: 'botania:gaia_spreader',
            count: 16,
            syphon: 1000,
            ticks: 200,
            orbLevel: 3,
        },
    ];
    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .alchemytable(Item.of(recipe.output, recipe.count), recipe.inputs)
            .syphon(recipe.syphon)
            .ticks(recipe.ticks)
            .upgradeLevel(recipe.orbLevel)
            //.id(recipe.id);
    });
});
