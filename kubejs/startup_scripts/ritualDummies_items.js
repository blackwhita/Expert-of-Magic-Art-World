onEvent('item.registry', event => {
    const ritualDummies = [
        //定义图标神秘学物品
        'craft_thermal.machine_frame',
        'craft_botania.runic_altar',
        'craft_botania.brewery',
        'craft_botania.apothecary_default',
        'craft_botania.mana_spreader',
        'craft_botania.mana_pool',
        'craft_industrialforegoing.dissolution_chamber',
        'craft_bloodmagic.incensealtar',
        'craft_bloodmagic.altar',
        'craft_bloodmagic.sacrificialdagger',
        'craft_industrialforegoing.fluid_laser_base',
        'craft_industrialforegoing.ore_laser_base',
        'craft_botania.alfheim_portal',
        'craft_mekanism.ultimate_control_circuit',
        'craft_astralsorcery.altar_discovery',
        'craft_astralsorcery.attunement_altar'

    ];
    ritualDummies.forEach((item) => {
        event.create(`occultism:ritual_dummy/${item}`).type('occultism:ritual_dummy').texture('occultism:item/ritual_dummy');
    });
})