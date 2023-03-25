onEvent('recipes', (event) => {
    const recipes = [
        /// Starlight Crafting Altar Recipes
        {
            output: Item.of('astralsorcery:altar_constellation', 1),
            pattern: ['A___A', '_BCB_', '_DED_', '_FGF_', 'H___H'],
            key: {
                A: { item: 'astralsorcery:stardust' },
                B: { item: 'astralsorcery:aquamarine' },
                C: { type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: false,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true },
                D: { item: 'botania:corporea_block' },
                E: { item: 'astralsorcery:starmetal_ingot' },
                F: { item: 'botania:shimmerrock' },
                G: { item: 'bloodmagic:defaultcrystal' },
                H: { item: 'bloodmagic:largebloodstonebrick' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1400,
            recipe_class: 'astralsorcery:constellation_upgrade',
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:upgrade_altar',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id:'astralsorcery:altar/altar_constellation'
        },
        {
            output: Item.of('astralsorcery:ritual_pedestal', 1),
            pattern: ['A___A', '_BCB_', '_BDB_', '_BEB_', 'F___F'],
            key: {
                A: { item: 'powah:steel_energized' },
                B: { item: 'ars_nouveau:warding_stone' },
                C: { type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: false,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true },
                D: { item: 'ars_nouveau:ritual' },
                E: { type: 'astralsorcery:fluid', fluid: [{ fluid: 'astralsorcery:liquid_starlight', amount: 1000 }]},
                F: { item: 'astralsorcery:marble_pillar' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1400,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id:'astralsorcery:altar/ritual_pedestal'
        },
        {
            output: Item.of('astralsorcery:telescope', 1),
            pattern: ['_____', '__A__', '_BCB_', '_DDD_', '_____'],
            key: {
                A: { item: 'astralsorcery:hand_telescope' },
                B: { item: 'powah:steel_energized' },
                C: { item: 'astralsorcery:glass_lens' },
                D: { item: 'integrateddynamics:menril_log_filled' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1600,
            effects: [
                "astralsorcery:built_in_effect_discovery_central_beam",
                "astralsorcery:built_in_effect_attunement_sparkle"
            ],
            id:'astralsorcery:altar/telescope'
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
