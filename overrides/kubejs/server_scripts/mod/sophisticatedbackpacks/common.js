onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_4',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:storage_blocks/starmetal',
                B: 'sophisticatedbackpacks:upgrade_base'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_4'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_3',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'kubejs:high_steel_ingot',
                B: 'sophisticatedbackpacks:upgrade_base'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_3'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_2',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'sophisticatedbackpacks:upgrade_base'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_2'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_1',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A:'#forge:ingots/infused_iron',
                B: 'sophisticatedbackpacks:upgrade_base'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_1'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

