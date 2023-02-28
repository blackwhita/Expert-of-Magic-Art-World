onEvent('fluid.tags', (event) => {
    let draining_whitelist = [
        'create:chocolate',
        'immersivepetroleum:oil',
        'industrialforegoing:latex',
        'industrialforegoing:sewage',
        'industrialforegoing:sludge',
        'integrateddynamics:liquid_chorus',
        'integrateddynamics:menril_resin',
        'minecraft:lava',
        'minecraft:water',
        'pneumaticcraft:oil',
        'thermal:crude_oil',
    ];

    event.get('create:no_infinite_draining').add(/.*/).remove(draining_whitelist);

    event.get('create:allow_infinite_draining').add(draining_whitelist);
});
