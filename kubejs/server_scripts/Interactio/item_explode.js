onEvent('recipes', (event) => {
    event.remove({ output: 'pneumaticcraft:ingot_iron_compressed' });
    const id_prefix = 'eomaw:interactio/item_explode/';
    const recipes = [
        /*{
            inputs: [
                { item: 'create:andesite_alloy', count: 1 },
                { item: 'naturesaura:infused_iron', count: 1 },
                { item: 'naturesaura:tainted_gold', count: 1 },
            ],
            output: {
                entries: [
                    { result: { item: 'pneumaticcraft:ingot_iron_compressed', count: 3 }, weight: 1 }
                ],
                empty_weight: 0,
                rolls: 100
            },
            id: `${id_prefix}ingot_iron_compressed`
        },*/
        {
            inputs: [
                { item: 'eomaw:ingot_iron_compressed_mould', count: 1 }
            ],
            output: {
                entries: [
                    { result: { item: 'pneumaticcraft:ingot_iron_compressed', count: 1 }, weight: 1 }
                ],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}ingot_iron_compressed`
        }//v4.0.0
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'interactio:item_explode',
                inputs: recipe.inputs,
                output: recipe.output
            })
            .id(recipe.id);
    });
});