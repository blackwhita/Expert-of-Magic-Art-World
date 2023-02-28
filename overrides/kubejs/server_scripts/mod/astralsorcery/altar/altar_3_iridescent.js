onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('astralsorcery:chalice', 1),
            pattern: ['_____', 'ABBBA', 'ACDCA', '_EFE_', 'GHGHG'],
            key: {
                A: { item: 'astralsorcery:resonating_gem' },
                B: { type: 'astralsorcery:fluid', fluid: [{ fluid: 'astralsorcery:liquid_starlight', amount: 1000 }]},
                C: { item: 'astralsorcery:infused_wood' },
                D: { item: 'astralsorcery:black_marble_chiseled' },
                E: { item: 'astralsorcery:starmetal_ingot' },
                F: { item: 'eidolon:goblet' },
                G: { item: 'emendatusenigmatica:brass_ingot' },
                H: { item: 'astralsorcery:infused_wood' }
            },
            relay_inputs: [
                { item: 'astralsorcery:shifting_star' },
                { item: 'astralsorcery:shifting_star' },
                { item: 'astralsorcery:shifting_star' },
                { item: 'astralsorcery:shifting_star' },
                { item: 'astralsorcery:shifting_star' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 7000,
            focus_constellation: 'astralsorcery:lucerna',
            effects: [
                "astralsorcery:built_in_effect_constellation_finish",
                "astralsorcery:built_in_effect_trait_relay_highlight",
                "astralsorcery:built_in_effect_discovery_central_beam",
                "astralsorcery:built_in_effect_trait_focus_circle",
                "astralsorcery:altar_default_sparkle",
                "astralsorcery:built_in_effect_constellation_lines",
                "astralsorcery:built_in_effect_attunement_sparkle"
            ],
            id: 'astralsorcery:altar/chalice'
        },
        {
            output: Item.of('astralsorcery:observatory', 1),
            pattern: ['__ABC', '_ABDB', 'ABCBA', 'EFBA_', 'EEEGG'],
            key: {
                A: { item: 'botania:terrasteel_nugget' },
                B: { item: 'astralsorcery:infused_wood_infused' },
                C: { item: 'astralsorcery:glass_lens' },
                D: { item: 'astralsorcery:infused_glass' },
                E: { item: 'powah:steel_energized' },
                F: { item: 'astralsorcery:telescope' },
                G: { item: 'kubejs:high_steel_ingot' }
            },
            relay_inputs: [
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:nocturnal_powder' },
                { item: 'astralsorcery:nocturnal_powder' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:illumination_powder' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 7000,
            focus_constellation: 'astralsorcery:lucerna',
            effects: [
                "astralsorcery:built_in_effect_constellation_finish",
                "astralsorcery:built_in_effect_trait_relay_highlight",
                "astralsorcery:built_in_effect_discovery_central_beam",
                "astralsorcery:built_in_effect_trait_focus_circle",
                "astralsorcery:altar_default_sparkle",
                "astralsorcery:built_in_effect_constellation_lines",
                "astralsorcery:built_in_effect_attunement_sparkle"
            ],
            id: 'astralsorcery:altar/observatory'
        },
        {
            output: Item.of('extrastorage:netherite_crafter', 1),
            pattern: ['ABBBA', 'BCDCB', 'BDEDB', 'BCDCB', 'ABBBA'],
            key: {
                A: { item: 'extrastorage:diamond_crafter' },
                B: { item: 'kubejs:high_steel_ingot' },
                C: { item: 'pneumaticcraft:advanced_pcb' },
                D: { item: 'mythicbotany:alfsteel_ingot' },
                E: { item: 'industrialforegoing:machine_frame_advanced' }
            },
            relay_inputs: [
                { item: 'thermal:netherite_plate' },
                { item: 'thermal:netherite_plate' },
                { item: 'thermal:netherite_plate' },
                { item: 'thermal:netherite_plate' },
                { item: 'thermal:netherite_plate' },
                { item: 'thermal:netherite_plate' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 7000,
            focus_constellation: 'astralsorcery:horologium',
            effects: [
                "astralsorcery:built_in_effect_constellation_finish",
                "astralsorcery:built_in_effect_trait_relay_highlight",
                "astralsorcery:built_in_effect_discovery_central_beam",
                "astralsorcery:built_in_effect_trait_focus_circle",
                "astralsorcery:altar_default_sparkle",
                "astralsorcery:built_in_effect_constellation_lines",
                "astralsorcery:built_in_effect_attunement_sparkle"
            ],
            id: 'astralsorcery:altar/netherite_crafter'
        },
        {
            output: Item.of('masterfulmachinery:blast_starlight_controller', 1),
            pattern: ['ABCBA', 'DEFED', 'GFHFG', 'DEFED', 'AIJIA'],
            key: {
                A: { item: 'pneumaticcraft:advanced_pcb' },
                B: { item: 'mekanism:elite_control_circuit' },
                C: { item: 'kubejs:omniscient_lens' },
                D: { item: 'kubejs:high_steel_ingot' },
                E: { item: 'astralsorcery:resonating_gem' },
                F: { item: 'astralsorcery:starmetal_ingot' },
                G: { item: 'occultism:otherstone_frame' },
                H: { item: 'kubejs:overlay_controller' },
                I: { item: 'refinedstorage:advanced_processor' },
                J: { item: 'industrialforegoing:machine_frame_advanced' }
            },
            relay_inputs: [
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 7000,
            focus_constellation: 'astralsorcery:fornax',
            effects: [
                "astralsorcery:built_in_effect_constellation_finish",
                "astralsorcery:built_in_effect_trait_relay_highlight",
                "astralsorcery:built_in_effect_discovery_central_beam",
                "astralsorcery:built_in_effect_trait_focus_circle",
                "astralsorcery:altar_default_sparkle",
                "astralsorcery:built_in_effect_constellation_lines",
                "astralsorcery:built_in_effect_attunement_sparkle"
            ],
            id: 'astralsorcery:altar/blast_starlight_controller'
        },
        {
            output: Item.of('masterfulmachinery:blast_starlight_starlight_port_astral_starlight_input', 1),
            pattern: ['__A__', '_BCB_', 'DCECD', '_BCB_', '__D__'],
            key: {
                A: { item: 'kubejs:omniscient_lens'},
                B: { item: 'astralsorcery:starmetal_ingot' },
                C: { item: 'astralsorcery:resonating_gem' },
                D: { type: 'astralsorcery:fluid',fluid: [{ fluid: 'astralsorcery:liquid_starlight', amount: 1000 }]},
                E: { item: 'kubejs:overlay_firebox' },
            },
            relay_inputs: [
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 700,
            focus_constellation: 'astralsorcery:fornax',
            effects: [
                "astralsorcery:built_in_effect_constellation_finish",
                "astralsorcery:built_in_effect_trait_relay_highlight",
                "astralsorcery:built_in_effect_discovery_central_beam",
                "astralsorcery:built_in_effect_trait_focus_circle",
                "astralsorcery:altar_default_sparkle",
                "astralsorcery:built_in_effect_constellation_lines",
                "astralsorcery:built_in_effect_attunement_sparkle"
            ],
            id: 'astralsorcery:altar/blast_starlight_starlight_port_astral_starlight_input'
        },
        {
            output: Item.of('masterfulmachinery:blast_starlight_item_port_items_input', 1),
            pattern: ['__A__', '_BCB_', 'DCECD', '_BCB_', '__D__'],
            key: {
                A: { item: 'pneumaticcraft:advanced_pcb'},
                B: { item: 'astralsorcery:starmetal_ingot' },
                C: { item: 'astralsorcery:resonating_gem' },
                D: { type: 'astralsorcery:fluid',fluid: [{ fluid: 'astralsorcery:liquid_starlight', amount: 1000 }]},
                E: { item: 'kubejs:overlay_inputbus' },
            },
            relay_inputs: [
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 700,
            focus_constellation: 'astralsorcery:fornax',
            effects: [
                "astralsorcery:built_in_effect_constellation_finish",
                "astralsorcery:built_in_effect_trait_relay_highlight",
                "astralsorcery:built_in_effect_discovery_central_beam",
                "astralsorcery:built_in_effect_trait_focus_circle",
                "astralsorcery:altar_default_sparkle",
                "astralsorcery:built_in_effect_constellation_lines",
                "astralsorcery:built_in_effect_attunement_sparkle"
            ],
            id: 'astralsorcery:altar/blast_starlight_item_port_items_input'
        },
        {
            output: Item.of('masterfulmachinery:blast_starlight_item_port_items_output', 1),
            pattern: ['__A__', '_BCB_', 'DCECD', '_BCB_', '__D__'],
            key: {
                A: { item: 'pneumaticcraft:advanced_pcb'},
                B: { item: 'astralsorcery:starmetal_ingot' },
                C: { item: 'astralsorcery:resonating_gem' },
                D: { type: 'astralsorcery:fluid',fluid: [{ fluid: 'astralsorcery:liquid_starlight', amount: 1000 }]},
                E: { item: 'kubejs:overlay_outputbus' },
            },
            relay_inputs: [
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 700,
            focus_constellation: 'astralsorcery:fornax',
            effects: [
                "astralsorcery:built_in_effect_constellation_finish",
                "astralsorcery:built_in_effect_trait_relay_highlight",
                "astralsorcery:built_in_effect_discovery_central_beam",
                "astralsorcery:built_in_effect_trait_focus_circle",
                "astralsorcery:altar_default_sparkle",
                "astralsorcery:built_in_effect_constellation_lines",
                "astralsorcery:built_in_effect_attunement_sparkle"
            ],
            id: 'astralsorcery:altar/blast_starlight_item_port_items_output'
        },
        {
            output: Item.of('masterfulmachinery:blast_starlight_fluid_port_fluids_input', 1),
            pattern: ['__A__', '_BCB_', 'DCECD', '_BCB_', '__D__'],
            key: {
                A: { item: 'pneumaticcraft:advanced_pcb'},
                B: { item: 'astralsorcery:starmetal_ingot' },
                C: { item: 'astralsorcery:resonating_gem' },
                D: { type: 'astralsorcery:fluid',fluid: [{ fluid: 'astralsorcery:liquid_starlight', amount: 1000 }]},
                E: { item: 'kubejs:overlay_fluidinputhatch' },
            },
            relay_inputs: [
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:stardust' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 700,
            focus_constellation: 'astralsorcery:fornax',
            effects: [
                "astralsorcery:built_in_effect_constellation_finish",
                "astralsorcery:built_in_effect_trait_relay_highlight",
                "astralsorcery:built_in_effect_discovery_central_beam",
                "astralsorcery:built_in_effect_trait_focus_circle",
                "astralsorcery:altar_default_sparkle",
                "astralsorcery:built_in_effect_constellation_lines",
                "astralsorcery:built_in_effect_attunement_sparkle"
            ],
            id: 'astralsorcery:altar/blast_starlight_fluid_port_fluids_input'
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'astralsorcery:altar',
            altar_type: recipe.altar_type,
            duration: recipe.duration,
            starlight: recipe.starlight,
            pattern: recipe.pattern,
            key: recipe.key,
            output: [recipe.output.toResultJson()],
            effects: recipe.effects
        };

        if (recipe.relay_inputs) {
            constructed_recipe.relay_inputs = recipe.relay_inputs;
        }
        if (recipe.focus_constellation) {
            constructed_recipe.focus_constellation = recipe.focus_constellation;
        }
        if (recipe.recipe_class) {
            constructed_recipe.recipe_class = recipe.recipe_class;
        }

        event.custom(constructed_recipe).id(recipe.id);
    });
});