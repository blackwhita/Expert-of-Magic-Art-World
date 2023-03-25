/*onEvent('recipes', (event) => {
    event.remove({ output: 'eidolon:ender_calx'  });
         recipes= [
        {
            outputs:[
                { item: "eidolon:ender_calx", count: 1 } ,
            ],
            steps: [
                {"ingredients": [
                    {"tag": "forge:ender_pearls"},
                    {"item": 'eidolon:gold_inlay'}]
                }]
        }
    ]
    recipes.forEach((recipe) => {
        recipe.type = "eidolon:crucible";
        recipe.controllerId = 'heterochromatic_compound';
        event.custom(recipe);
    });
});*/