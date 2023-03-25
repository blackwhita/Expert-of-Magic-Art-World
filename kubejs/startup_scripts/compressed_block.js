/*onEvent('block.registry', event => {
    event.create('x1_compressed_basalt').material('stone').hardness(3).displayName('1重压缩');
    const x1_compressed_block = [
        x1_compressed_basalt,
        x1_compressed_cobblestone,
        x1_compressed_dirt,
        x1_compressed_gravel,
        x1_compressed_sand,
        x1_compressed_stone,
        x1_compressed_dust,
        x1_compressed_endstone,
        x1_compressed_netherrack             
    ];
    x1_compressed_block.forEach((block) => {
        event.create(block).material('stone').hardness(3)//.texture(`compressed:block/${block}`);
    });
    const x2_compressed_block = [
        x2_compressed_basalt,
        x2_compressed_cobblestone,
        x2_compressed_dirt,
        x2_compressed_gravel,
        x2_compressed_sand,
        x2_compressed_stone,
        x2_compressed_dust,
        x2_compressed_endstone,
        x2_compressed_netherrack

    ];
    x2_compressed_block.forEach((block) => {
        event.create(block).material('stone').hardness(5)//.texture(`compressed:block/${block}`);
    });
    const x3_compressed_block = [
        x3_compressed_basalt,
        x3_compressed_cobblestone,
        x3_compressed_dirt,
        x3_compressed_gravel,
        x3_compressed_sand,
        x3_compressed_stone,
        x3_compressed_dust,
        x3_compressed_endstone,
        x3_compressed_netherrack

    ];
    x3_compressed_block.forEach((block) => {
        event.create(block).material('stone').hardness(50)//.texture(`compressed:block/${block}`);
    });
})*/
onEvent("block.registry", (event) => {
    for (let type in global.compressables) {
        let props = global.compressables[type];
        let maxLevel = props.maxLevel || global.maxCompress;
        let tool = props.tool || "pickaxe";
        let x = {
            1: "5.0",
            2: "10.0",
            3: "20.0",
        };
        for (let i = 1; i <= maxLevel; i++) {
            event
                .create(`compressed:x${i}_compressed_${type}`)
                .harvestTool(tool, i + 1)
                .requiresTool(true)
                .material(props.material)
                .hardness(x[i])
                .displayName(`x${i} Compressed ${props.name}`);
        }
    }
});