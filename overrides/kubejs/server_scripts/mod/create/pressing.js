onEvent('recipes', (event) => {
    event.remove({ output: 'extendedcrafting:black_iron_slate'})
    const recipes = [
        {
            output: 'refinedstorage:raw_advanced_processor',
            inputs: ['refinedstorage:advanced_processor'],
        },
        {
            output: 'refinedstorage:raw_improved_processor',
            inputs: ['refinedstorage:improved_processor'],
        },
        {
            output: 'extrastorage:raw_neural_processor',
            inputs: ['extrastorage:neural_processor'],
        },
        {
            output: 'refinedstorage:raw_basic_processor',
            inputs: ['refinedstorage:basic_processor'],
        },
        {
            output: 'thermal:iron_coin',
            inputs: ['minecraft:iron_nugget'],
        },
        {
            output: 'thermal:lumium_coin',
            inputs: ['emendatusenigmatica:lumium_nugget'],
        },
        {
            output: 'thermal:gold_coin',
            inputs: ['minecraft:gold_nugget'],
        },
        {
            output: 'extendedcrafting:black_iron_slate',
            inputs: ['extendedcrafting:black_iron_ingot'],
        }
    ];
    ///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
    recipes.forEach((recipe) => {
        event.recipes.create.pressing(recipe.output, recipe.inputs)//.id(recipe.id);
    });
});
