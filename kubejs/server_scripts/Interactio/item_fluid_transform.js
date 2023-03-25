onEvent('recipes', (event) => {
    event.remove({ output: 'ars_nouveau:crystallizer' });
    const id_prefix = 'eomaw:interactio/item_fluid_transform/';
    const recipes = [
        {
            inputs: [{ item: 'ftbsluice:dust', count: 1, return_chance: 0 }],
            fluid: { fluid: 'minecraft:water' },
            output: {
                entries: [
                    { result: { item: 'minecraft:clay', count: 1 }, weight: 0.8 },
                    { result: { item: 'minecraft:string', count: 1 }, weight: 0.2 }
                ],
                empty_weight: 0.2,
                rolls: 1
            },
            consume_fluid: 0.03
        },
        {
            inputs: [{ item: 'create:empty_blaze_burner', count: 1, return_chance: 0 }],
            fluid: { fluid: 'minecraft:lava' },
            output: {
                entries: [{ result: { item: 'create:blaze_burner', count: 1 }, weight: 0.1 }],
                empty_weight: 0.9,
                rolls: 1
            },
            consume_fluid: 1
        },
        {
            inputs: [{ item: 'mythicbotany:dream_cherry', count: 1, return_chance: 0 }],
            fluid: { fluid: 'minecraft:water' },
            output: {
                entries: [{ result: { item: 'create:honeyed_apple', count: 64 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 1
        },
        {
            inputs: [{ item: 'occultism:infused_lenses', count: 1, return_chance: 0 }],
            fluid: { fluid: 'astralsorcery:liquid_starlight' },
            output: {
                entries: [{ result: { item: 'astralsorcery:glass_lens', count: 2 }, weight: 10 }],
                empty_weight: 90,
                rolls: 1
            },
            consume_fluid: 0.1
        },
        {
            inputs: [{ item: 'emendatusenigmatica:arcane_ore', count: 8, return_chance: 0 }],
            fluid: { fluid: 'astralsorcery:liquid_starlight' },
            output: {
                entries: [{ result: { item: 'astralsorcery:rock_crystal_ore', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 1
        },//
        {
            inputs: [{ item: 'minecraft:nether_star', count: 1, return_chance: 0 }],
            fluid: { fluid: 'thermal:refined_fuel' },
            output: {
                entries: [{ result: { item: 'astralsorcery:aquamarine', count: 8 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 1
        },
        {
            inputs: [
                { item: 'emendatusenigmatica:arcane_block', count: 10, return_chance: 0 },
                { item: 'ars_nouveau:mana_jar', count: 1, return_chance: 0 }
            ],
            fluid: { fluid: 'pneumaticcraft:biodiesel' },
            output: {
                entries: [{ result: { item: 'ars_nouveau:crystallizer', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 1
        },
        {
            inputs: [
                { item: 'minecraft:warped_roots', count: 10, return_chance: 0 },
                { item: 'minecraft:netherrack', count: 1, return_chance: 0 }
            ],
            fluid: { fluid: 'minecraft:lava' },
            output: {
                entries: [{ result: { item: 'minecraft:warped_nylium', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 1
        },
        {
            inputs: [
                { item: 'minecraft:crimson_roots', count: 10, return_chance: 0 },
                { item: 'minecraft:netherrack', count: 1, return_chance: 0 }
            ],
            fluid: { fluid: 'minecraft:lava' },
            output: {
                entries: [{ result: { item: 'minecraft:crimson_nylium', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 1
        }
    ];
    recipes.forEach((recipe) => {
        fallback_id(
            event.custom({
                type: 'interactio:item_fluid_transform',
                inputs: recipe.inputs,
                fluid: recipe.fluid,
                output: recipe.output,
                consume_fluid: recipe.consume_fluid
            }),
            id_prefix
        );
    });
});
