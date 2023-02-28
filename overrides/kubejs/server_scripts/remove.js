onEvent("recipes", (event) => {
    const remove_id = [
        'astralsorcery:altar/glass_lens',
        'astralsorcery:infuser/glass_pane',
        /*'create:conversion_14'*/
        'pneumaticcraft:explosion_crafting/compressed_iron_block',
        'pneumaticcraft:explosion_crafting/compressed_iron_ingot',
        'pneumaticcraft:pressure_chamber_glass'
    ]
    remove_id.forEach((id) => {
        event.remove({ id: id });
    }); 
    event.remove({ output: 'create:andesite_alloy' });
    //合金
    const mumetal = [
        'emendatusenigmatica:enderium_ingot',
        'emendatusenigmatica:bronze_ingot', 
        'emendatusenigmatica:brass_ingot', 
        'emendatusenigmatica:constantan_ingot', 
        'emendatusenigmatica:electrum_ingot',
        'emendatusenigmatica:invar_ingot', 
        'emendatusenigmatica:signalum_ingot', 
        'emendatusenigmatica:lumium_ingot', 
        'emendatusenigmatica:cast_iron_ingot']
    mumetal.forEach((output) => {
        event.remove({ output: output , type: 'minecraft:crafting_shapeless' });
        event.remove({ output: output , type: 'create:mixing' });
    });  
    const mumetal_powder = [
        'emendatusenigmatica:bronze_dust', 
        'emendatusenigmatica:brass_dust', 
        'emendatusenigmatica:constantan_dust', 
        'emendatusenigmatica:electrum_dust', 
        'emendatusenigmatica:invar_dust', 
        'emendatusenigmatica:signalum_dust', 
        'emendatusenigmatica:lumium_dust', 
        'emendatusenigmatica:enderium_dust'
    ]
    mumetal_powder.forEach((output) => {
        event.remove({ output: output , type: 'minecraft:crafting_shapeless' });
        //event.remove({ output: output , type: 'create:mixing' });_ingot'
    });  
////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*emendatusenigmatica_materials_plate_or_rod.forEach((output) => {
        event.remove({ output: `emendatusenigmatica:${output}_plate` , type: 'minecraft:crafting_shapeless' });
        event.remove({ output: `emendatusenigmatica:${output}_gear` , type: 'minecraft:crafting_shapeless' });
        event.remove({ output: `emendatusenigmatica:${output}_rod`  , type: 'minecraft:crafting_shapeless'});
    });
    emendatusenigmatica_gem_plate_or_rod.forEach((output) => {
        event.remove({ output: `emendatusenigmatica:${output}_plate` , type: 'minecraft:crafting_shapeless' });
        event.remove({ output: `emendatusenigmatica:${output}_gear` , type: 'minecraft:crafting_shapeless' });
        event.remove({ output: `emendatusenigmatica:${output}_rod` , type: 'minecraft:crafting_shapeless' });
    });
    minecraft_materials_plate_or_rod.forEach((output) => {
        event.remove({ output: `emendatusenigmatica:${output}_plate` , type: 'minecraft:crafting_shapeless' });
        event.remove({ output: `emendatusenigmatica:${output}_gear` , type: 'minecraft:crafting_shapeless' });
        event.remove({ output: `emendatusenigmatica:${output}_rod` , type: 'minecraft:crafting_shapeless' });
    });
    thermal_extra_materials_plate_or_rod.forEach((output) => {
        event.remove({ output: `thermal_extra:${output}_plate` , type: 'minecraft:crafting_shapeless' });
        event.remove({ output: `thermal_extra:${output}_gear` , type: 'minecraft:crafting_shapeless' });
    });
    const other_1 = [
        'emendatusenigmatica:diamond_gear', 'emendatusenigmatica:lapis_gear', 'emendatusenigmatica:emerald_gear', 'emendatusenigmatica:diamond_rod', 'emendatusenigmatica:emerald_rod', 'emendatusenigmatica:lapis_rod', 'emendatusenigmatica:lapis_plate', 'emendatusenigmatica:diamond_plate', 'emendatusenigmatica:emerald_plate','thermal:netherite_gear', 'thermal:netherite_plate']
        other_1.forEach((other_1) => {
        event.remove({ output: other_1 , type: 'minecraft:crafting_shapeless' });
    })
