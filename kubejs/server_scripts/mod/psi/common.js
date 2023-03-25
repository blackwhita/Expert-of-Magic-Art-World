onEvent('recipes', event => {
    const mumetal = [
        'psi:cad_assembly_iron',
        'psi:cad_assembly_gold'

    ]
    mumetal.forEach((output) => {
        event.remove({ output: output });
    }); 
    event.shaped('psi:cad_assembly_iron', [
            '   ',
            'AAA',
            'AB '
      ], {
            A: 'createaddition:overcharged_alloy',
            B: 'powah:ender_core',

      }),
    event.shapeless('psi:cad_assembly_gold', ['psi:cad_assembly_iron', 'powah:steel_energized'])
})