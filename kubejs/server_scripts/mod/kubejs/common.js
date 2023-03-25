onEvent('recipes', event => {
          event.shaped('kubejs:overlay_firebox', [
            'CEC',
            'DAF',
            'CBC'
      ], {
            A: 'kubejs:blockcasing_plain',
            B: 'create:blaze_burner',
            C: 'resourcefulbees:coal_honeycomb',
            D: 'ironfurnaces:augment_fuel',
            E: 'immersiveengineering:radiator',
            F: 'ironfurnaces:augment_speed'
         }),
         event.shaped('kubejs:overlay_controller', [
            ' A ',
            'ABA',
            ' A '
      ], {
            A: 'kubejs:blockcasing_plain',
            B: 'pneumaticcraft:printed_circuit_board'
         })
})         
