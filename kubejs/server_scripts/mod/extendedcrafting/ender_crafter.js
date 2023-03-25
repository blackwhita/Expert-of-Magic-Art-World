onEvent('recipes', (event) => {
    const recipes = [
      {
          pattern: [' A ', 'ABA', ' A '],
          key: {
            A: { item: 'extendedcrafting:ender_ingot' },
            B: { item: 'eidolon:lesser_soul_gem' }
          },
          result: { item: 'extendedcrafting:ender_star', count: 1 },
          id:'extendedcrafting:ender_star'
      },
      {
        pattern: ['ABA', 'CDC', 'ABA'],
        key: {
          A: { item: 'rainbowcompound:blazeite_ingot' },
          B: { item: 'rainbowcompound:chorusite_ingot' },
          C: { item: 'extendedcrafting:ender_ingot' },
          D: { item: 'extendedcrafting:ender_star' }
        },
        result: { item: 'extendedcrafting:enhanced_ender_ingot', count: 2 },
        id:'extendedcrafting:enhanced_ender_ingot'
      },
      {
        pattern: ['ABA', 'BCB', 'ABA'],
        key: {
          A: { item: 'extendedcrafting:enhanced_ender_ingot' },
          B: { item: 'minecraft:nether_star' },
          C: { item: 'rainbowcompound:rainbow_compound' }
        },
        result: { item: 'rainbowcompound:netherstar_ingot', count: 4 },
        id: 'extendedcrafting:netherstar_ingot'
      },
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'extendedcrafting:shaped_ender_crafter',
                pattern: recipe.pattern,
                key: recipe.key,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
