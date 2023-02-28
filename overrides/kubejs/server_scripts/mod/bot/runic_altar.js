onEvent('recipes', (event) => {
    //夸克符文
    const mumetal = [
        //四级符文
        'mythicbotany:helheim_rune',
        'mythicbotany:asgard_rune',
        'mythicbotany:vanaheim_rune',
        'mythicbotany:alfheim_rune',
        'mythicbotany:midgard_rune',
        'mythicbotany:joetunheim_rune',
        'mythicbotany:muspelheim_rune',
        'mythicbotany:niflheim_rune',
        'mythicbotany:nidavellir_rune',
        //三级符文
        'botania:rune_lust',
        'botania:rune_gluttony',
        'botania:rune_greed',
        'botania:rune_sloth',
        'botania:rune_wrath',
        'botania:rune_envy',
        'botania:rune_pride',
        //二级符文
        'botania:rune_spring',
        'botania:rune_summer',
        'botania:rune_autumn',
        'botania:rune_winter',
        //一级符文
    ]
    
    mumetal.forEach((output) => {
        event.remove({ output: output ,type:'botania:runic_altar'});
    })
    const recipes = [
        //四级符文
        {
            inputs: ['naturesaura:tainted_gold', 'thermal:basalz_rod', 'ars_nouveau:wilden_spike', 'botania:rune_envy', 'botania:rune_fire', 'botania:rune_autumn'],
            mana: 96000,
            output: 'mythicbotany:helheim_rune',
            count: 1,
        },
        {
            inputs: ['botania:rune_air', 'botania:rune_autumn', 'botania:rune_pride', 'occultism:dimensional_matrix', 'naturesaura:gold_powder', 'ars_nouveau:drygmy_shard'],
            mana: 96000,
            output: 'mythicbotany:asgard_rune',
            count: 1,
        },
        {
            inputs: ['naturesaura:aura_bloom', 'thermal:blitz_rod', 'ars_nouveau:sylph_shards', 'botania:rune_pride', 'botania:rune_spring', 'botania:rune_earth'],
            mana: 96000,
            output: 'mythicbotany:vanaheim_rune',
            count: 1,
        },
        {
            inputs: ['ars_nouveau:end_fiber', 'naturesaura:birth_spirit', 'ars_nouveau:wixie_shards', 'botania:rune_lust', 'botania:rune_summer', 'botania:rune_air'],
            mana: 96000,
            output: 'mythicbotany:alfheim_rune',
            count: 1,
        },
        {
            inputs: ['naturesaura:infused_iron', 'ars_nouveau:mythical_clay', 'occultism:iesnium_ingot', 'botania:rune_greed', 'botania:rune_spring', 'botania:rune_earth'],
            mana: 96000,
            output: 'mythicbotany:midgard_rune',
            count: 1,
        },
        {
            inputs: ['botania:rune_earth', 'botania:rune_autumn', 'botania:rune_gluttony', 'thermal:refined_fuel_bucket', 'powah:crystal_blazing', 'bloodmagic:reagentlava'],
            mana: 96000,
            output: 'mythicbotany:joetunheim_rune',
            count: 1,
        },
        {
            inputs: ['bloodmagic:weakbloodshard', 'tomeofblood:blood_gem', Item.of('botania:brew_flask', '{brewKey:"botania:bloodthirst"}'), 'botania:rune_summer', 'botania:rune_fire', 'botania:rune_wrath'],
            mana: 96000,
            output: 'mythicbotany:muspelheim_rune',
            count: 1,
        },
        {
            inputs: ['minecraft:blue_ice', 'naturesaura:sky_ingot', 'thermal:blizz_rod', 'botania:rune_wrath', 'botania:rune_winter', 'botania:rune_water'],
            mana: 96000,
            output: 'mythicbotany:niflheim_rune',
            count: 1,
        },
        {
            inputs: ['eidolon:wraith_heart',  'eidolon:lesser_soul_gem', 'botania:rune_sloth', 'botania:rune_earth', 'botania:rune_winter'],
            mana: 96000,
            output: 'mythicbotany:nidavellir_rune',
            count: 1,
        },

        //三级符文

        {
            inputs: [ 'botania:terrasteel_ingot', 'botania:rune_air', 'botania:rune_summer'],
            mana: 64000,
            output: 'botania:rune_lust',
            count: 1,
        },
        {
            inputs: [ 'botania:terrasteel_ingot', 'botania:rune_winter', 'botania:rune_fire'],
            mana: 64000,
            output: 'botania:rune_gluttony',
            count: 1,
        },
        {
            inputs: [ 'botania:terrasteel_ingot', 'botania:rune_water', 'botania:rune_spring'],
            mana: 64000,
            output: 'botania:rune_greed',
            count: 1,
        },
        {
            inputs: ['botania:terrasteel_ingot',  'botania:rune_air', 'botania:rune_autumn'],
            mana: 64000,
            output: 'botania:rune_sloth',
            count: 1,
        },
        {
            inputs: ['botania:rune_earth', 'botania:rune_winter', 'botania:terrasteel_ingot', ],
            mana: 64000,
            output: 'botania:rune_wrath',
            count: 1,
        },
        {
            inputs: [ 'botania:terrasteel_ingot', 'botania:rune_summer', 'botania:rune_fire'],
            mana: 64000,
            output: 'botania:rune_envy',
            count: 1,
        },
        {
            inputs: [ 'botania:terrasteel_ingot', 'botania:rune_autumn', 'botania:rune_fire'],
            mana: 64000,
            output: 'botania:rune_pride',
            count: 1,
        },

        //二级符文

        {
            inputs: ['#minecraft:leaves','botania:cosmetic_four_leaf_clover', 'botania:grass_seeds', 'minecraft:grass', 'botania:rune_water', 'botania:rune_fire'],
            mana: 32000,
            output: 'botania:rune_spring',
            count: 1,
        },
        {
            inputs: ['create:blaze_cake', 'minecraft:magma_block', 'minecraft:blaze_rod', 'minecraft:fire_charge',  'botania:rune_earth', 'botania:rune_air'],
            mana: 32000,
            output: 'botania:rune_summer',
            count: 1,
        },
        {
            inputs: ['botania:rune_air', 'botania:rune_fire', 'minecraft:wheat', 'botania:cosmetic_tiny_potato_mask', '#forge:vegetables/radish', 'create:honeyed_apple', '#forge:fruits/melon'],
            mana: 32000,
            output: 'botania:rune_autumn',
            count: 1,
        },
        {
            inputs: ['botania:rune_water', 'botania:rune_earth', 'minecraft:snowball', '#forge:ices/blue', 'eidolon:lesser_soul_gem', 'thermal:blizz_rod'],
            mana: 32000,
            output: 'botania:rune_winter',
            count: 1,
        },

        //一级符文
        //kjs

        {
            inputs: ['botania:mana_tablet', 'kubejs:blockcasing_plain', 'botania:livingrock', 'botania:gaia_spreader', 'botania:livingrock', 'botania:livingrock', 'botania:livingrock'],
            mana: 96000*2,
            output: 'kubejs:overlay_mana_output',
            count: 1,
        },
        {
            inputs: ['botania:mana_tablet', 'kubejs:blockcasing_plain', 'botania:livingrock', 'botania:livingrock', 'botania:livingrock', 'botania:livingrock', 'mythicbotany:mana_collector'],
            mana: 96000*2,
            output: 'kubejs:overlay_mana_input',
            count: 1,
        },


    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });

        const re = event.custom({
            type: 'botania:runic_altar',
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana,
            ingredients: ingredients
        });
        /*
        if (recipe.id) {
            re.id(recipe.id);
        }
        */
    });
});
