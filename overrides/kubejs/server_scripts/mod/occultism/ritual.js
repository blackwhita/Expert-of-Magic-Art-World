onEvent('recipes', (event) => {
    const Ritual_object = [
        'botania:apothecary_default',
        'botania:mana_spreader', 
        'botania:mana_pool', 
        'botania:runic_altar', 
        'botania:brewery', 
        'botania:alfheim_portal', 

        'bloodmagic:sacrificialdagger', 
        'bloodmagic:incensealtar', 
        'bloodmagic:altar',
 
        'industrialforegoing:dissolution_chamber', 
        'industrialforegoing:ore_laser_base', 
        'industrialforegoing:fluid_laser_base', 

        'mekanism:ultimate_control_circuit',
        'thermal:machine_frame'

    ]
        Ritual_object.forEach((output) => {
            event.remove({ output: output  });
        });  
         recipes = [
        /*{
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 100,
            ritual_dummy: 'occultism:ritual_dummy/craft_ender_dagger',
            ingredients: [
                'bloodmagic:daggerofsacrifice',
                'eidolon:shadow_gem',
                '#botania:runes/nidavellir',
                'powah:ender_core',
                'botania:mana_pearl',
                'botania:mana_pearl'
            ],
            result: Item.of('immersiveengineering:heavy_engineering'),
        }*/
        
        /*{
            ritual_type: 'occultism:craft',//仪式类型 
            activation_item: 'create:brass_casing',//献祭核心物品
            //pentacle_id: 'occultism:craft_marid',//仪式五角星id
            //duration: 120,//仪式时间
            entity_to_sacrifice: {//献祭生物
                tag: 'enigmatica:gaia_guardian',
                display_name: 'ritual.occultism.sacrifice.gaia_guardian'
            },
            ritual_dummy: 'occultism:ritual_dummy/craft_gaia_reactor_controller',
            ingredients: [//献祭物品
                '#forge:pellets/antimatter',
                '#botania:runes/wrath',
                '#botania:runes/vanaheim',
                '#botania:runes/greed',
                '#forge:ingots/gaia_spirit',
                'bloodmagic:corrosivecrystal',
                '#forge:ingots/gaia_spirit',
                'bloodmagic:steadfastcrystal',
                'bloodmagic:destructivecrystal',
                '#forge:ingots/gaia_spirit',
                'bloodmagic:vengefulcrystal',
                '#forge:ingots/gaia_spirit'
            ],
            result: 'masterfulmachinery:heterochromatic_compound_controller',//输出物品
        },*/
        {
            ritual_type: 'occultism:craft',
            activation_item: 'industrialforegoing:machine_frame_pity',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_thermal.machine_frame',
            ingredients: [
                'immersiveengineering:blastbrick_reinforced',
                'immersiveengineering:blastbrick_reinforced',
                'immersiveengineering:blastbrick_reinforced',
                'immersiveengineering:blastbrick_reinforced',
                'create:brass_casing',
                'create:brass_casing',
                'thermal:energy_cell_frame',
                'thermal:fluid_cell_frame'
            ],
            result: 'thermal:machine_frame',
        },
        //bot
        {
            ritual_type: 'occultism:craft',
            activation_item: 'botania:mana_pool',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_botania.runic_altar',
            ingredients: ['botania:livingrock', 'botania:livingrock', 'botania:livingrock', 'botania:livingrock', 'botania:livingrock',  'botania:mana_pearl', 'botania:mana_pearl', 'botania:mana_pearl',Item.of('botania:brew_vial', '{brewKey:"botania:overload"}')],
            result: 'botania:runic_altar',
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'minecraft:brewing_stand',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_botania.brewery',
            ingredients: [ 'botania:mana_diamond', 'botania:mana_diamond','botania:mana_diamond', 'botania:mana_pearl', 'botania:mana_pearl', 'botania:mana_pearl', 'botania:manasteel_ingot', 'botania:manasteel_ingot', 'botania:manasteel_ingot'],
            result: 'botania:brewery',
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'botania:flower_bag',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_botania.apothecary_default',
            ingredients: ['pneumaticcraft:compressed_stone', 'pneumaticcraft:compressed_stone', 'pneumaticcraft:compressed_stone', 'pneumaticcraft:compressed_stone', 'pneumaticcraft:compressed_stone_slab', 'pneumaticcraft:compressed_stone_slab'],
            result: 'botania:apothecary_default',
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'ars_nouveau:spell_turret',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_botania.mana_spreader',
            ingredients: ['botania:livingwood', 'botania:livingwood', 'botania:livingwood', 'botania:livingwood', 'botania:livingwood'],
            result: 'botania:mana_spreader',
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'ars_nouveau:mana_jar',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_botania.mana_pool',
            ingredients: ['botania:livingrock', 'botania:livingrock', 'botania:livingrock', 'botania:livingrock', 'botania:livingrock'],
            result: 'botania:mana_pool',
        },
        //ind
        {
            ritual_type: 'occultism:craft',
            activation_item: 'industrialforegoing:machine_frame_pity',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_industrialforegoing.dissolution_chamber',
            ingredients: ['ars_nouveau:arcane_pedestal','ars_nouveau:arcane_pedestal', 'ars_nouveau:arcane_pedestal', 'ars_nouveau:arcane_pedestal', 'industrialforegoing:plastic', 'industrialforegoing:plastic', 'pneumaticcraft:plastic', 'pneumaticcraft:plastic', 'eidolon:shadow_gem', 'eidolon:shadow_gem'],
            result: 'industrialforegoing:dissolution_chamber',
        },
        //blood
        {
            ritual_type: 'occultism:craft',
            activation_item: 'bloodmagic:apprenticebloodorb',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_bloodmagic.incensealtar',
            ingredients: ['bloodmagic:largebloodstonebrick', 'bloodmagic:largebloodstonebrick', 'bloodmagic:largebloodstonebrick', 'bloodmagic:largebloodstonebrick', 'eidolon:shadow_gem', 'eidolon:shadow_gem', 'eidolon:shadow_gem', 'eidolon:shadow_gem'],
            result: 'bloodmagic:incensealtar',
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'kubejs:overlay_firebox',
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_bloodmagic.altar',
            ingredients: ['botania:livingrock', 'botania:livingrock', 'eidolon:shadow_gem', 'eidolon:shadow_gem', 'eidolon:shadow_gem', 'eidolon:shadow_gem'],
            result: 'bloodmagic:altar',
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: Item.of('eidolon:sapping_sword').ignoreNBT(),
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_bloodmagic.sacrificialdagger',
            ingredients: ['eidolon:zombie_heart', 'eidolon:zombie_heart', 'eidolon:zombie_heart','eidolon:zombie_heart',Item.of('naturesaura:sky_sword').ignoreNBT(),Item.of('naturesaura:infused_iron_sword').ignoreNBT()],
            result: 'bloodmagic:sacrificialdagger',
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: Item.of('industrialforegoing:machine_frame_advanced'),
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_industrialforegoing.fluid_laser_base',
            ingredients: ['industrialforegoing:plastic', 'powah:steel_energized', 'industrialforegoing:plastic', 'emendatusenigmatica:diamond_gear', 'industrialforegoing:laser_drill', 'industrialforegoing:laser_drill', 'kubejs:overlay_fluidoutputhatch', 'powah:steel_energized', 'kubejs:overlay_fluidinputhatch'],
            result: Item.of('industrialforegoing:fluid_laser_base'),
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: Item.of('industrialforegoing:machine_frame_advanced'),
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_industrialforegoing.ore_laser_base',
            ingredients: ['industrialforegoing:laser_drill', 'industrialforegoing:plastic', 'industrialforegoing:laser_drill', 'industrialforegoing:plastic', 'powah:steel_energized', 'powah:steel_energized', 'emendatusenigmatica:diamond_gear', 'kubejs:overlay_inputbus', 'kubejs:overlay_outputbus'],
            result: Item.of('industrialforegoing:ore_laser_base'),
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: Item.of('botania:livingwood'),
            pentacle_id: 'occultism:craft_djinni',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_botania.alfheim_portal',
            ingredients: ['botania:terrasteel_ingot', 'botania:terrasteel_ingot', 'botania:terrasteel_ingot', 'botania:terrasteel_ingot', 'ars_nouveau:red_archwood_wood', 'ars_nouveau:green_archwood_wood', 'ars_nouveau:purple_archwood_wood', 'ars_nouveau:blue_archwood_wood'],
            result: Item.of('botania:alfheim_portal'),
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: Item.of('mekanism:elite_control_circuit'),
            pentacle_id: 'occultism:craft_marid',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_mekanism.ultimate_control_circuit',
            ingredients: ['mekanism:alloy_atomic', 'mekanism:alloy_atomic', 'mekanism:alloy_atomic', 'mekanism:alloy_atomic'],
            result: Item.of('mekanism:ultimate_control_circuit'),
        },


    ];
    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';

            recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        if (recipe.item_to_use) {
            recipe.item_to_use = Ingredient.of(recipe.item_to_use).toJson();
        }
        recipe.ritual_dummy = Ingredient.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.result).toJson();

     event.custom(recipe)//.id(recipe.id)
    })
});
