onEvent('recipes', (event) => {
  
    const sluice = event.recipes.ftbsluice.sluice;
  
    sluice(['cloth'], '#forge:sand', [
        ['minecraft:bone_meal', 0.3],
        ['emendatusenigmatica:apatite_chunk', 0.3],
        ['emendatusenigmatica:aluminum_chunk', 0.3],
        ['emendatusenigmatica:bitumen_chunk', 0.19],
        ['emendatusenigmatica:silver_chunk', 0.19],
        ['emendatusenigmatica:nickel_chunk', 0.15],
        ['emendatusenigmatica:potassium_nitrate_chunk', 0.15],
        ['emendatusenigmatica:sapphire_chunk', 0.15],
        ['emendatusenigmatica:sulfur_chunk', 0.15],
        ['emendatusenigmatica:fluorite_chunk', 0.15],
    ]);

    sluice(['iron'], '#forge:sand', [
        ['minecraft:bone_meal', 0.4],
        ['emendatusenigmatica:apatite_chunk', 0.4],
        ['emendatusenigmatica:aluminum_chunk', 0.4],
        ['emendatusenigmatica:bitumen_chunk', 0.25],
        ['emendatusenigmatica:silver_chunk', 0.25],
        ['emendatusenigmatica:nickel_chunk', 0.19],
        ['emendatusenigmatica:potassium_nitrate_chunk', 0.19],
        ['emendatusenigmatica:sapphire_chunk', 0.19],
        ['emendatusenigmatica:sulfur_chunk', 0.19],
        ['emendatusenigmatica:fluorite_chunk', 0.19],
    ]);

    sluice(['gold'], '#forge:sand', [
        ['minecraft:bone_meal', 0.5],
        ['emendatusenigmatica:apatite_chunk', 0.5],
        ['emendatusenigmatica:aluminum_chunk', 0.5],
        ['emendatusenigmatica:bitumen_chunk', 0.4],
        ['emendatusenigmatica:silver_chunk', 0.4],
        ['emendatusenigmatica:nickel_chunk', 0.25],
        ['emendatusenigmatica:potassium_nitrate_chunk', 0.25],
        ['emendatusenigmatica:sapphire_chunk', 0.25],
        ['emendatusenigmatica:sulfur_chunk', 0.25],
        ['emendatusenigmatica:fluorite_chunk', 0.25],
    ]);
    
    sluice(['diamond'], '#forge:sand', [
        ['minecraft:bone_meal', 0.85],
        ['emendatusenigmatica:apatite_chunk', 0.85],
        ['emendatusenigmatica:aluminum_chunk', 0.85],
        ['emendatusenigmatica:bitumen_chunk', 0.7],
        ['emendatusenigmatica:silver_chunk', 0.7],
        ['emendatusenigmatica:nickel_chunk', 0.25],
        ['emendatusenigmatica:potassium_nitrate_chunk', 0.25],
        ['emendatusenigmatica:sapphire_chunk', 0.25],
        ['emendatusenigmatica:sulfur_chunk', 0.25],
        ['emendatusenigmatica:fluorite_chunk', 0.25],
    ]);
    
    sluice(['blazing'], '#forge:sand', [
        ['minecraft:bone_meal', 0.99],
        ['emendatusenigmatica:apatite_chunk', 0.99],
        ['emendatusenigmatica:aluminum_chunk', 0.99],
        ['emendatusenigmatica:bitumen_chunk', 0.9],
        ['emendatusenigmatica:silver_chunk', 0.9],
        ['emendatusenigmatica:nickel_chunk', 0.75],
        ['emendatusenigmatica:potassium_nitrate_chunk', 0.75],
        ['emendatusenigmatica:sapphire_chunk', 0.75],
        ['emendatusenigmatica:sulfur_chunk', 0.75],
        ['emendatusenigmatica:fluorite_chunk', 0.75],
    
    ]).fluid("minecraft:lava").time(50);
});