onEvent('recipes', (event) => {
    event.remove({ output: 'ars_nouveau:glyph_press' });
    const id_prefix = 'eomaw:interactio/item_anvil_smashing/';
    const recipes = [
        {
            inputs: [
                Item.of('ars_nouveau:mana_jar')
            ],
            output: {
                entries: [{ result: { item: 'ars_nouveau:glyph_press' }, weight: 1 }],
                rolls: 1
            },
            damage: 2,
            id: `${id_prefix}glyph_press`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'interactio:item_anvil_smashing';
        event.custom(recipe).id(recipe.id);
    });
});
