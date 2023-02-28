onEvent('recipes', event => {
    event.remove({ output: 'occultism:sacrificial_bowl' });
    event.shaped('occultism:sacrificial_bowl', [
            '   ',
            'S S',
            'SSS'
      ], {
            S: 'pneumaticcraft:compressed_stone',
      })
})