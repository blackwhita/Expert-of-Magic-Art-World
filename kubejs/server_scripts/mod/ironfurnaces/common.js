onEvent('recipes', event => {
    const mumetal = [
        'ironfurnaces:rainbow_coal'
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output });
    }); 
    event.shaped('ironfurnaces:rainbow_coal', [
            'BBB',
            'BAB',
            'BBB'
      ], {
            A: 'ironfurnaces:rainbow_core',
            B:'minecraft:coal',
      })
})