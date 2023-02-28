onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input1: Item.of('8x emendatusenigmatica:steel_ingot'),
                secondaries: [
                    'ironfurnaces:rainbow_coal',
                    //Ingredient.of('2x #forge:dusts/quartz')
                ],
                outputs: ['8x kubejs:high_steel_ingot'],
                time: 400,
                energy: 204800,
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering
            .arc_furnace(recipe.outputs, recipe.input1, recipe.secondaries)
            //.id(recipe.id);

        if (recipe.time) {
            re.time(recipe.time);
        }

        if (recipe.energy) {
            re.energy(recipe.energy);
        }
    });
});
