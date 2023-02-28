onEvent('recipes', event => {
    const mumetal = [
        'astralsorcery:illuminator'
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output });
        event.shapeless('astralsorcery:illuminator', ['minecraft:torch'])
    })
    }); 
