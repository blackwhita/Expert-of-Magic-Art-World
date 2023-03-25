onEvent('recipes', (event) => {
    const remove = [
        'integrateddynamics:squeezer'
    ]
    remove.forEach((output) => {
        event.remove({ output: output });
    }); 
    /*const recipes = [
        {
            output: Item.of('item', 24),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'item',
                B: 'item'
            },
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key);
    });*/
});
