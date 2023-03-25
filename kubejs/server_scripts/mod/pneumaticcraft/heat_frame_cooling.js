onEvent('recipes', (event) => {
    const recipes = [
        {
            input: { type: "pneumaticcraft:fluid", tag: "pneumaticcraft:plastic", amount: 1000 },
            max_temp: 273,
            result: { item: "pneumaticcraft:plastic" },
            bonus_output: { multiplier: 0.1, limit: 0.75 },
            id:'pneumaticcraft:heat_frame_cooling/plastic'
        }
    ]
    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:heat_frame_cooling';
        event.custom(recipe).id(recipe.id);
    });
})