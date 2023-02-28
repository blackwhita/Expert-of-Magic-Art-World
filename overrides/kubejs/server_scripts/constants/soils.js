//priority: 1001
// Registry of soils for use in botany pots
const soilRegistry = [
    { block: 'minecraft:coarse_dirt', categories: ['dirt', 'coarse_dirt'], growthModifier: -0.65 },
    {
        block: 'minecraft:crimson_nylium',
        categories: ['dirt', 'crimson_nylium', 'nylium', 'mushroom'],
        growthModifier: 0.05
    },
    { block: 'farmersdelight:rich_soil_farmland', categories: ['dirt', 'farmland'], growthModifier: 0.15 },
    {
        block: 'farmingforblockheads:fertilized_farmland_healthy',
        categories: ['dirt', 'farmland'],
        growthModifier: 0.15
    },
    {
        block: 'farmingforblockheads:fertilized_farmland_healthy_stable',
        categories: ['dirt', 'farmland'],
        growthModifier: 0.15
    },
    { block: 'minecraft:farmland', categories: ['dirt', 'farmland'], growthModifier: 0.15 },
    { block: 'botania:enchanted_soil', categories: ['dirt', 'grass', 'botania', 'magic'], growthModifier: 0.25 },
    { block: 'botania:vivid_grass', categories: ['dirt', 'grass', 'botania', 'magic'], growthModifier: 0.15 },
    { block: 'botania:scorched_grass', categories: ['dirt', 'grass', 'botania', 'nether'], growthModifier: 0.15 },
    { block: 'botania:dry_grass', categories: ['dirt', 'grass', 'botania'], growthModifier: -0.1 },
    { block: 'botania:golden_grass', categories: ['dirt', 'grass', 'botania'], growthModifier: 0.05 },
    { block: 'botania:infused_grass', categories: ['dirt', 'grass', 'botania'], growthModifier: 0.15 },
    { block: 'botania:mutated_grass', categories: ['dirt', 'grass', 'botania'], growthModifier: 0.15 },
    { block: 'minecraft:podzol', categories: ['dirt', 'grass', 'podzol', 'mushroom'], growthModifier: 0.05 },
    { block: 'minecraft:grass_block', categories: ['dirt', 'grass'], growthModifier: 0.05 },

    { block: 'minecraft:mycelium', categories: ['dirt', 'mushroom'], growthModifier: 0.05 },
    {
        block: 'minecraft:warped_nylium',
        categories: ['dirt', 'warped_nylium', 'nylium', 'mushroom'],
        growthModifier: 0.05
    },
    { block: 'minecraft:dirt', categories: ['dirt'], growthModifier: 0 },
    { block: 'minecraft:end_stone', categories: ['end_stone'], growthModifier: -0.5 },
    { block: 'minecraft:lava_bucket', categories: ['fluid', 'liquid', 'lava'], growthModifier: 0 },
    { block: 'minecraft:water_bucket', categories: ['fluid', 'liquid', 'water'], growthModifier: 0 },
    { block: 'minecraft:netherrack', categories: ['nether'], growthModifier: 0 },
    { block: 'minecraft:red_sand', categories: ['sand', 'red_sand'], growthModifier: 0 },
    { block: 'minecraft:sand', categories: ['sand', 'red_sand'], growthModifier: 0 },
    { block: 'minecraft:soul_sand', categories: ['soul_sand', 'nether'], growthModifier: -0.3 },
    { block: 'minecraft:soul_soil', categories: ['soul_sand', 'nether'], growthModifier: 0 },

];

let dirt_types = ['blood', 'earth', 'ender', 'sky'],
    grass_types = ['earth', 'ender', 'ichor', 'sky', 'vanilla'];

