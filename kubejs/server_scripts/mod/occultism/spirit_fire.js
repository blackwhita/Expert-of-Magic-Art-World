onEvent('recipes', (event) => {
    event.remove({ output: 'occultism:otherstone', type: 'occultism:spirit_fire'})
    event.remove({ output: 'bloodmagic:arcaneashes'})
    const recipes = [
        {
            input: 'create:shadow_steel_casing',
            output: 'occultism:otherstone',
        },
        {
            input: 'psi:psidust',
            output: 'bloodmagic:arcaneashes',
        },
        {
            input: 'pneumaticcraft:compressed_stone',
            output: 'ars_nouveau:arcane_stone',
        },
        {
            input: 'minecraft:clay_ball',
            output: 'ars_nouveau:magic_clay',
        },
        {
            input: 'minecraft:oak_log',
            output: 'occultism:otherworld_log',
        },
        {
            input: 'minecraft:redstone',
            output: 'fluxnetworks:flux_dust',
        },
        {
            input: 'createaddition:overcharged_alloy',
            output: 'occultism:iesnium_ingot',
        },
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'occultism:spirit_fire',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: Ingredient.of(recipe.output).toJson()
            })
            //.id(recipe.id);
    });
});
