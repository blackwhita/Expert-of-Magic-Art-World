onEvent('recipes', event => {
    //event.remove({ output: 'pneumaticcraft:liquid_compressor' });
    /*event.shaped('pneumaticcraft:liquid_compressor', [
        'CDC',
        'CAC',
        'CBC'
    ], {
        A: 'naturesaura:color_changer',
        B: 'create:brass_casing',
        C: 'pneumaticcraft:ingot_iron_compressed',
        D: 'create:spout'
    })*/
    event.shapeless('eomaw:aquamarine_wrapped', ['9x astralsorcery:aquamarine'])
    event.shapeless('9x astralsorcery:aquamarine', ['eomaw:aquamarine_wrapped'])
})//