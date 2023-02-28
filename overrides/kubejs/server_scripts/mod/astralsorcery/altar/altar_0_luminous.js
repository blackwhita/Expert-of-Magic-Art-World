onEvent('recipes', (event) => {
    const mumetal = [
        //'astralsorcery:altar/well'
    ]
    mumetal.forEach((output) => {
        event.remove({ id: output });
    }); 
    const recipes = [
        {
            output: Item.of('astralsorcery:well'),
            pattern: [
            '_____', 
            '_A_A_', 
            '_BCB_', 
            '_DED_', 
            '_____'
        ],
            key: {
                A: { item: 'astralsorcery:marble_raw' },
                B: { item: 'astralsorcery:marble_runed' },
                C: {  type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: false,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true },
                D: { item: 'astralsorcery:aquamarine' },
                E: { item: 'bloodmagic:demoncrucible' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            id:'astralsorcery:altar/well'
        },
        {
            output: Item.of('astralsorcery:altar_attunement'),
            pattern: [
            '_____', 
            '_ABC_', 
            '_DEF_', 
            '_GHL_', 
            '_____'
        ],
            key: {
                A: { item: 'mythicbotany:vanaheim_rune' },
                B: { type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: false,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true },
                C: { item: 'mythicbotany:midgard_rune' },
                D: { item: 'mythicbotany:asgard_rune' },
                E: { type: 'astralsorcery:fluid',fluid: [{ fluid: 'astralsorcery:liquid_starlight', amount: 1000 }]},
                F: { item: 'mythicbotany:joetunheim_rune' },
                G: { item: 'mythicbotany:muspelheim_rune' },
                H: { item: 'eidolon:shadow_gem' },
                L: { item: 'mythicbotany:alfheim_rune' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 500,
            recipe_class: 'astralsorcery:attunement_upgrade',
            effects: ['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar'],
            id:'astralsorcery:altar/altar_attunement'
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