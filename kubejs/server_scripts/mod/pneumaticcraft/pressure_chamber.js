onEvent('recipes', (event) => {
    const mumetal = [
        'ars_nouveau:mana_jar',
        'ars_nouveau:arcane_relay',

        'resourcefulbees:apiary_breeder',

        'eidolon:stone_hand',
        'eidolon:crucible',

        'powah:photoelectric_pane',

        'pneumaticcraft:air_canister',

        'refinedstorage:raw_basic_processor', 
        'extrastorage:raw_neural_processor', 
        'refinedstorage:raw_advanced_processor', 
        'refinedstorage:raw_improved_processor'
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output });
    }); 

    const recipes = [
        {
            inputs: [
                { item: 'create:fluid_tank', count: 1 },
                { item: 'emendatusenigmatica:arcane_block', count: 1 },
                { item: 'create:refined_radiance', count: 1 },
                { item: 'create:shadow_steel', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'ars_nouveau:mana_jar', count: 1 }],
        },
        {
            inputs: [
                { item: 'powah:blank_card', count: 1 },
                { tag: 'mekanism:enriched/redstone', count: 1 },
                { item: 'powah:ender_core', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'powah:binding_card', count: 1 }],
        },
        {
            inputs: [
                { tag: 'forge:alloys/ultimate', count: 1 },
                { item: 'powah:dielectric_paste', count: 1 },
                { item: 'rftoolsbase:infused_enderpearl', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'powah:aerial_pearl', count: 1 }],
        },
        {
            inputs: [
                { item: 'emendatusenigmatica:arcane_gem', count: 8 },
                { item: 'pneumaticcraft:pressure_tube', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'ars_nouveau:arcane_relay', count: 1 }],
        },
        {
            inputs: [
                { item: 'resourcefulbees:bee_jar', count: 16 },
                { item: 'dankstorage:dock', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'resourcefulbees:apiary_breeder', count: 1 }],
        },
        {
            inputs: [
                { item: 'metalbarrels:diamond_barrel', count: 1 },
                { tag: 'forge:chests', count: 1 },
                { item: 'kubejs:blockcasing_plain', count: 1 },
            ],
            pressure: 4.0,
            results: [{ item: 'kubejs:overlay_outputbus', count: 1 }],
        },
        {
            inputs: [
                { item: 'metalbarrels:diamond_barrel', count: 1 },
                { item: 'minecraft:hopper', count: 1 },
                { item: 'kubejs:blockcasing_plain', count: 1 },
            ],
            pressure: 4.0,
            results: [{ item: 'kubejs:overlay_inputbus', count: 1 }],
        },
        {
            inputs: [
                { tag: 'forge:chests', count: 1 },
                { item: 'create:fluid_tank', count: 1 },
                { item: 'kubejs:blockcasing_plain', count: 1 },
            ],
            pressure: 4.0,
            results: [{ item: 'kubejs:overlay_fluidoutputhatch', count: 1 }],
        },
        {
            inputs: [
                { item: 'minecraft:hopper', count: 1 },
                { item: 'create:fluid_tank', count: 1 },
                { item: 'kubejs:blockcasing_plain', count: 1 },
            ],
            pressure: 4.0,
            results: [{ item: 'kubejs:overlay_fluidinputhatch', count: 1 }],
        },
        {
            inputs: [
                { item: 'createaddition:overcharged_alloy', count: 1 },
                { tag: 'forge:chests', count: 1 },
                { item: 'kubejs:blockcasing_plain', count: 1 },
            ],
            pressure: 4.0,
            results: [{ item: 'kubejs:overlay_energyoutputhatch', count: 1 }],
        },
        {
            inputs: [
                { item: 'createaddition:overcharged_alloy', count: 1 },
                { item: 'minecraft:hopper', count: 1 },
                { item: 'kubejs:blockcasing_plain', count: 1 },
            ],
            pressure: 4.0,
            results: [{ item: 'kubejs:overlay_energyinputhatch', count: 1 }],
        },
        {
            inputs: [
                { item: 'pneumaticcraft:compressed_stone_slab', count: 3 },
                { item: 'pneumaticcraft:compressed_bricks', count: 2 },
            ],
            pressure: 4.0,
            results: [{ item: 'eidolon:stone_hand', count: 1 }],
        },
        {
            inputs: [
                { item: 'pneumaticcraft:ingot_iron_compressed', count: 7 },
                { item: 'minecraft:cauldron', count: 1 },
            ],
            pressure: 4.0,
            results: [{ item: 'eidolon:crucible', count: 1 }],
        },
        //powah
        {
            inputs: [
                { item: 'powah:capacitor_basic', count: 1 },
                { item: 'createaddition:overcharged_alloy', count: 1 },
                { item: 'torchmaster:feral_flare_lantern', count: 1 },
                { item: 'resourcefulbees:starry_honey_bottle', count: 4 },
            ],
            pressure: 4.0,
            results: [{ item: 'powah:photoelectric_pane', count: 1 }],
        },
        //kjs
        {
            inputs: [
                { item: 'pneumaticcraft:ingot_iron_compressed', count: 1 },
                { item: 'minecraft:blue_ice', count: 4 },
            ],
            pressure: 4.0,
            results: [{ item: 'rainbowcompound:frostite_ingot', count: 1 }],
        },
        {
            inputs: [
                { item: 'pneumaticcraft:pressure_chamber_valve', count: 1 },
                { item: 'pneumaticcraft:pressure_chamber_interface', count: 1 },
                { item: 'kubejs:blockcasing_plain', count: 4 },
                { item: 'pneumaticcraft:volume_upgrade', count: 2 },
                { item: 'pneumaticcraft:pressure_chamber_wall', count: 4 },

            ],
            pressure: 4.0,
            results: [{ item: 'masterfulmachinery:assembly_machine_mk1_high_pressure_port_pncr_pressure_input', count: 1 }],
        },
        //pneu
        {
            inputs: [
                { item: 'pneumaticcraft:pressure_tube', count: 1 },
                { item: 'pneumaticcraft:ingot_iron_compressed', count: 4 },
                { item: 'minecraft:redstone', count: 2 },

            ],
            pressure: 4.0,
            results: [{ item: 'pneumaticcraft:air_canister', count: 1 }],
        },
        //REF
        {
            inputs: [
                { item: 'refinedstorage:processor_binding', count: 1 },
                { item: 'emendatusenigmatica:silicon_gem', count: 1 },
                { item: 'extendedcrafting:redstone_ingot', count: 1 },
                { item: 'thermal:gold_coin', count: 1 }

            ],
            pressure: 4.0,
            results: [{ item: 'refinedstorage:raw_improved_processor', count: 1 }],
        },
        {
            inputs: [
                { item: 'refinedstorage:processor_binding', count: 1 },
                { item: 'emendatusenigmatica:silicon_gem', count: 1 },
                { item: 'extendedcrafting:redstone_ingot', count: 1 },
                { item: 'thermal:iron_coin', count: 1 }

            ],
            pressure: 4.0,
            results: [{ item: 'refinedstorage:raw_basic_processor', count: 1 }],
        },
        {
            inputs: [
                { item: 'refinedstorage:processor_binding', count: 1 },
                { item: 'emendatusenigmatica:silicon_gem', count: 1 },
                { item: 'extendedcrafting:redstone_ingot', count: 1 },
                { item: 'thermal:lumium_coin', count: 1 }

            ],
            pressure: 4.0,
            results: [{ item: 'refinedstorage:raw_advanced_processor', count: 1 }],
        },
        {
            inputs: [
                { item: 'refinedstorage:processor_binding', count: 1 },
                { item: 'emendatusenigmatica:silicon_gem', count: 1 },
                { item: 'extendedcrafting:redstone_ingot', count: 1 },
                { item: 'ars_nouveau:wixie_charm', count: 1 }

            ],
            pressure: 4.0,
            results: [{ item: 'extrastorage:raw_neural_processor', count: 1 }],
        },
        {
            inputs: [
                { item: 'pneumaticcraft:printed_circuit_board', count: 8 },
                { item: 'immersiveengineering:circuit_board', count: 2 },
                { item: 'thermal:enderium_glass', count: 4 },
                { tag: 'forge:plates/iron', count: 2 },
                { item: 'modularrouters:augment_core', count: 4 },
                { tag: 'forge:wires/electrum', count: 8 },

            ],
            pressure: 4.0,
            results: [{ item: 'rftoolscontrol:card_base', count: 3 }],
        },
        {
            inputs: [
                { item: 'extendedcrafting:the_ultimate_ingot', count: 8 },
                { item: 'pneumaticcraft:advanced_pressure_tube', count: 64 },
                { item: 'pneumaticcraft:advanced_liquid_compressor', count: 8 },
                { item: 'pneumaticcraft:advanced_air_compressor', count: 8 },
                { item: 'pneumaticcraft:pneumatic_dynamo', count: 8 },
                { item: 'pneumaticcraft:pressure_gauge', count: 8 }

            ],
            pressure: 5.0,
            results: [{ item: 'pneumaticcraft:creative_compressed_iron_block', count: 1 }],
        },
        {
            inputs: [
                { item: 'extendedcrafting:the_ultimate_ingot', count: 32 },
                { item: 'extendedcrafting:ultimate_singularity', count: 8 },
                { item: 'pneumaticcraft:creative_compressed_iron_block', count: 8 }

            ],
            pressure: 5.0,
            results: [{ item: 'pneumaticcraft:creative_compressor', count: 1 }],
        },
        /*{
            inputs: [
                Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }).weakNBT().toJson(),
            ],
            pressure: 4.0,
            results: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:compressed_iron_bee' }).toResultJson()],
        },*/
    ];

    powahTiers.forEach(function (tier) {
        if (tier == 'starter') {
            return;
        }
        let capacitor = `powah:capacitor_${tier}`;

        if (tier == 'basic') {
            capacitor = `powah:capacitor_${tier}_large`;
        } else if (tier == 'hardened') {
            crystal = 'powah:steel_energized';
        }

        // let lower_tiers = lowerTiers(powahTiers, tier);

        // Primary Craft
        recipes.push({
            inputs: [
                { item: 'powah:blank_card', count: 1 },
                { item: 'powah:dielectric_paste', count: 1 },
                { item: capacitor, count: 2 },
                { item: 'powah:ender_core', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: `powah:ender_gate_${tier}`, count: 1 }],
        });

        // Disassemble Craft
        if (tier != 'basic') {
            recipes.push({
                inputs: [{ item: `powah:reactor_${tier}`, count: 36 }],
                pressure: -0.9,
                results: [
                    { item: `powah:thermo_generator_${tier}`, count: 3 },
                    { item: `powah:energy_cell_${tier}`, count: 2 },
                    { item: `powah:furnator_${tier}`, count: 1 }
                ],
            });
        }
    });

    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item';
            ingredients.push(input);
        });

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: ingredients,
                pressure: recipe.pressure,
                results: recipe.results
            })
    });
});
