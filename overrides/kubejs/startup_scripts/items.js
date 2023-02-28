onEvent('item.registry', event => {
    //rainbowcompound
    const rainbowcompound_item = [
        'blazeite_ingot',
        'chorusite_ingot',
        'frostite_ingot',
        'netherstar_ingot',
        'rainbow_compound',
        'slimeite_ingot',
        'warpedite_ingot'
    ]
    rainbowcompound_item.forEach(item => {
        if (item == 'netherstar_ingot' || item == 'rainbow_compound') {
            event.create(`rainbowcompound:${item}`).displayName(`§6${item}`).texture(`rainbowcompound:items/${item}`)
        } else {
            event.create(`rainbowcompound:${item}`).displayName(item).texture(`rainbowcompound:items/${item}`)
        }
    })
    event.create('high_steel_ingot').displayName('§6high_steel_ingot')
    event.create('broken_advanced_pcb').displayName('broken_advanced_pcb')
    event.create('creative_catalyst').displayName('§6creative_catalyst')
    event.create('ultimate_rune').displayName('§ultimate_rune')
    event.create('omniscient_lens').displayName('§6omniscient_lens')
    event.create('novaextended-ark_circuit-layer0').displayName('§6novaextended-ark_circuit-layer0').tooltip('by nove')
    event.create('novaextended-extremecircuit-layer0').displayName('§6novaextended-extremecircuit-layer0').tooltip('by nove')
    event.create('perfect_dna').displayName('§6perfect_dna')
    event.create('magic_dna').displayName('magic_dna')
    event.create('industrial_dna').displayName('industrial_dna')
    event.create('bee_dna').displayName('bee_dna').tooltip('用DNA剥离器剥离蜜蜂DNA获得(kill)')
    event.create('scraper').displayName('DNA_Stripper').type('sword').tier("netherite").attackDamage(10.0).attackSpeed(10.0).tooltip('原界剥离之术');
    //avaritia
    event.create('avaritia:akashic_record').displayName('§6kashic_record').tooltip('by Avaritia"s team(model)').texture('avaritia:items/akashic_record')
    event.create('avaritia:ultimate_stew').displayName('§6ultimate_stew').tooltip('by Avaritia"s team').texture('avaritia:items/ultimate_stew')
    event.create('avaritia:cosmic_meatballs').displayName('§6cosmic_meatballs').tooltip('by Avaritia"s team').texture('avaritia:items/cosmic_meatballs')
    //emmaw
    event.create('eomaw:ico').displayName('ico').texture('eomaw:items/ico')
    const enigmatica_ftbquest_item = [
        "common_lootbox",
        "rare_lootbox",
        "epic_lootbox",
        "legendary_lootbox",
        "miners_delight",
        "sorcerers_delight",
        "blacksmiths_delight",
        "scavengers_delight",
        "alchemists_delight",
        'farmers_delight'
    ]
    enigmatica_ftbquest_item.forEach(item => {
        event.create(item).texture(`enigmatica:item/${item}`)
    })
})