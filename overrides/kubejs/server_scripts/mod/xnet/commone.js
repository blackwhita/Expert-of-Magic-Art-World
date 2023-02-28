onEvent('recipes', event => {
const recipes = [
    {
        output: Item.of('rftoolsbase:machine_frame'),
        pattern: [
            'ABA',
            'CDC',
            'ABA'
      ],
        key: {
            A: 'emendatusenigmatica:nickel_plate',
            B: 'emendatusenigmatica:iron_plate',
            C: 'minecraft:gold_ingot',
            D: 'immersiveengineering:sheetmetal_iron'
        },
        id: 'rftoolsbase:machine_frame'
    }
];

recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
});
});