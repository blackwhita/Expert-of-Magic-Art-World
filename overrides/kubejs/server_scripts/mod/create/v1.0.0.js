onEvent('recipes', (event) => {
    const recipes = [
        {
            superheated: true,
            inputs: [Item.of('#forge:dusts/obsidian', 3),Item.of('minecraft:glowstone_dust', 3),'create:polished_rose_quartz'],
            output: Item.of('create:chromatic_compound', 1),
            id:'create:mixing/chromatic_compound'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id);

        if (recipe.heated) {
            re.heated();
        } else if (recipe.superheated) {
            re.superheated();
        } else {
            //unheated
        }
    });
});
