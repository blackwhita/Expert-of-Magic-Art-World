onEvent('recipes', event => {
    event.remove({ output: 'immersiveengineering:circuit_table' });
    event.shaped('immersiveengineering:circuit_table', [
            '   ',
            'SSB',
            'C A'
      ], {
            S: '#forge:treated_wood_slab',
            A: 'createaddition:overcharged_casing',
            B:'immersiveengineering:screwdriver',
            C:'immersiveengineering:craftingtable'
      })
})