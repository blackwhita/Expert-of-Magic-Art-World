onEvent('recipes', (event) => {
  const id_prefix = 'enigmatica:expert/interactio/item_lightning/';
  const recipes = [
    {
      inputs: ['#forge:ingots/uranium'],
      output: {
        entries: [{ result: { item: 'powah:uraninite', count: 1 }, weight: 1 }],
        empty_weight: 0,
        rolls: 1
      },
      id: `${id_prefix}uraninite`
    }
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'interactio:item_lightning';
    recipe.inputs = recipe.inputs.map((input) => Ingredient.of(input).toJson());
    event.custom(recipe).id(recipe.id);
  });
});
