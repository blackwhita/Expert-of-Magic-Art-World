onEvent('recipes', event => {
    event.remove({ output: 'naturesaura:animal_spawner' });
    event.shaped('naturesaura:animal_spawner', [
            'SAS',
            'CBC',
            'SAS'
      ], {
            C: 'minecraft:iron_bars',
            A: 'minecraft:hay_block',
            B:'naturesaura:token_joy',
            S:'create:shadow_steel'
      })
})