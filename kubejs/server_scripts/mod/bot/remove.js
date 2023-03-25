onEvent('recipes', (event) => {
    const mumetal = [
        'botania:fabulous_pool',
        'botania:diluted_pool',
        'mythicbotany:mana_collector'

    ]
    
    mumetal.forEach((output) => {
        event.remove({ output: output });
    });
        event.shaped('botania:fabulous_pool', [
            '   ',
            'BAB',
            'BBB'
      ], {
            A: 'botania:mana_pool',
            B:'botania:bifrost_perm'
      }),
      event.shaped('botania:fabulous_pool', [
            'AAA',
            'BCD',
            'AAA'
      ], {
            A: 'botania:dreamwood',
            B:'botania:elementium_ingot',
            C:'#botania:petals',
            D:'botania:mana_spreader'
      }),
      event.shapeless('2x botania:diluted_pool', ['botania:mana_pool'])
      event.shapeless('mythicbotany:mana_collector', ['kubejs:ultimate_rune','botania:gaia_spreader'])
});