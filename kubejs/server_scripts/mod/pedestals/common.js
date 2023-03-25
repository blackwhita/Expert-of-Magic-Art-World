onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'pedestals:pedestal/stone333',
            pattern: ['BAB', ' C ', 'CCC'],
            key: {
                A: '#pedestals:linkingtool',
                B: 'pneumaticcraft:reinforced_stone_slab',
                C: 'bloodmagic:largebloodstonebrick'
            },
            id: 'pedestals:pedestal'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
