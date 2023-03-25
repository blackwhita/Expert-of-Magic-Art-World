onEvent('recipes', (event) => {
    const offering = [
        'ironfurnaces:rainbow_plating'
    ]
    offering.forEach((output) => {
        event.remove({ output: output });
    })
    const data = {
        recipes: [
            {
                input: {
                    item: 'immersiveengineering:logic_circuit',
                },
                start_item: {
                    item: 'rainbowcompound:rainbow_compound'
                },
                output: {
                    item: 'ironfurnaces:rainbow_plating',
                    count: 4
                },
            },
            {
                input: 
                    [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:tainted_bee' }).weakNBT().toJson()],
                start_item: {
                    item: 'kubejs:magic_dna'
                },
                output: 
                    Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:skies_bee' }).toJson()
            },
            {
                input: {
                    item: 'minecraft:end_crystal',
                },
                start_item: {
                    item: 'astralsorcery:aquamarine'
                },
                output: {
                    item: 'astralsorcery:rock_collector_crystal',
                    count: 1
                },
            },
        ]
    };

    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:offering',
                input: recipe.input,
                start_item: recipe.start_item,
                output: recipe.output
            })
            //.id(recipe.id);
    });
});