/*onEvent('recipes', (event) => {
        const recipes = [
        {
            results: [
                {fluid: "immersivepetroleum:lubricant",amount: 9},
                {fluid: "immersivepetroleum:diesel_sulfur",amount: 14},
                {fluid: "immersivepetroleum:gasoline",amount: 39}
            ],
            byproducts: [
                {item: 'immersivepetroleum:bitumen',chance: 0.07}
            ],
            input: { tag: 'forge:crude_oil', amount: 75 },
            time: 1,
            energy: 2048,
            id: 'immersivepetroleum:distillationtower/oilcracking'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:distillation';
        event.custom(recipe).id(recipe.id);
    });
});
*/