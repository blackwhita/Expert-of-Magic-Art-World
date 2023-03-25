onEvent('recipes', event => {
    const mekanism = [
        'naturesaura:animal_spawner',
        'mekanism:thermal_evaporation_block',
        'mekanism:induction_casing',
        'mekanismgenerators:fission_reactor_casing',
        'mekanismgenerators:turbine_casing',
        'mekanism:boiler_casing',
    ]
    mekanism.forEach((output) => {
        event.remove({ output: output });
    }); 
    event.shaped('naturesaura:animal_spawner', [
            'SAS',
            'CBC',
            'SAS'
      ], {
            C: 'minecraft:iron_bars',
            A: 'minecraft:hay_block',
            B:'naturesaura:token_joy',
            S:'create:shadow_steel'
      }),
    event.shaped('4x mekanism:thermal_evaporation_block', [
            ' B ',
            'BAB',
            ' B '
      ], {
            A: 'mekanism:steel_casing',
            B:'mekanism:alloy_infused',
      }),
      event.shaped('4x mekanism:induction_casing', [
            ' B ',
            'BAB',
            ' B '
      ], {
            A: 'mekanism:steel_casing',
            B:'mekanism:alloy_reinforced',
      }),
      event.shaped('4x mekanismgenerators:fission_reactor_casing', [
            ' B ',
            'BAB',
            ' B '
      ], {
            A: 'mekanism:ultimate_control_circuit',
            B:'kubejs:high_steel_ingot',
      }),
      event.shaped('4x mekanism:boiler_casing', [
            ' B ',
            'BAB',
            ' B '
      ], {
            A: 'mekanism:elite_control_circuit',
            B:'kubejs:high_steel_ingot',
      }),
      event.shaped('4x mekanismgenerators:turbine_casing', [
            ' B ',
            'BAB',
            ' B '
      ], {
            A: 'mekanism:advanced_control_circuit',
            B:'kubejs:high_steel_ingot',
      })
})