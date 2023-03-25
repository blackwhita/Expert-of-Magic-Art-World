onEvent('recipes', (event) => {
    const recipes = [
        {
        outputs:'astralsorcery:stardust',
        input:['astralsorcery:starmetal_ingot']
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.crushing(recipe.outputs, recipe.input)//.id(recipe.id);
    });
});
