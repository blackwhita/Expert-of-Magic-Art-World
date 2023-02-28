onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'woot:si_dust',
            pattern: [' A ', 'B B', ' B '],
            key: {
                A: 'minecraft:iron_ingot',
                B: 'ftbsluice:crushed_netherrack'
            },
            id: 'woot:si_dust_1'
        },
        {
            output: '3x woot:si_dust',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: 'minecraft:iron_ingot',
                B: 'ftbsluice:crushed_netherrack',
                C: Item.of('woot:hammer').ignoreNBT()
            },
            id: 'woot:si_dust_2'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
