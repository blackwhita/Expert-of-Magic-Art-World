
onEvent('recipes', (event) => {
  
    const sluice = event.recipes.ftbsluice.sluice;
  
    sluice(['cloth'], 'ftbsluice:crushed_endstone', [
        ['minecraft:ender_pearl', 0.3],
        ['minecraft:chorus_fruit', 0.2],
        ['minecraft:chorus_flower', 0.01],
    ]).fluid("minecraft:lava");

    sluice(['iron'], 'ftbsluice:crushed_endstone', [
        ['minecraft:ender_pearl', 0.4],
        ['minecraft:chorus_fruit', 0.3],
        ['minecraft:chorus_flower', 0.05],
    ]).fluid("minecraft:lava");

    sluice(['gold'], 'ftbsluice:crushed_endstone', [
        ['minecraft:ender_pearl', 0.5],
        ['minecraft:chorus_fruit', 0.4],
        ['minecraft:chorus_flower', 0.1],
    ]).fluid("minecraft:lava");
    
    sluice(['diamond'], 'ftbsluice:crushed_endstone', [
        ['minecraft:ender_pearl', 0.7],
        ['minecraft:chorus_fruit', 0.5],
        ['minecraft:chorus_flower', 0.2],
    ]).fluid("minecraft:lava");
    
    sluice(['blazing'], 'ftbsluice:crushed_endstone', [
        ['minecraft:ender_pearl', 1],
        ['minecraft:chorus_fruit', 0.9],
        ['minecraft:chorus_flower', 0.4],
    ]).fluid("minecraft:lava").time(50);


});