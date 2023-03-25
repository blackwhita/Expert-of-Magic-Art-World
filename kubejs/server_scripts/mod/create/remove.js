onEvent('recipes', event => {
    const mumetal = ['create:flywheel', 'create:furnace_engine']
    mumetal.forEach((output) => {
        event.remove({ output: output });
    }); 
})