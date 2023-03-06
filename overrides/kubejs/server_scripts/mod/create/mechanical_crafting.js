onEvent('recipes', (event) => {
    event.remove({ output: 'pneumaticcraft:assembly_drill' });
    event.remove({ output: 'pneumaticcraft:assembly_laser' });
    event.remove({ output: 'pneumaticcraft:assembly_io_unit_import' });
    event.remove({ output: 'pneumaticcraft:assembly_io_unit_export' });
    event.remove({ output: 'pneumaticcraft:assembly_controller' });
    event.remove({ output: 'pneumaticcraft:assembly_platform' });
    event.remove({ output: 'pneumaticcraft:aerial_interface' });
    event.remove({ output: 'pneumaticcraft:spawner_extractor' });
    event.remove({ output: 'refinedstorage:controller' });
    const recipes = [
    {
        output: 'pneumaticcraft:assembly_drill',
        pattern: ['AAA ', 'BCCA', '  CA', 'DDED'],
        key: {
            A: 'pipez:universal_pipe',
            B: 'pneumaticcraft:drill_bit_diamond',
            C: 'pneumaticcraft:pneumatic_cylinder',
            D: 'pneumaticcraft:reinforced_stone_slab',
            E: Item.of('pneumaticcraft:air_compressor').ignoreNBT()
        },
    },
    {
        output: 'pneumaticcraft:assembly_laser',
        pattern: ['AAA ', 'BCCA', '  CA', 'DDED'],
        key: {
            A: 'pipez:universal_pipe',
            B: 'minecraft:daylight_detector',
            C: 'pneumaticcraft:pneumatic_cylinder',
            D: 'pneumaticcraft:reinforced_stone_slab',
            E: Item.of('pneumaticcraft:air_compressor').ignoreNBT()
        },
    },
    {
        output: 'pneumaticcraft:assembly_io_unit_import',
        pattern: ['AAA ', 'BCCA', '  CA', 'DDED'],
        key: {
            A: 'pipez:universal_pipe',
            B: 'create:brass_hand',
            C: 'pneumaticcraft:pneumatic_cylinder',
            D: 'pneumaticcraft:reinforced_stone_slab',
            E: Item.of('pneumaticcraft:air_compressor').ignoreNBT()
        },
    },
    /*{
        output: 'pneumaticcraft:assembly_io_unit_export',
        pattern: [' AAA', 'ACCB', 'AC  ', 'DEDD'],
        key: {
            A: 'pipez:universal_pipe',
            B: 'create:brass_hand',
            C: 'pneumaticcraft:pneumatic_cylinder',
            D: 'pneumaticcraft:reinforced_stone_slab',
            E: Item.of('pneumaticcraft:air_compressor').ignoreNBT()
        },
    },*/
    {
        output: 'pneumaticcraft:assembly_controller',
        pattern: [' AAA', 'ACCB', 'AC  ', 'DEDD'],
        key: {
            A: 'pipez:universal_pipe',
            B: 'create:brass_casing',
            C: 'pneumaticcraft:printed_circuit_board',
            D: 'pneumaticcraft:reinforced_stone_slab',
            E: Item.of('pneumaticcraft:air_compressor').ignoreNBT()
        },
    },
    {
        output: 'pneumaticcraft:assembly_platform',
        pattern: [' AA ', 'BCCB', 'DDDD'],
        key: {
            A: '#pneumaticcraft:plastic_sheets',
            B: '#forge:ingots/compressed_iron',
            C: 'pneumaticcraft:pneumatic_cylinder',
            D: 'pneumaticcraft:reinforced_stone_slab'
        },
    },]
      event.recipes.createMechanicalCrafting('refinedstorage:controller', [
        'ABCBA',
        'BDEDB',
        'CEFEC',
        'BDEDB',
        'ABCBA'
      ], {
        A: 'extrastorage:neural_processor',
        B: 'eidolon:arcane_gold_ingot',
        C: 'refinedstorage:cable',
        D: 'pneumaticcraft:pcb_blueprint',
        E: 'refinedstorage:machine_casing',
        F: 'kubejs:overlay_controller'
      }),
    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key)//.id(recipe.id);
    });
});

