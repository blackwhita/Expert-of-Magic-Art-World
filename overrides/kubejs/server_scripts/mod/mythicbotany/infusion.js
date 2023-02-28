onEvent('recipes', (event) => {
    const mumetal = [
        'mythicbotany:alfsteel_ingot',
        'botania:terrasteel_ingot'
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output , tpye:'mythicbotany:infusion'});
    });
    const recipes = [
        {
            inputs: [
                Item.of('resourcefulbees:bee_jar', {
                    Entity: 'resourcefulbees:manasteel_bee',
                    BeeType: 'manasteel',
                    Color: '#4c97ff'
                })
                    .weakNBT()
                    .toJson(),
                { item: 'botania:mana_pearl' },
                { item: 'botania:mana_diamond' },
                { item: 'botania:quartz_mana' }
            ],
            output: Item.of('resourcefulbees:bee_jar', {
                Entity: 'resourcefulbees:terrasteel_bee',
                BeeType: 'terrestrial',
                Color: '#5bf23d'
            }).toJson(),
            mana: 2000000,
            fromColor: parseInt('0xFFFFFF'),
            toColor: parseInt('0x00FF00'),
        },
        {
            inputs: [
                { item: 'naturesaura:sky_ingot' },
                { item: 'botania:mana_pearl' },
                { item: 'resourcefulbees:terrasteel_honeycomb' },
                { item: 'botania:mana_diamond' },
                { item: 'occultism:iesnium_ingot' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 300000,
            fromColor: parseInt('0xFFFFFF'),
            toColor: parseInt('0x00FF00'),
        },
        {
            inputs: [
                { item: 'naturesaura:sky_ingot' },
                { item: 'botania:mana_pearl' },
                { item: 'botania:manasteel_ingot' },
                { item: 'botania:mana_diamond' },
                { item: 'occultism:iesnium_ingot' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 500000,
            fromColor: parseInt('0xFFFFFF'),
            toColor: parseInt('0x00FF00'),
        },
        {
            inputs: [
                { item: 'kubejs:high_steel_ingot' },
                { item: 'botania:pixie_dust' },
                { item: 'resourcefulbees:elementium_honeycomb' },
                { item: 'botania:dragonstone' },
                { item: 'create:polished_rose_quartz' }
            ],
            output: { item: 'mythicbotany:alfsteel_ingot' },
            mana: 1500000,
            fromColor: parseInt('0xFF008D'),
            toColor: parseInt('0xFF9600'),
        },
        {
            inputs: [
                { item: 'kubejs:high_steel_ingot' },
                { item: 'botania:pixie_dust' },
                { item: 'botania:elementium_ingot' },
                { item: 'botania:dragonstone' },
                { item: 'create:polished_rose_quartz' }
            ],
            output: { item: 'mythicbotany:alfsteel_ingot' },
            mana: 2000000,
            fromColor: parseInt('0xFF008D'),
            toColor: parseInt('0xFF9600'),
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'mythicbotany:infusion',
                group: 'infuser',
                ingredients: recipe.inputs,
                output: recipe.output,
                mana: recipe.mana,
                fromColor: recipe.fromColor,
                toColor: recipe.toColor
            })
            //.id(recipe.id);
    });
});
