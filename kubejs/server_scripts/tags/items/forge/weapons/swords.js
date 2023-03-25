onEvent('item.tags', (event) => {
    var items = [
        'immersiveengineering:sword_steel',
    ];
    var exceptions = [
    ];

    event
        .get('forge:weapons/sword')
        .add(items)
        .add(/_sword/)
        .remove(exceptions);
});
