/*onEvent('recipes', (event) => {
  const recipes = [
    {
      recipeSize: 3,
      layers: [
        {
          type: 'compactcrafting:mixed',
          pattern: [
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"]
          ]
        },
        {
          type: 'compactcrafting:mixed',
          pattern: [
            ["-", "-", "-"],
            ["-", "C", "-"],
            ["-", "-", "-"]
          ]
        },
        {
          type: 'compactcrafting:mixed',
          pattern: [
            ["A", "A", "A"],
            ["A", "B", "A"],
            ["A", "A", "A"]
          ]
        }
      ],
      catalyst: {//投掷物
        id: 'minecraft:redstone',
        Count: 1
      },
      components: {
        'A': {
          type: "compactcrafting:block",
          block: 'compactmachines:wall'
        },
        'B': {
          type: "compactcrafting:block",
          block: 'minecraft:redstone_block'
        },
        'C': {
          type: "compactcrafting:block",
          block: 'minecraft:hopper'
        },
        '-': {
          type: "compactcrafting:block",
          block: "minecreaft_air"
        },
      },
      outputs: [{
        id: Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:item"}}'),
        Count: 2
      }],
      id: "compactmachines:tunnel/item"
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
      outputs: recipe.outputs,
    }).id(recipe.id);
  });
});

{
    "type": "compactcrafting:hollow",
    "wall": "C"
}指定整个图层仅由单个组件填充//空心
{
    "type": "compactcrafting:filled",
    "component": "C"
}指定整个层由该组件填充
{
    "type": "compactcrafting:mixed",
    "pattern": [
        ["C", "C", "C", "C", "C"],
        ["C", "-", "-", "-", "C"],
        ["C", "-", "D", "-", "C"],
        ["C", "-", "-", "-", "C"],
        ["C", "C", "C", "C", "C"]
    ]
}混合图层类型允许完全控制图层中的每个空间。必须显式定义每个块。
*/