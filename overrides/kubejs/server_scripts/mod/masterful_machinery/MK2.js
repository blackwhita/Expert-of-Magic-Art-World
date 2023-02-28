onEvent('recipes', (event) => {
    const mk2 = [
    'extendedcrafting:crystaltine_component', 
    'extendedcrafting:enhanced_ender_component', 
    'extendedcrafting:ender_component', 
    'extendedcrafting:elite_component', 
    'extendedcrafting:ultimate_component', 
    'extendedcrafting:basic_component', 
    'extendedcrafting:redstone_component', 
    'extendedcrafting:advanced_component',
    'rftoolscontrol:cpu_core_2000',
    'rftoolscontrol:cpu_core_1000'
    ]
    mk2.forEach((output) => {
        event.remove({ output: output });
    }); 
    const recipes = [
        //ex
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:basic_component', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:infused_iron', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'mekanismgenerators:fusion_fuel', amount: 500 }},
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } }
            ],
              ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:advanced_component', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'powah:steel_energized', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'mekanismgenerators:fusion_fuel', amount: 750 }},
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 25000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } }

            ],
              ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:elite_component', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'botania:mana_diamond', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'mekanismgenerators:fusion_fuel', amount: 1000 }},
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } }

            ],
              ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ultimate_component', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:high_steel_ingot', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'mekanismgenerators:fusion_fuel', amount: 1250 }},
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 75000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } }

            ],
              ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:redstone_component', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:redstone_ingot', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'mekanismgenerators:fusion_fuel', amount: 500 }},
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 25000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } }

            ],
              ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ender_component', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ender_ingot', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'mekanismgenerators:fusion_fuel', amount: 1500 }},
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 100000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } }

            ],
              ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:enhanced_ender_component', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:enhanced_ender_ingot', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'mekanismgenerators:fusion_fuel', amount: 2000 }},
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 200000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 2000 } }

            ],
              ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:crystaltine_component', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:crystaltine_ingot', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'mekanismgenerators:fusion_fuel', amount: 2500 }},
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 250000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 2000 } }

            ],
              ticks: 40,
        },

        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_pity', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:cast_iron_gear', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:constantan_gear', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:electrum_gear', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:invar_gear', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:compressed_stone', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } }

            ],
              ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:steel_casing', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_advanced', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:upgrade_augment_3', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:steel_ingot', count: 4 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } }
            ],
              ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'ironfurnaces:rainbow_core', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'rainbowcompound:rainbow_compound', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'ironfurnaces:rainbow_plating', count: 8 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } }
            ],
              ticks: 10,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'modularrouters:item_router', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_pity', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:cast_iron_ingot', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:alu_fence', count: 4 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } }

            ],
              ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:broken_advanced_pcb', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:printed_circuit_board', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:insulating_glass', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:high_steel_ingot', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'powah:steel_energized', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'powah:capacitor_spirited', count: 2 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } }
            ],
              ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extrastorage:gold_crafter', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extrastorage:neural_processor', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'powah:steel_energized', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'ironchest:gold_chest', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extrastorage:iron_crafter', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } }
            ],
              ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:ultimate_rune', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:asgard_rune', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:vanaheim_rune', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:alfheim_rune', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:midgard_rune', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:helheim_rune', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:nidavellir_rune', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:niflheim_rune', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:muspelheim_rune', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:joetunheim_rune', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 100000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 8000 } }
            ],
              ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:elite_control_circuit', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:broken_advanced_pcb', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } }
            ],
              ticks: 10,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:unassembled_pcb', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:empty_pcb', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 1000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 100 } }
            ],
              ticks: 5,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:advanced_pressure_tube', count: 8 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:compressed_iron_block', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 1000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 100 } }
            ],
              ticks: 5,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'dankstorage:dank_6', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:alloy_atomic', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'dankstorage:dank_1', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 100000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 5000 } }
            ],
              ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'tanknull:tank_6', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:alloy_atomic', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'tanknull:tank_1', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 100000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 5000 } }
            ],
              ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'tanknull:tank_5', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:alloy_infused', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'tanknull:tank_1', count: 1 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } }
            ],
              ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'dankstorage:dank_5', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:alloy_infused', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'dankstorage:dank_1', count: 1 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 1000 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } }
            ],
              ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'rftoolscontrol:cpu_core_1000', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { tag: 'forge:plates/enderium', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'rftoolscontrol:cpu_core_500', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:advanced_pcb', count: 4 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:gems/dimensional', count: 8 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'immersivepetroleum:lubricant', amount: 8000 }},
                { type: 'masterfulmachinery:astral_starlight', perTick: false, data: { amount: 4000 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 100000 } }
            ],
              ticks: 20,
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'assembly_machine_mk2_1';
        recipe.controllerId = 'assembly_machine_mk2';
        event.custom(recipe);
    });
});