onEvent('recipes', event => {
    //异彩化合物转化器
      event.shaped('masterfulmachinery:heterochromatic_compound_controller', [
            'SSS',
            'SAS',
            'SSS'
      ], {
            S: 'create:brass_casing',
            A: 'kubejs:overlay_controller'
      }),
      event.shaped('masterfulmachinery:heterochromatic_compound_energy_port_energy_input', [
        'SSS',
        'SAS',
        'SSS'
  ], {
        S: 'create:brass_casing',
        A: 'kubejs:overlay_energyinputhatch'
      }),
      event.shaped('masterfulmachinery:heterochromatic_compound_item_port_items_input', [
            'SSS',
            'SAS',
            'SSS'
      ], {
            S: 'create:brass_casing',
            A: 'kubejs:overlay_inputbus'
      }),
      event.shaped('masterfulmachinery:heterochromatic_compound_item_port_items_output', [
            'SSS',
            'SAS',
            'SSS'
      ], {
            S: 'create:brass_casing',
            A: 'kubejs:overlay_outputbus'
      }),
      event.shaped('masterfulmachinery:heterochromatic_compound_spinny_port_create_rotation_input', [
            'SSS',
            'SAS',
            'SSS'
      ], {
            S: 'create:brass_casing',
            A: 'kubejs:overlay_gearbox'
      })
      //MK1
      event.shaped('masterfulmachinery:assembly_machine_mk1_controller', [
            ' S ',
            'SAS',
            ' S '
      ], {
            S: 'kubejs:blockcasing_plain',
            A: 'kubejs:overlay_controller'
      })
      event.shaped('masterfulmachinery:assembly_machine_mk1_item_port_items_input', [
            ' S ',
            'SAS',
            ' S '
      ], {
            S: 'kubejs:blockcasing_plain',
            A: 'kubejs:overlay_inputbus'
      })
      event.shaped('masterfulmachinery:assembly_machine_mk1_item_port_items_output', [
            ' S ',
            'SAS',
            ' S '
      ], {
            S: 'kubejs:blockcasing_plain',
            A: 'kubejs:overlay_outputbus'
      })
      event.shaped('masterfulmachinery:assembly_machine_mk1_energy_port_energy_input', [
            ' S ',
            'SAS',
            ' S '
      ], {
            S: 'kubejs:blockcasing_plain',
            A: 'kubejs:overlay_energyinputhatch'
      })
      event.shaped('masterfulmachinery:assembly_machine_mk1_spinny_port_create_rotation_input', [
            ' S ',
            'SAS',
            ' S '
      ], {
            S: 'kubejs:blockcasing_plain',
            A: 'masterfulmachinery:heterochromatic_compound_spinny_port_create_rotation_input'
      })
      
})