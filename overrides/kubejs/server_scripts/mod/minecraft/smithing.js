onEvent('recipes', (event) => {
    const recipes = [
        {
            base: 'ftbsluice:diamond_sluice',
            addition: 'kubejs:high_steel_ingot',
	        result: 'ftbsluice:netherite_sluice',
            id: 'ftbsluice:netherite_sluice'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = "minecraft:smithing";
        event.custom(recipe).id(recipe.id);
    });
});