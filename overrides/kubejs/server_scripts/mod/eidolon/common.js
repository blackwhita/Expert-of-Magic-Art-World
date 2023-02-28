onEvent('recipes', event => {
    event.remove({ output: 'eidolon:pewter_blend' });
    event.shapeless('2x eidolon:pewter_blend', ['pneumaticcraft:ingot_iron_compressed', '#forge:ingots/lead'])
})