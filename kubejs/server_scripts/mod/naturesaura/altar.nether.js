onEvent('recipes', (event) => {
    event.remove({ output: 'ars_nouveau:arcane_stone' });
    event.remove({ output: 'eidolon:wooden_altar' });


    var data = {
        recipes: [
            {
                input: Ingredient.of('naturesaura:infused_stone'),
                output: Item.of('ars_nouveau:arcane_stone', 1),
                aura_type: 'naturesaura:nether',
                aura: 15000,
                time: 100
            },
        ],
        recipes: [
            {
                input: Ingredient.of('create:schematic_table'),
                output: Item.of('eidolon:wooden_altar', 1),
                aura_type: 'naturesaura:nether',
                aura: 50000,
                time: 200
            },
        ],
        recipes: [
            {
                input: Ingredient.of(Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:gold_bee' }).weakNBT().toJson()),
                output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:tainted_bee' }).toResultJson(),
                aura_type: 'naturesaura:nether',
                aura: 150000,
                time: 200
            },
        ],
        recipes: [
            {
                input: Ingredient.of('create:brass_casing'),
                output: Item.of('createaddition:overcharged_alloy', 1),
                aura_type: 'naturesaura:nether',
                aura: 1000000,
                time: 60
            },
        ],
        recipes: [
            {
                input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }).weakNBT().toJson(),
                output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:tainted_bee' }).toResultJson(),
                aura_type: 'naturesaura:nether',
                aura: 100000,
                time: 60
            },
        ]
    };

    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:altar',
                input: recipe.input,
                output: recipe.output,
                aura_type: recipe.aura_type,
                aura: recipe.aura,
                time: recipe.time
            })
            //.id(recipe.id);
    });
});