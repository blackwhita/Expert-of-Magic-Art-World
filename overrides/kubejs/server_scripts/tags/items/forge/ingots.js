onEvent('item.tags', (event) => {
    event.get('forge:ingots/uraninite').add('powah:uraninite');
    event.get('forge:ingots/energized_steel').add('powah:steel_energized');
    event.get('forge:ingots/radioactive').add('#forge:ingots/uraninite').add('#forge:ingots/uranium');

    event.add('forge:ingots', [
        'astralsorcery:starmetal_ingot',
        'bloodmagic:ingot_hellforged',
        'botania:gaia_ingot',
        'create:andesite_alloy',
        'eidolon:arcane_gold_ingot',
        'eidolon:pewter_ingot',
        'immersiveengineering:ingot_aluminum',
        'immersiveengineering:ingot_constantan',
        'immersiveengineering:ingot_electrum',
        'immersiveengineering:ingot_hop_graphite',
        'immersiveengineering:ingot_lead',
        'immersiveengineering:ingot_nickel',
        'immersiveengineering:ingot_silver',
        'immersiveengineering:ingot_uranium',
        'industrialforegoing:pink_slime_ingot',
        'minecraft:netherite_scrap',
        'mythicbotany:alfsteel_ingot',
        'naturesaura:infused_iron',
        'naturesaura:sky_ingot',
        'naturesaura:tainted_gold',
        'occultism:iesnium_ingot',
        'powah:steel_energized',
        'powah:uraninite'
    ]);
    /*event.add('forge:ingots/superheated_steel', ['kubejs:superheated_steel_ingot']);
    event.add('forge:ingots/hot_compressed_iron', ['kubejs:hot_compressed_iron_ingot']);*/
    event.get('forge:ingots/copper').add('immersiveengineering:ingot_copper');
    event.get('forge:ingots/alfsteel').add('mythicbotany:alfsteel_ingot');
    event.get('forge:ingots/pink_slime').add('industrialforegoing:pink_slime_ingot');
    event.get('forge:ingots/gaia').add('botania:gaia_ingot');
    event.get('forge:ingots/gaia_spirit').add('botania:gaia_ingot');
    event.add('forge:ingots/starmetal', ['astralsorcery:starmetal_ingot']);
    event.add('forge:ingots/andesite_alloy', ['create:andesite_alloy']);

    event.add('forge:ingots/sky', ['naturesaura:sky_ingot']);
    event.add('forge:ingots/tainted_gold', ['naturesaura:tainted_gold']);
    event.add('forge:ingots/infused_iron', ['naturesaura:infused_iron']);

});
