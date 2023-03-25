onEvent('recipes', (event) => {
    event.remove({ output: '#forge:ingots/steel', type: 'immersiveengineering:blast_furnace'})
    event.remove({ output: '#forge:storage_blocks/steel', type: 'immersiveengineering:blast_furnace'})
    event.remove({ output: 'occultism:burnt_otherstone'})
    const recipes = [
        {
            output: '4x emendatusenigmatica:steel_ingot',
            input: 'rainbowcompound:frostite_ingot',
            slag: 'thermal:slag',
        },
        {
            output: 'occultism:burnt_otherstone',
            input: 'occultism:otherstone',
            slag: 'thermal:slag',
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.blast_furnace(recipe.output, recipe.input, recipe.slag)//.id(recipe.id);
    });
});
