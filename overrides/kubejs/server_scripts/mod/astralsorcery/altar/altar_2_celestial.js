onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('astralsorcery:altar_radiance', 1),
            pattern: ['AA_AA', 'BACAB', '_DEF_', 'BAGAB', 'AA_AA'],
            key: {
                A: { item: 'resourcefulbees:marble_honeycomb' },
                B: { item: 'astralsorcery:resonating_gem' },
                C: { item: 'kubejs:omniscient_lens' },
                D: { item: 'create:refined_radiance_casing' },
                E: { 
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: true,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                },
                F: { item: 'create:shadow_steel_casing' },
                G: { item: 'kubejs:ultimate_rune' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 3500,
            recipe_class: 'astralsorcery:trait_upgrade',
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:pillar_sparkle',
                'astralsorcery:luminescence_flare',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:upgrade_altar',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/altar_radiance'
        },
        {
            output: Item.of('kubejs:omniscient_lens', 1),
            pattern: ['A___B', '__C__', '_DIE_', '__F__', 'G___H'],
            key: {
                A: { item: 'astralsorcery:colored_lens_growth' },
                B: { item: 'astralsorcery:colored_lens_push' },
                C: { item: 'astralsorcery:colored_lens_break' },
                D: { item: 'astralsorcery:colored_lens_damage' },
                E: { item: 'astralsorcery:colored_lens_regeneration' },
                F: { item: 'astralsorcery:glass_lens'},
                G: { item: 'astralsorcery:colored_lens_fire' },
                H: { item: 'astralsorcery:colored_lens_spectral' },
                I: { item: 'botania:mana_glass' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 3500,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:pillar_sparkle',
                'astralsorcery:luminescence_flare',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:upgrade_altar',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],           
        },
        {
            output: Item.of('astralsorcery:infuser', 1),
            pattern: ['AB_BA', 'CDEDC', '_FGF_', 'HIJKH', 'OF_FO'],
            key: {
                A: { item: 'astralsorcery:marble_chiseled' },
                B: { item: 'astralsorcery:marble_runed' },
                C: { item: 'mythicbotany:joetunheim_rune' },
                D: { item: 'astralsorcery:aquamarine' },
                E: { item: 'astralsorcery:starmetal_ingot' },
                F: { item: 'powah:steel_energized' },
                G: { type: 'astralsorcery:fluid', fluid: [{ fluid: 'astralsorcery:liquid_starlight', amount: 1000 }]},
                H: { item: 'astralsorcery:marble_pillar' },
                I: { item: 'ars_nouveau:ritual_warping' },
                J: { item: 'ars_nouveau:wilden_tribute' },
                K: { item: 'ars_nouveau:ritual_moonfall' },
                O: { item: 'botania:mana_glass' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 2400,
            effects: [
                "astralsorcery:built_in_effect_constellation_finish",
                "astralsorcery:built_in_effect_discovery_central_beam",
                "astralsorcery:altar_default_sparkle",
                "astralsorcery:built_in_effect_constellation_lines",
                "astralsorcery:built_in_effect_attunement_sparkle"
            ],
            id: 'astralsorcery:altar/infuser'
        },
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
