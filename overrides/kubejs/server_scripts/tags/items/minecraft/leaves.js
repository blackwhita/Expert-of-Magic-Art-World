onEvent('item.tags', (event) => {
    event.add('minecraft:leaves/coniferous', [
        'minecraft:spruce_leaves',
    ]);

    event.add('minecraft:leaves', ['sushigocrafting:avocado_leaves', /ars_nouveau:\w+_leaves/]);
});
