onEvent('recipes', (event) => {
    event.remove({ output: 'powah:crystal_nitro', type: 'powah:energizing'})
    event.remove({ output: 'powah:crystal_spirited', type: 'powah:energizing'})
    event.remove({ output: 'powah:crystal_niotic', type: 'powah:energizing'})
    event.remove({ output: 'powah:crystal_blazing', type: 'powah:energizing'})
    event.remove({ output: 'powah:steel_energized', type: 'powah:energizing'})
    //occultism
    event.remove({ output: 'occultism:chalk_white'})
    event.remove({ output: 'occultism:chalk_gold'})
    event.remove({ output: 'occultism:chalk_purple'})
    event.remove({ output: 'occultism:chalk_red'})
    //rftool
    event.remove({ output: 'rftoolsbase:infused_diamond'})
    event.remove({ output: 'rftoolsbase:infused_enderpearl'})
    const recipes = [
        {
            ingredients: [
                { item: 'minecraft:nether_star' },
                { item: 'resourcefulbees:nether_honeycomb' },
                { item: 'resourcefulbees:nether_honeycomb' },
                { item: 'minecraft:netherite_scrap' },
                { item: 'minecraft:netherite_scrap' },
                { item: 'eidolon:shadow_gem' },
            ],
            energy: 100000000,
            result: {
                item: 'powah:crystal_nitro',
                count: 4
            },
        },
        {
            ingredients: [
                { item: 'resourcefulbees:emerald_honeycomb' },
                { item: 'resourcefulbees:emerald_honeycomb' },
                { item: 'emendatusenigmatica:arcane_gem' },
                { item: 'emendatusenigmatica:arcane_gem' },
                { item: 'eidolon:lesser_soul_gem' },
            ],
            energy: 6000000,
            result: {
                item: 'powah:crystal_spirited',
                count: 1
            },
        },
        {
            ingredients: [
                { item: 'resourcefulbees:diamond_honeycomb' },
                { item: 'resourcefulbees:diamond_honeycomb' },
                { item: 'botania:mana_diamond' }
            ],
            energy: 10000,
            result: {
                item: 'powah:crystal_niotic',
                count: 6
            },
        },
        {
            ingredients: [
                { item: 'resourcefulbees:blaze_honeycomb' },
                { item: 'resourcefulbees:blaze_honeycomb' },
                { item: 'ars_nouveau:blaze_fiber' },
                { item: 'ars_nouveau:blaze_fiber' },
            ],
            energy: 240000,
            result: {
                item: 'powah:crystal_blazing',
                count: 1
            },
        },
        {
            ingredients: [
                { item: 'pneumaticcraft:ingot_iron_compressed' },
                { item: 'eidolon:arcane_gold_ingot' },
            ],
            energy: 10000,
            result: {
                item: 'powah:steel_energized',
                count: 2
            },
        },
        //kjs
        {
            ingredients: [
                { item: 'powah:steel_energized' },
                { item: 'powah:crystal_blazing' },
                { item: 'powah:crystal_blazing' },
                { item: 'powah:crystal_blazing' },
                { item: 'powah:crystal_blazing' },
            ],
            energy: 500000,
            result: {
                item: 'rainbowcompound:blazeite_ingot',
                count: 1
            },
        },
        //occultism
        {
            ingredients: [
                { item: 'occultism:chalk_white_impure' },
            ],
            energy: 100000,
            result: {
                item: 'occultism:chalk_white',
                count: 1
            },
        },
        {
            ingredients: [
                { item: 'occultism:chalk_gold_impure' },
            ],
            energy: 250000,
            result: {
                item: 'occultism:chalk_gold',
                count: 1
            },
        },
        {
            ingredients: [
                { item: 'occultism:chalk_purple_impure' },
            ],
            energy: 500000,
            result: {
                item: 'occultism:chalk_purple',
                count: 1
            },
        },
        {
            ingredients: [
                { item: 'occultism:chalk_red_impure' },
            ],
            energy: 10000000,
            result: {
                item: 'occultism:chalk_red',
                count: 1
            },
        },
        //rftool
        {
            ingredients: [
                { item: 'rftoolsbase:dimensionalshard' },
                { item: 'rftoolsbase:dimensionalshard' },
                { item: 'rftoolsbase:dimensionalshard' },
                { item: 'rftoolsbase:dimensionalshard' },
                { item: 'minecraft:ender_pearl' },
            ],
            energy: 10000000,
            result: {
                item: 'rftoolsbase:infused_enderpearl',
                count: 1
            },
        },
        {
            ingredients: [
                { item: 'rftoolsbase:dimensionalshard' },
                { item: 'rftoolsbase:dimensionalshard' },
                { item: 'rftoolsbase:dimensionalshard' },
                { item: 'rftoolsbase:dimensionalshard' },
                { item: 'psi:psigem' },
            ],
            energy: 10000000,
            result: {
                item: 'rftoolsbase:infused_diamond',
                count: 1
            },
        },
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe)//.id(recipe.id);
    });
});
