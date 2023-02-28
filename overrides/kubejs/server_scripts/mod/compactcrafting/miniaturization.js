/*onEvent('recipes', (event) => {

    const recipes = [
      {
        recipeSize: 5,
        layers: [
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "B", "B", "B", "A"],
              ["B", "D", "D", "D", "B"],
              ["B", "D", "J", "D", "B"],
              ["B", "D", "D", "D", "B"],
              ["A", "B", "B", "B", "A"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["B", "C", "C", "C", "B"],
              ["D", "E", "C", "E", "D"],
              ["D", "E", "F", "E", "D"],
              ["D", "E", "E", "E", "D"],
              ["B", "D", "D", "D", "B"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["B", "C", "C", "C", "B"],
              ["D", "E", "C", "E", "D"],
              ["G", "H", "I", "H", "G"],
              ["D", "E", "H", "E", "D"],
              ["B", "D", "D", "D", "B"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["B", "C", "C", "C", "B"],
              ["D", "E", "C", "E", "D"],
              ["D", "E", "F", "E", "D"],
              ["D", "E", "E", "E", "D"],
              ["B", "D", "D", "D", "B"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "B", "B", "B", "A"],
              ["B", "B", "B", "B", "B"],
              ["B", "B", "B", "B", "B"],
              ["B", "B", "B", "B", "B"],
              ["A", "B", "B", "B", "A"],
            ]
          }
        ],
        catalyst: {
          id: 'draconicevolution:awakened_core',
          Count: 1
        },
        components: {
          'A': {
            type: "compactcrafting:block",
            block: 'draconicevolution:draconium_block'
          },
          'B': {
            type: "compactcrafting:block",
            block: 'create:shadow_steel_casing'
          },
          'C': {
            type: "compactcrafting:block",
            block: 'mekanismgenerators:reactor_glass'
          },
          'D': {
            type: "compactcrafting:block",
            block: 'mekanismgenerators:fusion_reactor_frame'
          },
          'E': {
            type: "compactcrafting:block",
            block: 'mekanism:superheating_element'
          },
          'F': {
            type: "compactcrafting:block",
            block: 'draconicevolution:reactor_injector'
          },
          'G': {
            type: "compactcrafting:block",
            block: 'mekanismgenerators:fusion_reactor_port'
          },
          'H': {
            type: "compactcrafting:block",
            block: 'draconicevolution:reactor_stabilizer'
          },
          'I': {
            type: "compactcrafting:block",
            block: 'draconicevolution:reactor_core'
          },
          'J': {
            type: "compactcrafting:block",
            block: 'mekanismgenerators:fusion_reactor_controller'
          }
        },
        outputs: [{
          id: 'masterfulmachinery:endlessreactor_controller',
          Count: 1
        }]
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'compactcrafting:miniaturization',
            version: 1,
            recipeSize: recipe.recipeSize,
            layers: recipe.layers,
            catalyst: recipe.catalyst,
            components: recipe.components,
            outputs: recipe.outputs
        });
    });
});*/