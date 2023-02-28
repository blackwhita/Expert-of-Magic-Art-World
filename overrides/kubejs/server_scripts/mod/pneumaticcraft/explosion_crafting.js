onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                { item: 'create:andesite_alloy', count: 1 },
                { item: 'naturesaura:infused_iron', count: 1 },
                { item: 'naturesaura:tainted_gold', count: 1 }
            ],
            loss_rate: 1,
            results: [{ item: 'pneumaticcraft:ingot_iron_compressed', count: 3 }],
        },
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item';
            ingredients.push(input);
        });

        event
            .custom({
                type: 'pneumaticcraft:explosion_crafting',
                inputs: ingredients,
                loss_rate: recipe.loss_rate,
                results: recipe.results
            })
    });
});
onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/assembly/';

    /*{
        input: { item: ''},
        results: { item: '', count: nb },
        loss_rate: nb,
        id: ``
    }*/

    const recipes = [
      // compressed iron ingot
      {
        input: { item: 'undergarden:cloggrum_ingot' },
        results: [{ item: 'pneumaticcraft:ingot_iron_compressed' }],
        loss_rate: 10,
      }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:explosion_crafting',
                loss_rate: recipe.loss_rate,
                input: recipe.input,
                results: recipe.results,
            })
    });
});
