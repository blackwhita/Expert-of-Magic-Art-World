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
        event.recipes.ftbsluice.sluice([mesh_type], 'minecraft:soul_sand', 
        [
            ['minecraft:nether_wart', addition + 0.09],
            ['minecraft:crimson_fungus', addition + 0.09],
            ['minecraft:twisting_vines' , addition + 0.09],
            ['minecraft:warped_roots', addition + 0.09],
            ['minecraft:weeping_vines', addition + 0.09],
            ['minecraft:crimson_roots', addition + 0.09],
            ['minecraft:warped_fungus', addition + 0.09],
    ]).fluid('minecraft:lava');
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