////////////////////////////////////////////////////////////////////////////////////////////////////////
    const other_2 = ['thermal:press_gear_die', 'thermal:press_packing_2x2_die', 'thermal:press_packing_3x3_die', 'thermal:press_unpacking_die', 'thermal:chiller_rod_cast', 'thermal:chiller_ingot_cast']
        other_2.forEach((other_2) => {
        event.remove({ output: other_2  });
    })*/
    const remove_item = ['createaddition:overcharged_alloy','compressedcreativity:rotational_compressor', 'createaddition:electric_motor', 'compressedcreativity:air_blower', 'pneumaticcraft:flux_compressor','refinedstorage:advanced_processor', 'refinedstorage:improved_processor', 'refinedstorage:basic_processor', 'extrastorage:neural_processor','extrastorage:netherite_crafter','ars_nouveau:mythical_clay', 'ars_nouveau:marvelous_clay', 'ars_nouveau:magic_clay']
    remove_item.forEach((item) => {
    event.remove({ output: item }); });
    const remove_item_type = [
        { output: 'metalbarrels:gold_to_diamond' ,type: 'create:mixing' },
        { output: 'minecraft:sandstone' ,type: 'create:compacting' }
    ]
    remove_item_type.forEach((item) => {
        event.remove({ output: item.output , type : item.type }); });
    
    /*const remove_id_ex = [
        'thermal:crops/radish',
        'thermal:compat/genericeco/insolator_minecraft_orange_oak_sapling',
        'thermal:crops/coffee',
        'pamhc2foodextended:cottoncandyitem',
        'thermal:crops/corn',
        'thermal:crops/spinach',
        'mekanismmatter:trinium_dust_rcp',
        'thermal:crops/sadiroot',
        'thermal:compat/simplefarming/insolator_simplefarming_cherry_sapling',
        'thermal:compat/simplefarming/insolator_simplefarming_grape_seeds',
        'pamhc2foodextended:gourmetmuttonpattyitem',
        'thermal:crops/strawberry',
        'thermal:crops/peanut',
        'thermal:compat/simplefarming/insolator_simplefarming_olive_sapling',
        'thermal:crops/frost_melon',
        'pamhc2foodextended:peachesandcreamoatmealitem',
        'thermal:crops/barley',
        'pamhc2foodextended:leafyfishsandwichitem',
        'thermal:crops/onion',
        'thermal:crops/green_bean',
        'thermal:compat/simplefarming/insolator_simplefarming_pea_seeds',
        'thermal:crops/rice',
        'thermal:fuels/compression/compression_creosote',
        'pamhc2foodextended:raspberrytrifleitem',
        'thermal:crops/eggplant',
        'thermal:compat/genericeco/insolator_minecraft_yellow_birch_sapling',
        'thermal:crops/bell_pepper',
        'thermal:compat/simplefarming/insolator_simplefarming_kenaf_seeds',
        'thermal:compat/genericeco/insolator_minecraft_orange_birch_sapling',
        'thermal:crops/tomatom',
        'pamhc2foodextended:bangersandmashitem',
        'pamhc2foodextended:rawtofishitem',
        'thermal:compat/genericeco/insolator_minecraft_yellow_oak_sapling',
        'thermal:compat/genericeco/insolator_minecraft_red_oak_sapling',
        'bloodmagic:meteor/myst_ag',
        'thermal:crops/tea',
        'thermal_extra:machine/smelter/polarium_dust',
        'thermal:compat/genericeco/insolator_minecraft_flowering_oak_sapling'
    ]
    remove_id_ex.forEach((id) => {
        event.remove({ id: id });
    }); */
    //V1.0.0
    event.remove({ output:'botania:blaze_block'})
    event.remove({ output:'createaddition:alternator'})
    event.remove({ output:'ftbjarmod:cast_iron_gear'})
})


