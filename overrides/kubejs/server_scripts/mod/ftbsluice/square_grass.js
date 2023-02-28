onEvent('recipes', (event) => {
    var addition = 0 
    const mesh_type = [
        'cloth',
        'iron',
        'gold',
        'diamond',
        'blazing'
    ]
    mesh_type.forEach((mesh_type) => {
        event.recipes.ftbsluice.sluice([mesh_type], 'minecraft:dirt', 
        [
            ['minecraft:oak_sapling', addition + 0.09],
            ['minecraft:spruce_sapling', addition + 0.09],
            ['minecraft:birch_sapling' , addition + 0.09],
            ['minecraft:jungle_sapling', addition + 0.09],
            ['minecraft:acacia_sapling', addition + 0.09],
            ['minecraft:dark_oak_sapling', addition + 0.09],
            ['ars_nouveau:blue_archwood_sapling', addition + 0.09],
            ['ars_nouveau:purple_archwood_sapling', addition + 0.09],
            ['ars_nouveau:green_archwood_sapling', addition + 0.09],
            ['integrateddynamics:menril_sapling', addition + 0.09],
            ['ars_nouveau:red_archwood_sapling', addition + 0.09],
            ['minecraft:carrot', addition + 0.09],
            ['minecraft:potato', addition + 0.09],
            ['minecraft:melon_seeds', addition + 0.09],
            ['minecraft:pumpkin_seeds', addition + 0.09],
            ['minecraft:kelp', addition + 0.09],
            ['minecraft:sea_pickle', addition + 0.09],
            ['minecraft:wheat_seeds', addition + 0.09],
            ['minecraft:red_mushroom', addition + 0.09],
            ['minecraft:brown_mushroom', addition + 0.09],
            ['minecraft:beetroot_seeds', addition + 0.09],
    ]).fluid('minecraft:water');
        if (mesh_type == 'iron') {
            addition = 0.3;
        } else if (mesh_type == 'gold') {
            addition = 0.5;
        } else if (mesh_type == 'diamond') {
            addition = 0.7;
        } else if (mesh_type == 'blazing') {
            addition = 0.9;
        } else {
            addition = 0;
        }
    })
})
