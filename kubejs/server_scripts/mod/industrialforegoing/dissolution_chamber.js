onEvent('recipes', (event) => {
    const mumetal = [
        'industrialforegoing:machine_frame_simple',
        'industrialforegoing:machine_frame_advanced',
        'mekanism:metallurgic_infuser',
        'mekanism:upgrade_gas',
        'mekanism:upgrade_energy',
        'mekanism:upgrade_speed',
        'mekanism:upgrade_muffling',
        'mekanism:basic_tier_installer',
        'mekanism:advanced_tier_installer',
        'mekanism:elite_tier_installer',
        'mekanism:ultimate_tier_installer',
        'extrastorage:diamond_crafter',
        'thermal:upgrade_augment_1',
        'thermal:upgrade_augment_2',
        'thermal:upgrade_augment_3',
        'thermal_extra:dragon_integral_component',
        'extendedcrafting:frame'
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output });
    });
    const recipes = [
        {
            inputs: [
                'industrialforegoing:plastic','industrialforegoing:machine_frame_pity','industrialforegoing:plastic',
                'powah:steel_energized','powah:steel_energized',
                'psi:psimetal','emendatusenigmatica:gold_gear','psi:psimetal'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 600,
            outputItem: { item: 'industrialforegoing:machine_frame_simple', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'industrialforegoing:plastic','industrialforegoing:machine_frame_simple','industrialforegoing:plastic',
                'minecraft:netherite_ingot','minecraft:netherite_ingot',
                'rainbowcompound:rainbow_compound','emendatusenigmatica:cast_iron_gear','rainbowcompound:rainbow_compound'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:machine_frame_advanced', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'powah:steel_energized','industrialforegoing:machine_frame_advanced','powah:steel_energized',
                'ironfurnaces:netherite_furnace','ironfurnaces:netherite_furnace',
                'powah:steel_energized','ironfurnaces:netherite_furnace','powah:steel_energized'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 100,
            processingTime: 100,
            outputItem: { item: 'mekanism:metallurgic_infuser', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'pneumaticcraft:volume_upgrade','emendatusenigmatica:cobalt_ingot','pneumaticcraft:volume_upgrade',
                'emendatusenigmatica:lithium_dust','emendatusenigmatica:lithium_dust',
                'pneumaticcraft:volume_upgrade','pneumaticcraft:upgrade_matrix','pneumaticcraft:volume_upgrade'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 100,
            processingTime: 100,
            outputItem: { item: 'mekanism:upgrade_gas', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'thermal:rf_coil_augment','botania:manasteel_ingot','thermal:rf_coil_augment',
                'emendatusenigmatica:lithium_dust','emendatusenigmatica:lithium_dust',
                'thermal:rf_coil_augment','pneumaticcraft:upgrade_matrix','thermal:rf_coil_augment'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 100,
            processingTime: 100,
            outputItem: { item: 'mekanism:upgrade_energy', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'pneumaticcraft:speed_upgrade','naturesaura:sky_ingot','pneumaticcraft:speed_upgrade',
                'emendatusenigmatica:lithium_dust','emendatusenigmatica:lithium_dust',
                'pneumaticcraft:speed_upgrade','pneumaticcraft:upgrade_matrix','pneumaticcraft:speed_upgrade'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 100,
            processingTime: 100,
            outputItem: { item: 'mekanism:upgrade_speed', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'modularrouters:muffler_upgrade','naturesaura:tainted_gold','modularrouters:muffler_upgrade',
                'emendatusenigmatica:lithium_dust','emendatusenigmatica:lithium_dust',
                'modularrouters:muffler_upgrade','pneumaticcraft:upgrade_matrix','modularrouters:muffler_upgrade'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 100,
            processingTime: 100,
            outputItem: { item: 'mekanism:upgrade_muffling', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'mekanism:alloy_infused','mekanism:basic_control_circuit','mekanism:alloy_infused',
                'powah:steel_energized','powah:steel_energized',
                'mekanism:alloy_infused','mekanism:basic_control_circuit','mekanism:alloy_infused'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'mekanism:basic_tier_installer', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'mekanism:alloy_infused','mekanism:advanced_control_circuit','mekanism:alloy_infused',
                'emendatusenigmatica:lithium_dust','emendatusenigmatica:lithium_dust',
                'mekanism:alloy_infused','mekanism:advanced_control_circuit','mekanism:alloy_infused'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'mekanism:advanced_tier_installer', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'mekanism:alloy_reinforced','mekanism:elite_control_circuit','mekanism:alloy_reinforced',
                'emendatusenigmatica:lithium_dust','emendatusenigmatica:lithium_dust',
                'mekanism:alloy_reinforced','mekanism:elite_control_circuit','mekanism:alloy_reinforced'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'mekanism:elite_tier_installer', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'mekanism:alloy_atomic','mekanism:ultimate_control_circuit','mekanism:alloy_atomic',
                'emendatusenigmatica:lithium_dust','emendatusenigmatica:lithium_dust',
                'mekanism:alloy_atomic','mekanism:ultimate_control_circuit','mekanism:alloy_atomic'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'mekanism:ultimate_tier_installer', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'powah:crystal_niotic','extrastorage:gold_crafter','powah:crystal_niotic',
                'extrastorage:neural_processor','extrastorage:neural_processor',
                'powah:crystal_niotic','ironchest:diamond_chest','powah:crystal_niotic'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 100,
            processingTime: 100,
            outputItem: { item: 'extrastorage:diamond_crafter', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'emendatusenigmatica:invar_ingot','thermal:energy_cell','emendatusenigmatica:invar_ingot',
                'thermal:fluid_cell','thermal:fluid_cell',
                'emendatusenigmatica:invar_ingot','thermal:energy_cell','emendatusenigmatica:invar_ingot'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'thermal:upgrade_augment_1', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'powah:steel_energized','thermal:upgrade_augment_1','powah:steel_energized',
                'emendatusenigmatica:signalum_gear','emendatusenigmatica:signalum_gear',
                'powah:steel_energized','emendatusenigmatica:signalum_gear','powah:steel_energized'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'thermal:upgrade_augment_2', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'mythicbotany:alfsteel_ingot','thermal:upgrade_augment_2','mythicbotany:alfsteel_ingot',
                'emendatusenigmatica:enderium_gear','emendatusenigmatica:enderium_gear',
                'mythicbotany:alfsteel_ingot','emendatusenigmatica:enderium_gear','mythicbotany:alfsteel_ingot'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'thermal:upgrade_augment_3', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'kubejs:high_steel_ingot','thermal:upgrade_augment_3','kubejs:high_steel_ingot',
                'thermal_extra:dragon_breath_plating','thermal_extra:dragon_breath_plating',
                'kubejs:high_steel_ingot','thermal_extra:dragon_breath_plating','kubejs:high_steel_ingot'
            ],
            inputFluid: 'astralsorcery:liquid_starlight',
            inputFluidAmount: 4000,
            processingTime: 100,
            outputItem: { item: 'thermal_extra:dragon_integral_component', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'ctiers:centrifuge_casing_tier_3','resourcefulbees:elite_centrifuge_controller','ctiers:centrifuge_casing_tier_3',
                'mekanism:basic_control_circuit','mekanism:basic_control_circuit',
                'ctiers:centrifuge_casing_tier_3','immersiveengineering:logic_circuit','ctiers:centrifuge_casing_tier_3'
            ],
            inputFluid: 'resourcefulbees:honey',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'ctiers:centrifuge_controller_tier_3', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'ctiers:centrifuge_casing_tier_4','ctiers:centrifuge_controller_tier_3','ctiers:centrifuge_casing_tier_4',
                'mekanism:advanced_control_circuit','mekanism:advanced_control_circuit',
                'ctiers:centrifuge_casing_tier_4','mekanism:advanced_control_circuit','ctiers:centrifuge_casing_tier_4'
            ],
            inputFluid: 'resourcefulbees:honey',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'ctiers:centrifuge_controller_tier_4', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'ctiers:centrifuge_casing_tier_5','ctiers:centrifuge_controller_tier_4','ctiers:centrifuge_casing_tier_5',
                'mekanism:ultimate_control_circuit','mekanism:ultimate_control_circuit',
                'ctiers:centrifuge_casing_tier_5','pneumaticcraft:advanced_pcb','ctiers:centrifuge_casing_tier_5'
            ],
            inputFluid: 'resourcefulbees:honey',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'ctiers:centrifuge_controller_tier_5', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                'extendedcrafting:black_iron_slate','thermal:enderium_glass','extendedcrafting:black_iron_slate',
                'thermal:enderium_glass','thermal:enderium_glass',
                'extendedcrafting:black_iron_slate','thermal:enderium_glass','extendedcrafting:black_iron_slate'
            ],
            inputFluid: 'kubejs:molten_black_iron',
            inputFluidAmount: 8000,
            processingTime: 100,
            outputItem: { item: 'extendedcrafting:frame', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
        },
        {
            inputs: [
                '#forge:ingots/pink_slime', // top left
                'resourcefulbees:bee_jar', // top
                '#forge:ingots/pink_slime', // top right
                'resourcefulbees:iron_honeycomb_block', // left
                'resourcefulbees:iron_honeycomb_block', // right
                'resourcefulbees:iron_honeycomb_block', // bottom left
                '#industrialforegoing:machine_frame/advanced', // bottom
                'resourcefulbees:iron_honeycomb_block' // bottom right
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 1000,
            processingTime: 600,
            outputItem: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:industrious_bee' }).toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        }
        /*
        {
            inputs: [
                '', // top left
                '', // top 
                '', // top right
                '', // left
                '', // right
                '', // bottom left
                '', // bottom
                ''  // bottom right
            ],
            inputFluid: '', // optional
            inputFluidAmount: 0, // leave at 0 for no fluid
            processingTime: 50,
            outputItem: { item: '', count: 1 },
            outputFluid: '', // optional
            outputFluidAmount: 0, // leave at 0 for no fluid
            id: ''
        }
        */
    ];
    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event
            .custom({
                type: 'industrialforegoing:dissolution_chamber',
                input: ingredients,
                inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
                processingTime: recipe.processingTime,
                output: recipe.outputItem,
                outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
            })
            //.id(recipe.id);
    });
});
