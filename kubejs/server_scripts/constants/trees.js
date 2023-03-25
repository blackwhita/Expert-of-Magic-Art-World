//priority: 1000

const treeRegistry = [
    {
        type: 'tree',
        trees: [
            {
                sapling: 'ars_nouveau:blue_archwood_sapling',
                trunk: 'ars_nouveau:blue_archwood_log',
                leaf: 'ars_nouveau:blue_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'ars_nouveau:green_archwood_sapling',
                trunk: 'ars_nouveau:green_archwood_log',
                leaf: 'ars_nouveau:green_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'ars_nouveau:purple_archwood_sapling',
                trunk: 'ars_nouveau:purple_archwood_log',
                leaf: 'ars_nouveau:purple_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'ars_nouveau:red_archwood_sapling',
                trunk: 'ars_nouveau:red_archwood_log',
                leaf: 'ars_nouveau:red_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'minecraft:birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'minecraft:birch_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:dark_oak_sapling',
                trunk: 'minecraft:dark_oak_log',
                leaf: 'minecraft:dark_oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:oak_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'minecraft:spruce_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'simplefarming:apple_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:apricot_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:birch_leaves',
                fruit: 'simplefarming:apricot',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:banana_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'simplefarming:banana',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:cherry_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'simplefarming:cherries',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:mango_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'simplefarming:mango',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:olive_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:birch_leaves',
                fruit: 'simplefarming:olives',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:orange_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'simplefarming:orange',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:pear_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'simplefarming:pear',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:plum_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:birch_leaves',
                fruit: 'simplefarming:plum',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'integrateddynamics:menril_sapling',
                trunk: 'integrateddynamics:menril_log',
                leaf: 'integrateddynamics:menril_leaves',
                fruit: 'integrateddynamics:menril_berries',
                substrate: 'dirt',
                sap: 'integrateddynamics:menril_resin',
                rate: { living: 25, dead: 4 }
            },
        ]
    },
    {
        type: 'tree_shroom',
        trees: [
            {
                sapling: 'minecraft:brown_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:brown_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:crimson_fungus',
                trunk: 'minecraft:crimson_stem',
                leaf: 'minecraft:nether_wart_block',
                extraDecoration: 'minecraft:shroomlight',
                substrate: 'crimson_nylium'
            },
            {
                sapling: 'minecraft:red_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:red_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:warped_fungus',
                trunk: 'minecraft:warped_stem',
                leaf: 'minecraft:warped_wart_block',
                extraDecoration: 'minecraft:shroomlight',
                substrate: 'warped_nylium'
            },
        ]
    }
];
