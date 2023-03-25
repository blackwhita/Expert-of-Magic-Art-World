onEvent('recipes', (event) => {
    const Ritual_object = [

        'astralsorcery:altar_discovery'
    ]
        Ritual_object.forEach((output) => {
            event.remove({ output: output  });
        });  
         recipes = [
        //ass
        {
            ritual_type: 'occultism:craft',
            activation_item: Item.of('chipped:mechanist_workbench'),
            pentacle_id: 'occultism:craft_marid',
            duration: 120,
            entity_to_sacrifice: {
                tag: 'eomaw:gaia_guardian',
                display_name: 'ritual.occultism.sacrifice.gaia_guardian'
            },
            ritual_dummy: 'occultism:ritual_dummy/craft_astralsorcery.altar_discovery',
            ingredients: ['astralsorcery:aquamarine', 'astralsorcery:aquamarine', 'astralsorcery:aquamarine', 'astralsorcery:aquamarine', 'minecraft:nether_star'],
            result: Item.of('astralsorcery:altar_discovery'),
            id:'astralsorcery:altar/altar_discovery'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: Item.of('botania:runic_altar'),
            pentacle_id: 'occultism:craft_marid',
            duration: 120,
            entity_to_sacrifice: {
                tag: 'eomaw:gaia_guardian',
                display_name: 'ritual.occultism.sacrifice.gaia_guardian'
            },
            ritual_dummy: 'occultism:ritual_dummy/craft_astralsorcery.attunement_altar',
            ingredients: [
                'mythicbotany:kvasir_blood',
                'mythicbotany:asgard_rune',
                'botania:rune_mana',
                'mythicbotany:midgard_rune',
                'botania:gaia_ingot',
                'bloodmagic:corrosivecrystal',
                'botania:gaia_ingot',
                'bloodmagic:steadfastcrystal',
                'bloodmagic:destructivecrystal',
                'botania:gaia_ingot',
                'bloodmagic:vengefulcrystal',
                'botania:gaia_ingot'
            ],
            result: Item.of('astralsorcery:attunement_altar'),
            id:'astralsorcery:altar/attunement_altar'
        }


    ];
    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';

            recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        if (recipe.item_to_use) {
            recipe.item_to_use = Ingredient.of(recipe.item_to_use).toJson();
        }
        recipe.ritual_dummy = Ingredient.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.result).toJson();

     event.custom(recipe).id(recipe.id)
    })
});
