onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'minecraft:iron_ingot',//输入物品
            outputs: ['emendatusenigmatica:cast_iron_ingot', Fluid.of('industrialforegoing:sludge', 20)],//输出物品
            energy: 500,//所需能量
            id: 'eomaw:pyrolyzer/cast_iron_ingot'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.pyrolyzer(recipe.outputs, recipe.input).energy(recipe.energy).id(recipe.id);
    });
});