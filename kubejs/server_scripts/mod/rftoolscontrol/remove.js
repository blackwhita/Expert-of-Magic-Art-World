onEvent('recipes', event => {
    const rftoolscontrol = [
        'rftoolscontrol:card_base'
    ]
    rftoolscontrol.forEach((output) => {
        event.remove({ output: output });
    }); 
});
