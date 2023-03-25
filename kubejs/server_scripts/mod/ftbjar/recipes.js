onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;

    jar(Fluid.of("minecraft:lava", 1000), "#forge:cobblestone").time(3200).lowTemp();
    jar(Fluid.of("minecraft:lava", 1000), "#forge:cobblestone").time(300).highTemp();
    jar("minecraft:ice", [Fluid.of("minecraft:water", 1000)]).subzeroTemp();
    jar("minecraft:obsidian", [Fluid.of("minecraft:water", 1000), Fluid.of("minecraft:lava", 1000)]).time(1200);
    jar("minecraft:netherrack", ["minecraft:redstone", Fluid.of("minecraft:lava", 1000)]).time(400);
    jar("16x minecraft:netherrack", ["16x minecraft:redstone", Fluid.of("minecraft:lava", 16000)]).time(400).highTemp();

    jar("minecraft:end_stone", ["minecraft:glowstone_dust", Fluid.of("minecraft:lava", 1000)]).time(400);
    jar("16x minecraft:end_stone", ["16x minecraft:glowstone_dust", Fluid.of("minecraft:lava", 16000)]).time(400).highTemp();

    jar(Fluid.of('4x minecraft:gold_ingot', 1000), "#forge:cobblestone").time(3200).lowTemp();
    jar(Fluid.of("minecraft:lava", 1000), "#forge:cobblestone").time(300).highTemp();

    jar(Fluid.of("minecraft:water", 1000) ,['#minecraft:saplings']).time(400);
    jar('create:andesite_alloy' ,['minecraft:iron_ingot','minecraft:andesite']).time(200);
    jar('create:andesite_alloy' ,['emendatusenigmatica:zinc_nugget','minecraft:andesite']).time(40).highTemp();

    jar('minecraft:ghast_tear' ,['4x minecraft:blaze_powder',Fluid.of("minecraft:lava", 1000)]).time(1200).lowTemp();

    
    event.remove({ output: 'naturesaura:gold_fiber' });
    event.remove({ output: 'naturesaura:gold_brick' });
    jar('naturesaura:gold_fiber' ,['4x #minecraft:leaves','minecraft:grass','4x minecraft:gold_nugget']).time(400).highTemp();
    jar('naturesaura:gold_brick' ,['4x minecraft:stone_bricks','4x naturesaura:gold_fiber']).time(600).highTemp();
    
    event.remove({ output: 'pneumaticcraft:reinforced_stone' });
    jar('8x pneumaticcraft:reinforced_stone' ,['ars_nouveau:mana_fiber','8x minecraft:stone',Fluid.of("minecraft:lava", 1000)]).time(1200).highTemp();

    event.remove({ output: 'ars_nouveau:blaze_fiber'  });
    jar('ars_nouveau:blaze_fiber' ,['ars_nouveau:mana_fiber','2x resourcefulbees:blaze_honeycomb',Fluid.of("minecraft:lava", 1000)]).time(100).highTemp();
    jar('emendatusenigmatica:cast_iron_block' ,['pneumaticcraft:compressed_iron_block']).time(20).highTemp();

    //occultism
    event.remove({ output: 'occultism:spirit_attuned_crystal'  });
    jar('occultism:spirit_attuned_crystal' ,['ars_nouveau:summoning_crystal','4x occultism:spirit_attuned_gem']).time(1200).highTemp();

    jar('emendatusenigmatica:cast_iron_ingot' ,['minecraft:iron_ingot']).time(240).highTemp();
    //1.0.0
    jar('minecraft:andesite' ,["#forge:cobblestone"]).time(100)
    jar('minecraft:andesite' ,["#forge:cobblestone"]).time(50).lowTemp();
    jar('minecraft:andesite' ,["#forge:cobblestone"]).time(10).highTemp();

    jar('minecraft:ink_sac' ,['minecraft:black_dye']).time(10).lowTemp();
});
//'powah:dry_ice'