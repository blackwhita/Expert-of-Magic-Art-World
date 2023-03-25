onEvent('recipes', event => {
      event.remove({ output: 'ftbjarmod:tempered_jar' });
      event.shaped('ftbjarmod:tempered_jar', [
            'SAS',
            'S S',
            'SSS'
      ], {
            S: 'ftbjarmod:tempered_glass',
            A: 'minecraft:stone_button'
      })
      event.shapeless('9x emendatusenigmatica:cast_iron_ingot', ['emendatusenigmatica:cast_iron_block'])
})