onEvent('recipes', (event) => {
  
    const sluice = event.recipes.ftbsluice.sluice;
  
    sluice(['cloth'], '#forge:gravel', [
        ['emendatusenigmatica:iron_chunk', 0.25],
        ['emendatusenigmatica:copper_chunk', 0.19],
        ['emendatusenigmatica:aluminum_chunk', 0.19],
        ['emendatusenigmatica:lead_chunk', 0.19],
        ['emendatusenigmatica:uranium_chunk', 0.19],
        ['emendatusenigmatica:osmium_chunk', 0.19],
        ['emendatusenigmatica:tin_chunk', 0.19],
        ['emendatusenigmatica:zinc_chunk', 0.19],
        ['emendatusenigmatica:coal_chunk', 0.4],
        ['emendatusenigmatica:gold_chunk', 0.19],
        ['emendatusenigmatica:lapis_chunk', 0.19],
        ['emendatusenigmatica:emerald_chunk', 0.07],
        ['emendatusenigmatica:diamond_chunk', 0.07],
    ]);
    
    sluice(['iron'], '#forge:gravel', [
      ['emendatusenigmatica:iron_chunk', 0.3],
      ['emendatusenigmatica:copper_chunk', 0.3],
      ['emendatusenigmatica:aluminum_chunk', 0.3],
      ['emendatusenigmatica:lead_chunk', 0.3],
      ['emendatusenigmatica:uranium_chunk',0.3],
      ['emendatusenigmatica:osmium_chunk', 0.3],
      ['emendatusenigmatica:tin_chunk', 0.3],
      ['emendatusenigmatica:zinc_chunk', 0.3],
      ['emendatusenigmatica:coal_chunk', 0.6,],
      ['emendatusenigmatica:gold_chunk', 0.3,],
      ['emendatusenigmatica:lapis_chunk', 0.3,],
      ['emendatusenigmatica:emerald_chunk', 0.1],
      ['emendatusenigmatica:diamond_chunk', 0.1],
    ]);
    
    sluice(['gold'], '#forge:gravel', [
      ['emendatusenigmatica:iron_chunk', 0.5],
      ['emendatusenigmatica:copper_chunk', 0.3],
      ['emendatusenigmatica:aluminum_chunk', 0.3],
      ['emendatusenigmatica:lead_chunk', 0.3],
      ['emendatusenigmatica:uranium_chunk',0.3],
      ['emendatusenigmatica:osmium_chunk', 0.3],
      ['emendatusenigmatica:tin_chunk', 0.3],
      ['emendatusenigmatica:zinc_chunk', 0.3],
      ['emendatusenigmatica:coal_chunk', 0.6],
      ['emendatusenigmatica:gold_chunk', 0.3],
      ['emendatusenigmatica:lapis_chunk', 0.3],
      ['emendatusenigmatica:emerald_chunk', 0.1],
      ['emendatusenigmatica:diamond_chunk', 0.1],
    ]);
    
    sluice(['diamond'], '#forge:gravel', [
      ['emendatusenigmatica:iron_chunk', 0.7],
      ['emendatusenigmatica:copper_chunk', 0.5],
      ['emendatusenigmatica:aluminum_chunk', 0.5],
      ['emendatusenigmatica:lead_chunk', 0.5],
      ['emendatusenigmatica:uranium_chunk',0.5],
      ['emendatusenigmatica:osmium_chunk', 0.5],
      ['emendatusenigmatica:tin_chunk', 0.5],
      ['emendatusenigmatica:zinc_chunk', 0.5],
      ['emendatusenigmatica:coal_chunk', 0.8],
      ['emendatusenigmatica:gold_chunk', 0.5,],
      ['emendatusenigmatica:lapis_chunk', 0.5],
      ['emendatusenigmatica:emerald_chunk', 0.3],
      ['emendatusenigmatica:diamond_chunk', 0.3],
    ]);

    sluice(['blazing'], '#forge:gravel', [
      ['emendatusenigmatica:iron_chunk', 0.9],
      ['emendatusenigmatica:copper_chunk', 0.9],
      ['emendatusenigmatica:aluminum_chunk', 0.9],
      ['emendatusenigmatica:lead_chunk', 0.9],
      ['emendatusenigmatica:uranium_chunk',0.9],
      ['emendatusenigmatica:osmium_chunk', 0.9],
      ['emendatusenigmatica:tin_chunk', 0.9],
      ['emendatusenigmatica:zinc_chunk', 0.9],
      ['emendatusenigmatica:coal_chunk', 1.5],
      ['emendatusenigmatica:gold_chunk', 0.9],
      ['emendatusenigmatica:lapis_chunk', 0.9,],
      ['emendatusenigmatica:emerald_chunk', 0.5],
      ['emendatusenigmatica:diamond_chunk', 0.5],
    ]).fluid("minecraft:lava").time(50);
});
