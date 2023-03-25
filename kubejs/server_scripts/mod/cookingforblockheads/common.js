onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'cookingforblockheads:sink',
            pattern: ['AAA', 'BCB', 'BBB'],
            key: {
                A: 'minecraft:iron_ingot',
                B: '#chisel:terracotta',
                C: 'bloodmagic:watersigil'
            },
            id: 'cookingforblockheads:sink'
        },
        {
            output: Item.of('8x minecraft:crimson_planks'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#minecraft:planks',
                B: 'minecraft:lava_bucket',
                C: 'bloodmagic:watersigil'
            },
            id: 'minecraft:crimson_planks_1'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
