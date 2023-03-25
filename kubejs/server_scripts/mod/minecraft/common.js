onEvent('recipes', event => {
      //event.remove({ output: 'naturesaura:animal_spawner' });
      event.shaped('minecraft:sugar_cane', [
            ' C ',
            ' C ',
            ' C '
      ], {
            C: 'botania:living_root'
      })
      event.shaped('minecraft:warped_wart_block', [
            'CC ',
            'CC ',
            '   '
      ], {
            C: 'minecraft:warped_roots'
      })
})
