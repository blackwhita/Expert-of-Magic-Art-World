onEvent('recipes', (event) => {
  
    const sluice = event.recipes.ftbsluice.sluice;
  
    sluice(['cloth'], 'ftbsluice:crushed_netherrack', [
        ['emendatusenigmatica:quartz_chunk', 0.4],
        ['minecraft:glowstone_dust', 0.4],
        ['emendatusenigmatica:cobalt_chunk', 0.2],
        ['minecraft:netherite_scrap', 0.1],
    ]).fluid("minecraft:lava");
    
    sluice(['iron'], 'ftbsluice:crushed_netherrack', [
        ['emendatusenigmatica:quartz_chunk', 0.5],
        ['minecraft:glowstone_dust', 0.5],
        ['emendatusenigmatica:cobalt_chunk', 0.3],
        ['minecraft:netherite_scrap', 0.15],
    ]).fluid("minecraft:lava");

    sluice(['gold'], 'ftbsluice:crushed_netherrack', [
        ['emendatusenigmatica:quartz_chunk', 0.6],
        ['minecraft:glowstone_dust', 0.6],
        ['emendatusenigmatica:cobalt_chunk', 0.4],
        ['minecraft:netherite_scrap', 0.2],
    ]).fluid("minecraft:lava");

    sluice(['diamond'], 'ftbsluice:crushed_netherrack', [
        ['emendatusenigmatica:quartz_chunk', 0.9],
        ['minecraft:glowstone_dust', 0.9],
        ['emendatusenigmatica:cobalt_chunk', 0.5],
        ['minecraft:netherite_scrap', 0.3],
        ['minecraft:blaze_powder', 0.8],
    ]).fluid("minecraft:lava");

    sluice(['blazing'], 'ftbsluice:crushed_netherrack', [
        ['emendatusenigmatica:quartz_chunk', 1.2],
        ['minecraft:glowstone_dust', 1.2],
        ['emendatusenigmatica:cobalt_chunk', 0.8],
        ['minecraft:netherite_scrap', 0.6],
        ['minecraft:blaze_powder', 0.9],
        ['minecraft:ghast_tear', 0.3],
    ]).fluid("minecraft:lava").time(50);
});