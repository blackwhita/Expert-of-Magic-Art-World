onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:item"}}'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'compactmachines:wall',
                B: 'minecraft:hopper'
            },
            id: 'compactmachines:tunnel/item'
        },
        {
            output: Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:redstone_in"}}'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'compactmachines:wall',
                B: 'minecraft:redstone'
            },
            id: 'compactmachines:tunnel/redstone_in'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
