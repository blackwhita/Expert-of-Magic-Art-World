onEvent('recipes', (event) => {

    const recipes = [
      {
        input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:glowstone_bee' }).weakNBT().toJson(),
        gasInput: { amount:16, gas: "mekanism:liquid_osmium" },
        output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:refined_glowstone_bee' }).toJson(),
      },

      {
        input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:obsidian_bee' }).weakNBT().toJson(),
        gasInput: { amount:16, gas: "mekanism:liquid_osmium" },
        output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:refined_obsidian_bee' }).toJson(),
      }
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismCompressing(recipe.output, recipe.input, recipe.gasInput)
    });
});
