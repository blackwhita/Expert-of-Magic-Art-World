onEvent('recipes', (event) => {
    const mumetal = [
        'botania:manasteel_ingot',
        'botania:manasteel_block',
        'botania:quartz_mana',
        'botania:mana_pearl',
        'botania:mana_powder',
        'botania:mana_diamond' ,
        'botania:mana_diamond_block',
    ]
    
    mumetal.forEach((output) => {
        event.remove({ output: output ,type:'botania:mana_infusion'});
    });
    const recipes = [
        {
            input: 'powah:steel_energized',
            output: 'botania:manasteel_ingot',
            count: 1,
            mana: 3000,
            catalyst: 'createaddition:overcharged_casing',
        },
        {
            input: 'powah:energized_steel_block',
            output: 'botania:manasteel_block',
            count: 1,
            mana: 27000,
            catalyst: 'createaddition:overcharged_casing',
        },
        {
            input: 'resourcefulbees:quartz_honeycomb',
            output: 'botania:quartz_mana',
            count: 1,
            mana: 3000,
            catalyst: 'refinedstorage:quartz_enriched_iron_block',
        },
        {
            input: 'rftoolsbase:infused_enderpearl',
            output: 'botania:mana_pearl',
            count: 1,
            mana: 3000,
            catalyst: 'thermal:enderium_glass',
        },
        {
            input: 'bloodmagic:arcaneashes',
            output: 'botania:mana_powder',
            count: 1,
            mana: 3000,
            catalyst: 'psi:psidust_block',
        },
        {
            input: 'rftoolsbase:infused_diamond',
            output: 'botania:mana_diamond',
            count: 1,
            mana: 6000,
            catalyst: 'psi:psigem_block',
        }

    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'botania:mana_infusion',
            input: Ingredient.of(recipe.input).toJson(),
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana
        };

        if (recipe.catalyst) {
            constructed_recipe.catalyst = {
                type: 'block',
                block: recipe.catalyst
            };
        }
        event.custom(constructed_recipe)//.id(recipe.id);
    });
});
