onEvent('item.tags', (event) => {
    var items = [
        'bloodmagic:bloodlightsigil',
        'immersiveengineering:floodlight',
        'immersiveengineering:lantern',
        'immersiveengineering:balloon',
        'minecraft:beacon',
        'minecraft:end_rod',
        'minecraft:glowstone',
        'minecraft:lava_bucket',
        'minecraft:magma_block',
        'minecraft:shroomlight',
        'naturesaura:light_staff',
        'torchmaster:dreadlamp',
    ];
    var exceptions = ['occultism:magic_lamp_empty'];

    event
        .get('forge:lights')
        .add(items)
        .add(/_lantern/)
        .add(/_lamp/)
        .add(/torch/)
        .add(/fire_pit/)
        .add(/shiny_flower/)
        .add(/floating_flower/)
        .add(/candle/)
        .add(/campfire/)
        .add(/_glowcane/)
        .add(/botania:\w+_mushroom/)
        .add(/illumin/)
        .add(/sconce/)
        .add(/candelabra/)
        .add(/chandelier/)
        .add(/brazier/)
        .add('#chipped:glowstone')
        .add('#chisel:glowstone')
        .add('#chipped:sea_lantern')
        .add('#chipped:shroomlight')
        .add(/neon_light/)
        .remove(exceptions);
});
