onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'resourcefulbees:apiary_breeder',
            pattern: ['ACA', 'DBD', 'ACA'],
            key: {
                A: 'resourcefulbees:bee_jar',
                B: 'resourcefulbees:apiary_storage',
                C: 'naturesaura:token_joy',
                D: '#minecraft:flowers'
            },
            id: 'resourcefulbees:apiary_breeder'
        },
        {
            output: 'resourcefulbees:centrifuge',
            pattern: ['CBC', 'CAC', 'EDE'],
            key: {
                A: 'create:brass_casing',
                B: 'resourcefulbees:wax_block',
                C: 'pneumaticcraft:ingot_iron_compressed',
                D: 'minecraft:piston',
                E: 'minecraft:smooth_stone'
            },
            id: 'resourcefulbees:centrifuge'
        },
        {
            output: Item.of('resourcefulbees:centrifuge_casing', 4),
            pattern: ['CBC', 'BAB', 'CBC'],
            key: {
                A: 'rftoolsbase:machine_frame',
                B: 'minecraft:redstone',
                C: 'naturesaura:infused_iron'
            },
            id: 'resourcefulbees:centrifuge_casing'
        },
        {
            output: 'resourcefulbees:centrifuge_controller',
            pattern: ['EBE', 'CAC', 'EDE'],
            key: {
                A: 'rftoolsbase:machine_frame',
                B: 'resourcefulbees:wax_block',
                C: 'naturesaura:infused_iron',
                D: 'resourcefulbees:centrifuge',
                E: 'resourcefulbees:centrifuge_casing'
            },
            id: 'resourcefulbees:centrifuge_controller'
        },
        {
            output: Item.of('resourcefulbees:elite_centrifuge_casing', 4),
            pattern: ['CBC', 'BAB', 'CBC'],
            key: {
                A: 'resourcefulbees:centrifuge_casing',
                B: 'minecraft:redstone',
                C: 'occultism:iesnium_ingot'
            },
            id: 'resourcefulbees:elite_centrifuge_casing'
        },
        {
            output: 'resourcefulbees:elite_centrifuge_controller',
            pattern: ['EBE', 'CAC', 'EDE'],
            key: {
                A: 'industrialforegoing:machine_frame_advanced',
                B: 'pneumaticcraft:printed_circuit_board',
                C: 'occultism:iesnium_ingot',
                D: 'resourcefulbees:centrifuge_controller',
                E: 'resourcefulbees:elite_centrifuge_casing'
            },
            id: 'resourcefulbees:elite_centrifuge_controller'
        },
        {
            output: 'resourcefulbees:honey_congealer',
            pattern: ['AAA', 'ABA', 'CDC'],
            key: {
                A: '#forge:glass_panes/colorless',
                B: 'resourcefulbees:wax',
                C: 'minecraft:smooth_stone',
                D: 'minecraft:packed_ice'
            },
            id: 'resourcefulbees:honey_congealer'
        },
        {
            output: 'ctiers:centrifuge_casing_tier_3',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'powah:steel_energized',
                B: 'resourcefulbees:elite_centrifuge_casing'
            },
            id: 'ctiers:centrifuge_casing_tier_3'
        },
        {
            output: 'ctiers:centrifuge_casing_tier_4',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'powah:crystal_niotic',
                B: 'ctiers:centrifuge_casing_tier_3'
            },
            id: 'ctiers:centrifuge_casing_tier_4'
        },
        {
            output: 'ctiers:centrifuge_casing_tier_5',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'kubejs:high_steel_ingot',
                B: 'ctiers:centrifuge_casing_tier_4'
            },
            id: 'ctiers:centrifuge_casing_tier_5'
        },
        {
            output: 'resourcefulbees:t1_beehive',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:grass',
                B: 'minecraft:beehive'
            },
            id: 'resourcefulbees:t1_beehive_1'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
