onEvent('recipes', (event) => {
    const Recipes = [
        {
            output: 'industrialforegoing:wither_builder',
            pattern: ['ABA', 'BCB', 'DDD'],
            key: {
                A: 'industrialforegoing:plastic',
                B: 'minecraft:nether_star',
                C: 'industrialforegoing:machine_frame_advanced',
                D: 'minecraft:soul_sand'
            },
            id: 'industrialforegoing:wither_builder'
        }
    ];

    Recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
