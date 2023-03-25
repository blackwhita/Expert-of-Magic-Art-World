/*onEvent('recipes', (event) => {
    const recipes = [
      {
        input: { ingredient: { item: 'mekanismmatter:universal_matter' } },
        output: { amount: 10, infuse_type: 'kubejs:universal_matter' },
      },
      {
        input: { ingredient: { item: 'thermal:blitz_powder' } },
        output: { amount: 10, infuse_type: 'kubejs:blitz' },
      }
    ]

    recipes.forEach((recipe) => {
        event.custom({
            type: 'mekanism:infusion_conversion',
            input: recipe.input,
            output: recipe.output
        })//.id(recipe.id);
    });
});
*/