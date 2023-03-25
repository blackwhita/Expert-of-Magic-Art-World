onEvent('recipes', (event) => {
    const remove_item = [
        'modularrouters:stack_upgrade'
    ]
    remove_item.forEach((output) => {
        event.remove({ output: output });
    }); 
    const recipes = [
        {
            output: Item.of('4x modularrouters:speed_upgrade'),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'modularrouters:blank_upgrade',
                B: 'pneumaticcraft:glycerol',
                C: {
                    type: 'pneumaticcraft:fluid',
                    tag: 'forge:lubricant',
                    amount: 1000
                }
            },
            id: 'modularrouters:speed_upgrade'
        }
    ];
    event.shapeless('modularrouters:stack_upgrade', ['4x modularrouters:speed_upgrade'])

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
