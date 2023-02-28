onEvent('recipes', (event) => {
    const remove_item = [
        'extrastorage:iron_crafter'
    ]
    remove_item.forEach((output) => {
        event.remove({ output: output });
    }); 
    const recipes = [
        {
            output: Item.of('extrastorage:iron_crafter'),
            pattern: ['ABA', ' C ', 'A A'],
            key: {
                A: 'emendatusenigmatica:cast_iron_ingot',
                B: 'ironchest:iron_chest',
                C: 'refinedstorage:crafter'
            },
        },
        {
            output: Item.of('4x refinedstorage:speed_upgrade'),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'refinedstorage:upgrade',
                B: 'pneumaticcraft:glycerol',
                C: {
                    type: 'pneumaticcraft:fluid',
                    tag: 'forge:lubricant',
                    amount: 1000
                }
            },
            id: 'refinedstorage:speed_upgrade'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
