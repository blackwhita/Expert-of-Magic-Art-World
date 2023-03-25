onEvent('recipes', (event) => {
    event.remove({ output: 'create:brass_casing' });
    const  recipes = [
        {
            ingredients: [
                'emendatusenigmatica:brass_ingot',
                'emendatusenigmatica:brass_ingot',
                'emendatusenigmatica:brass_ingot',
                'emendatusenigmatica:brass_ingot',
                '#minecraft:planks',
                '#minecraft:planks',
                'create:andesite_alloy',
                'create:andesite_alloy'
            ],
            sapling: 'minecraft:oak_sapling',
            output: '3x create:brass_casing',
            time: 10
        },
        {
            ingredients: [
                'pneumaticcraft:heat_sink',
                'immersiveengineering:radiator',
                'kubejs:blockcasing_plain',
                'kubejs:blockcasing_plain',
                'kubejs:blockcasing_plain',
                'kubejs:blockcasing_plain',
                'chisel:laboratory/wallvents',
                'chisel:laboratory/wallvents'
            ],
            sapling: 'minecraft:oak_sapling',
            output: 'kubejs:overlay_vent',
            time: 10
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:tree_ritual';
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.sapling = Item.of(recipe.sapling).toJson();
        recipe.output = Item.of(recipe.output).toResultJson();

        event.custom(recipe)//.id(recipe.id);
    });
});
