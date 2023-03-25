onEvent('recipes', event => {
      event.remove({ output: 'pneumaticcraft:liquid_compressor' });
      event.shaped('pneumaticcraft:liquid_compressor', [
            'CDC',
            'CAC',
            'CBC'
      ], {
            A: 'naturesaura:color_changer',
            B: 'create:brass_casing',
            C: 'pneumaticcraft:ingot_iron_compressed',
            D: 'create:spout'
      })

      event.remove({ output: 'pneumaticcraft:air_compressor' });
      event.shaped('pneumaticcraft:air_compressor', [
            'CDC',
            'CAC',
            'CBC'
      ], {
            A: 'naturesaura:aura_timer',
            B: 'create:brass_casing',
            C: 'pneumaticcraft:ingot_iron_compressed',
            D: 'create:encased_fan'
      })

      event.remove({ output: 'pneumaticcraft:refinery' });
      event.shaped('pneumaticcraft:refinery', [
            'CDC',
            'CAC',
            'CBC'
      ], {
            A: 'createaddition:seed_oil_bucket',
            B: 'create:copper_casing',
            C: 'pneumaticcraft:ingot_iron_compressed',
            D: 'create:hose_pulley'
      })

      event.remove({ output: 'pneumaticcraft:refinery_output' });
      event.shaped('pneumaticcraft:refinery_output', [
            'CDC',
            'CAC',
            'CBC'
      ], {
            A: 'createaddition:seed_oil_bucket',
            B: 'create:copper_casing',
            C: 'pneumaticcraft:ingot_iron_compressed',
            D: 'create:spout'
      })

      event.remove({ output: 'pneumaticcraft:fluid_mixer' });
      event.shaped('pneumaticcraft:fluid_mixer', [
            'CDC',
            'CAC',
            'CBC'
      ], {
            A: 'create:mechanical_mixer',
            B: 'create:copper_casing',
            C: 'pneumaticcraft:ingot_iron_compressed',
            D: 'create:spout'
      })

      event.remove({ output: 'pneumaticcraft:thermopneumatic_processing_plant' });
      event.shaped('pneumaticcraft:thermopneumatic_processing_plant', [
            'CDC',
            'CAC',
            'CBC'
      ], {
            A: 'create:portable_fluid_interface',
            B: 'create:copper_casing',
            C: 'pneumaticcraft:ingot_iron_compressed',
            D: 'create:spout'
      })

      event.remove({ output: 'pneumaticcraft:vortex_tube' });
      event.shaped('pneumaticcraft:vortex_tube', [
            'CDC',
            'CAC',
            'CBC'
      ], {
            A: 'create:nozzle',
            B: 'create:copper_casing',
            C: 'pneumaticcraft:ingot_iron_compressed',
            D: 'create:blaze_burner'
      })

      event.remove({ output: 'pneumaticcraft:advanced_air_compressor' });
      event.shaped('pneumaticcraft:advanced_air_compressor', [
            'CCC',
            'CAD',
            'CBC'
      ], {
            A: 'createaddition:overcharged_casing',
            B: 'pneumaticcraft:air_compressor',
            C: 'create:chromatic_compound',
            D: 'pneumaticcraft:advanced_pressure_tube'
      })

      event.remove({ output: 'pneumaticcraft:advanced_liquid_compressor' });
      event.shaped('pneumaticcraft:advanced_liquid_compressor', [
            'CCC',
            'CAD',
            'CBC'
      ], {
            A: 'createaddition:overcharged_casing',
            B: 'pneumaticcraft:liquid_compressor',
            C: 'create:chromatic_compound',
            D: 'pneumaticcraft:advanced_pressure_tube'
      })

      event.remove({ output: 'pneumaticcraft:pneumatic_dynamo' });
      event.shaped('pneumaticcraft:pneumatic_dynamo', [
            ' D ',
            'CAC',
            'CBC'
      ], {
            A: 'createaddition:overcharged_casing',
            B: 'pneumaticcraft:printed_circuit_board',
            C: 'createaddition:overcharged_alloy',
            D: 'pneumaticcraft:advanced_pressure_tube'
      })

      event.remove({ output: 'pneumaticcraft:amadron_tablet' });
      event.shaped('pneumaticcraft:amadron_tablet', [
            'AAA',
            'ABA',
            'ACA'
      ], {
            A: '#forge:glass_panes',
            B: 'pneumaticcraft:compressed_iron_gear',
            C: 'pneumaticcraft:air_canister'
      })

      event.shapeless('4x minecraft:cobblestone', ['minecraft:stone', '#forge:dusts/glowstone'])
      event.shapeless('pneumaticcraft:assembly_io_unit_export', ['pneumaticcraft:assembly_io_unit_import'])
      event.shapeless('pneumaticcraft:assembly_io_unit_import', ['pneumaticcraft:assembly_io_unit_export'])
      event.shapeless('9x pneumaticcraft:ingot_iron_compressed', ['pneumaticcraft:compressed_iron_block'])
      event.shapeless('3x eomaw:ingot_iron_compressed_mould', ['naturesaura:infused_iron', 'naturesaura:tainted_gold', 'create:andesite_alloy'])

      event.remove({ output: 'pneumaticcraft:speed_upgrade' });
      event.shaped('4x pneumaticcraft:speed_upgrade', ['ABA', 'BCB', 'ABA'], {
            A: 'pneumaticcraft:upgrade_matrix',
            B: 'pneumaticcraft:glycerol',
            C: {
                  type: 'pneumaticcraft:fluid',
                  tag: 'forge:lubricant',
                  amount: 1000
            }
      })
})//