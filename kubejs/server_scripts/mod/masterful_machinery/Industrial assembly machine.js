onEvent('recipes', (event) => {
    const industrial_assembly_machine = [
        'industrialforegoing:machine_frame_supreme'
    ]
    industrial_assembly_machine.forEach((output) => {
        event.remove({ output: output });
    });

    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_advanced', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_pity', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:gold_gear', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'psi:psimetal', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'powah:steel_energized', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:cast_iron_gear', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'rainbowcompound:rainbow_compound', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:netherite_ingot', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:plastic', count: 8 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'industrialforegoing:ether_gas', amount: 8000 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 1000000 } }
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'thermal:upgrade_augment_3', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'powah:steel_energized', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:invar_ingot', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:alfsteel_ingot', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:enderium_gear', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:signalum_gear', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:fluid_cell', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:energy_cell', count: 2 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'industrialforegoing:ether_gas', amount: 8000 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 100000 } }
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'tanknull:tank_7', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mekanismmatter:universal_matter', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'tanknull:tank_1', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'immersivepetroleum:lubricant', amount: 8000 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 1000000 } }
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'dankstorage:dank_7', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mekanismmatter:universal_matter', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'dankstorage:dank_1', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'immersivepetroleum:lubricant', amount: 8000 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 1000000 } }
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:creative_catalyst', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:basic_catalyst', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ultimate_catalyst', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:advanced_catalyst', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:crystaltine_catalyst', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:elite_catalyst', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ender_catalyst', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:enhanced_ender_catalyst', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:redstone_catalyst', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:the_ultimate_catalyst', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'industrialforegoing:essence', amount: 100000 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000000 } }
            ],
            ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'create:creative_motor', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'create:windmill_bearing', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'steampowered:steel_flywheel', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'steampowered:cast_iron_flywheel', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'steampowered:bronze_flywheel', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'steampowered:steel_steam_engine', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'steampowered:cast_iron_steam_engine', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'steampowered:bronze_steam_engine', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:water_wheel', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:the_ultimate_ingot', count: 8 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 80000000 } }
            ],
            ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'rftoolscontrol:cpu_core_2000', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:etherealslate', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_advanced', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'rftoolscontrol:cpu_core_1000', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'resourcefulbees:starry_honey', amount: 10000 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 1000000 } }
            ],
            ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_supreme', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mekanismmatter:universal_matter', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismmatter:trinium_ingot', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:demonslate', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:novaextended-ark_circuit-layer0', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:steel_casing', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'immersivepetroleum:lubricant', amount: 8000 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 1000000 } }
            ],
            ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'powah:crystal_nitro', count: 16 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:nether_star', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'resourcefulbees:nether_honeycomb', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:netherite_scrap', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:shadow_gem', count: 2 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 200000000 } }
            ],
            ticks: 20,
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'industrial_assembly_machine_1';
        recipe.controllerId = 'industrial_assembly_machine';
        event.custom(recipe)//.id(recipe.id);
    });
});