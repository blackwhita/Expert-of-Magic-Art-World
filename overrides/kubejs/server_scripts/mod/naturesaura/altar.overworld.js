onEvent('recipes', (event) => {
    event.remove({ output: 'create:copper_casing' });
    event.remove({ output: 'powah:charged_snowball' });

    const recipes = [
        {
            input: 'create:brass_casing',
            output: { item: 'create:copper_casing', count: 4 },
            aura_type: 'naturesaura:overworld',
            aura: 10000,
            time: 60,
        },
        
        {
            input: 'eidolon:fungus_sprouts',
            output: { item: 'minecraft:crimson_roots' },
            aura_type: 'naturesaura:overworld',
            aura: 10000,
            time: 60,
        },
        {
            input: Ingredient.of('ars_nouveau:magic_clay'),
            output: Item.of('ars_nouveau:marvelous_clay', 1),
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 20
        },
        {
            input: Ingredient.of('tanknull:tank_1'),
            output: Item.of('tanknull:tank_3', 1),
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 20
        },
        {
            input: Ingredient.of('dankstorage:dank_1'),
            output: Item.of('dankstorage:dank_3', 1),
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 20
        },
        {
            input: Ingredient.of('minecraft:warped_fungus'),
            output: Item.of('minecraft:warped_roots', 4),
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 20
        },
        {
            input: Ingredient.of('#minecraft:flowers'),
            output: Item.of('naturesaura:aura_bloom', 1),
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 20
        },
        {
            input: Ingredient.of('minecraft:snowball'),
            output: Item.of('powah:charged_snowball', 1),
            aura_type: 'naturesaura:overworld',
            aura: 1000,
            time: 5
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.input = Ingredient.of(recipe.input).toJson();

        event.custom(recipe);
    });
});
