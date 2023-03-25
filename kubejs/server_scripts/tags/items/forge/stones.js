onEvent('item.tags', (event) => {
    event
        .get('forge:stone')
        .add([
            'astralsorcery:marble_arch',
            'astralsorcery:marble_bricks',
            'astralsorcery:marble_chiseled',
            'astralsorcery:marble_engraved',
            'astralsorcery:marble_raw',
            'astralsorcery:marble_runed',
            'create:natural_scoria',
        ])
        .remove(['#pneumaticcraft:reinforced_stone']);

    event
        .get('forge:stones/basalt')
        .add([
            'minecraft:basalt'
        ]);
    event
        .get('forge:stones/marble')
        .add([
            'astralsorcery:marble_arch',
            'astralsorcery:marble_bricks',
            'astralsorcery:marble_chiseled',
            'astralsorcery:marble_engraved',
            'astralsorcery:marble_raw',
            'astralsorcery:marble_runed'
        ]);
    
    event.get('forge:stones/granite').add(['minecraft:granite', 'minecraft:polished_granite']);
    event.get('forge:stones/diorite').add(['minecraft:diorite', 'minecraft:polished_diorite']);
    event.get('forge:stones/andesite').add(['minecraft:andesite', 'minecraft:polished_andesite']);
    createStoneTypes.forEach(function (stone) {
        event.get('forge:stones/' + stone).add('create:' + stone);
    });
});
