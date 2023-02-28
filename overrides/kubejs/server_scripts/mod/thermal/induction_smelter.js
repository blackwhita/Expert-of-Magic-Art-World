onEvent('recipes', (event) => {
    event.remove({ output : 'extendedcrafting:black_iron_ingot' });
    const recipes = [
        {
            inputs: [Item.of('resourcefulbees:coal_honeycomb',2), 'kubejs:high_steel_ingot'],
            outputs: [Item.of('extendedcrafting:black_iron_ingot', 2)],
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs)//.id(recipe.id);
    });
});//event.recipes.thermal.smelter('minecraft:gold_ingot', ['minecraft:iron_ingot', 'minecraft:copper_ingot']).energy(10000)
