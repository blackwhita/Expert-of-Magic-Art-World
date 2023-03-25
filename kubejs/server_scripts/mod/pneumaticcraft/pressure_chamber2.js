onEvent('recipes', (event) => {
    const recipes = [
        {
            ingredients: [
                Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }).weakNBT().toJson()
            ],
            pressure: 2.0,
            output: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:compressed_iron_bee' }).toResultJson()],
        },
        {
            ingredients: [
                Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }).weakNBT().toJson(),
                { item: 'pneumaticcraft:lubricant_bucket' },
                Item.of('pneumaticcraft:pneumatic_helmet').ignoreNBT().toJson()
            ],
            pressure: 4.5,
            output: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:pcbee_bee' }).toResultJson()]
        }
    ];
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: recipe.ingredients,
                pressure: recipe.pressure,
                results: recipe.output
            })
    });
});
