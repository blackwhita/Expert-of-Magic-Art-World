/*onEvent('recipes', (event) => {
        //Recipes use about 40k rf per point of duration. 
        //Duration is not a fixed speed, as the machine runs at 10000% speed when the energy buffer is full.       
    var data = {
        recipes: [
            {
                output: Item.of('fluxnetworks:flux_plug'),
                itemInput: { ingredient: { item: 'powah:ender_cell_nitro' } },
                gasInput: { amount: 10, gas: 'mekanism:antimatter' },
                duration: 25000,
            },
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe)//.id(recipe.id);
    });
});*/
