onEvent('recipes', event => {
    event.remove({ output: 'powah:dielectric_rod_horizontal' });
    event.remove({ output: 'powah:energizing_orb', type: 'minecraft:crafting_shapeless'})
    event.shapeless('powah:dielectric_rod_horizontal', ['powah:dielectric_rod'])
    /*event.shaped('ftbjarmod:tempered_jar', [
            'SAS',
            'S S',
            'SSS'
      ], {
            S: 'ftbjarmod:tempered_glass',
            A: 'minecraft:stone_button'
      })*/
})