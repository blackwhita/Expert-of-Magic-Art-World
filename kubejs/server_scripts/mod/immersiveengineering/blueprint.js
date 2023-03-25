onEvent('recipes', (event) => {
    const mumetal = [
        'modularrouters:blank_upgrade',
        'modularrouters:augment_core',
        'modularrouters:blank_module'
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output });
    }); 
        const recipes = [
            {
                inputs: [
                    { count: 2, base_ingredient: { tag: 'forge:plates/aluminum' } },
                    { count: 5, base_ingredient: { tag: 'forge:nuggets/electrum' } },
                    { tag: 'forge:wires' }
                ],
                category: 'components',
                output: {
                    item: 'modularrouters:blank_upgrade',
                    count: 2
                },
            },
            {
                inputs: [
                    { item: 'modularrouters:blank_upgrade' },
                    { item: 'modularrouters:blank_module' },
                    { item: 'powah:capacitor_blazing' },
                    { tag: 'forge:wires' }
                ],
                category: 'components',
                output: {
                    item: 'modularrouters:augment_core',
                    count: 2
                },
            },
            {
                inputs: [
                    { count: 2, item: 'minecraft:paper' },
                    { count: 4, base_ingredient: { tag: 'forge:wires/copper' }},
                    { count: 8, base_ingredient: { tag: 'forge:ingots/invar' }}
                ],
                category: 'components',
                output: {
                    item: 'modularrouters:blank_module',
                    count: 2
                },
            }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event
                  .custom({
                      type: 'immersiveengineering:blueprint',
                      inputs: recipe.inputs,
                      category: recipe.category,
                      result: recipe.output
                  })
                  //.id(recipe.id)
            : event.custom({
                  type: 'immersiveengineering:blueprint',
                  inputs: recipe.inputs,
                  category: recipe.category,
                  result: recipe.output
              });
    });
});
