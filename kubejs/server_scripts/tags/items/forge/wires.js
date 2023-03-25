onEvent('item.tags', (event) => {
    event.add('forge:wires', [
        'immersiveengineering:wire_steel',
        'immersiveengineering:wire_aluminum',
        'immersiveengineering:wire_copper',
        'immersiveengineering:wire_electrum',
        'immersiveengineering:wire_lead',
        'createaddition:gold_wire',
        'createaddition:copper_wire',
        'createaddition:iron_wire'
    ]);
});
