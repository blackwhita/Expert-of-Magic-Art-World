onEvent('recipes', (event) => {
  
    const sluice = event.recipes.ftbsluice.sluice;
  
    sluice(['cloth'], 'ftbsluice:dust', [
        ['emendatusenigmatica:dimensional_chunk', 0.2],
        ['emendatusenigmatica:arcane_chunk', 0.2],
        ['emendatusenigmatica:cinnabar_chunk', 0.2],
        ['emendatusenigmatica:peridot_chunk', 0.2],
        ['emendatusenigmatica:ruby_chunk', 0.2],
        ['emendatusenigmatica:redstone_chunk', 0.2],
    ]);

    sluice(['iron'], 'ftbsluice:dust', [
        ['emendatusenigmatica:dimensional_chunk', 0.3],
        ['emendatusenigmatica:arcane_chunk', 0.3],
        ['emendatusenigmatica:cinnabar_chunk', 0.3],
        ['emendatusenigmatica:peridot_chunk', 0.3],
        ['emendatusenigmatica:ruby_chunk', 0.3],
        ['emendatusenigmatica:redstone_chunk', 0.3],
    ]);
    
    sluice(['gold'], 'ftbsluice:dust', [
        ['emendatusenigmatica:dimensional_chunk', 0.4],
        ['emendatusenigmatica:arcane_chunk', 0.4],
        ['emendatusenigmatica:cinnabar_chunk', 0.4],
        ['emendatusenigmatica:peridot_chunk', 0.4],
        ['emendatusenigmatica:ruby_chunk', 0.4],
        ['emendatusenigmatica:redstone_chunk', 0.4],
    ]);
    
    sluice(['diamond'], 'ftbsluice:dust', [
        ['emendatusenigmatica:dimensional_chunk', 0.6],
        ['emendatusenigmatica:arcane_chunk', 0.6],
        ['emendatusenigmatica:cinnabar_chunk', 0.6],
        ['emendatusenigmatica:peridot_chunk', 0.6],
        ['emendatusenigmatica:ruby_chunk', 0.6],
        ['emendatusenigmatica:redstone_chunk', 0.6],
    ]);
    
    sluice(['blazing'], 'ftbsluice:dust', [
        ['emendatusenigmatica:dimensional_chunk', 0.9],
        ['emendatusenigmatica:arcane_chunk', 0.9],
        ['emendatusenigmatica:cinnabar_chunk', 0.9],
        ['emendatusenigmatica:peridot_chunk', 0.9],
        ['emendatusenigmatica:ruby_chunk', 0.9],
        ['emendatusenigmatica:redstone_chunk', 0.9],
    ]).fluid("minecraft:lava").time(50);


});