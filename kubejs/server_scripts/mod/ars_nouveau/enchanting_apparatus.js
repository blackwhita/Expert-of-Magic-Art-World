onEvent('recipes', (event) => {
    event.remove({ output: 'ars_nouveau:sylph_charm'  });
    event.remove({ output: 'ars_nouveau:drygmy_charm'  });
    event.remove({ output: 'ars_nouveau:ritual_flight'  });
    event.remove({ output: 'ars_nouveau:ritual'  });
    event.remove({ output: 'ars_nouveau:mana_condenser'  });
    event.remove({ output: 'resourcefulbees:t1_apiary'  });
    event.remove({ output: 'eidolon:brazier'  });
    event.remove({ output: 'ars_nouveau:wixie_charm' });
    event.remove({ output: 'botania:gaia_ingot' });
    //powah
    event.remove({ output: 'powah:dielectric_casing'  });
    //occultism
    event.remove({ output: 'occultism:golden_sacrificial_bowl'  });
    event.remove({ output: 'occultism:chalk_gold_impure'  });
    event.remove({ output: 'occultism:chalk_purple_impure'  });
    //blood
    event.remove({ output: 'bloodmagic:soulforge'  });
    event.remove({ output: 'bloodmagic:alchemytable'  });
    //as
    event.remove({ id: 'astralsorcery:altar/spectral_relay'  });
    const recipes = [
        {
            inputs: [
                'pamhc2foodcore:chickendinneritem',
                'pamhc2foodextended:honeycombchocolatebaritem',
                'pamhc2foodextended:etonmessitem',
                'pamhc2foodextended:theatreboxitem',
                'pamhc2foodextended:supremepizzaitem',
                'pamhc2foodextended:meatfeastpizzaitem',
                'pamhc2foodextended:energydrinkitem',
                'pamhc2foodcore:gummybearsitem'
            ],
            reagent: 'ars_nouveau:sylph_shards',
            sourceCost: 20000,
            output: 'ars_nouveau:sylph_charm',
        },
        {
            inputs: [
                'minecraft:ink_sac',
                'minecraft:bone',
                'ars_nouveau:wilden_spike',
                'ars_nouveau:wilden_wing',
                'ars_nouveau:wilden_tribute',
                'ars_nouveau:wilden_horn',
                'minecraft:spider_eye',
                'minecraft:rotten_flesh'
            ],
            reagent: 'ars_nouveau:drygmy_shard',
            sourceCost: 20000,
            output: 'ars_nouveau:drygmy_charm',
        },
        {
            inputs: [
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:end_fiber',
                'ars_nouveau:red_archwood_wood',
                'ars_nouveau:green_archwood_wood',
                'ars_nouveau:purple_archwood_wood',
                'ars_nouveau:blue_archwood_wood'
            ],
            reagent: 'minecraft:feather',
            sourceCost: 10000,
            output: 'ars_nouveau:ritual_flight',
        },
        {
            inputs: [
                'ars_nouveau:glyph_flare',
                'ars_nouveau:glyph_ignite',
                'ars_nouveau:glyph_firework',
                'ars_nouveau:glyph_smelt',
                'ars_nouveau:glyph_explosion',
                'minecraft:soul_campfire',
                'ars_nouveau:arcane_pedestal',
                'ars_nouveau:arcane_pedestal'
            ],
            reagent: 'create:basin',
            sourceCost: 10000,
            output: 'ars_nouveau:ritual',
        },
        {
            inputs: [
                'minecraft:wheat_seeds',
                'minecraft:pumpkin_seeds',
                'minecraft:melon_seeds',
                'minecraft:beetroot_seeds',
                'pamhc2crops:amaranthseeditem',
                'immersiveengineering:seed',
                'occultism:datura_seeds',
                'pamhc2crops:agaveseeditem'
            ],
            reagent: 'ars_nouveau:mana_bloom_crop',
            output: 'ars_nouveau:mana_condenser',
        },
        {
            inputs: [
                'resourcefulbees:bee_jar',
                'resourcefulbees:bee_jar',
                'resourcefulbees:bee_jar',
                'resourcefulbees:bee_jar',
                'resourcefulbees:bee_jar',
                'resourcefulbees:bee_jar',
                'resourcefulbees:bee_jar',
                'resourcefulbees:bee_jar'
            ],
            reagent: 'createaddition:overcharged_casing',
            sourceCost: 10000,
            output: 'resourcefulbees:t1_apiary',
        },
        {
            inputs: [
                'create:andesite_casing',
                'create:copper_casing',
                'create:brass_casing',
                'create:refined_radiance_casing',
                'create:shadow_steel_casing'
            ],
            reagent: 'createaddition:overcharged_casing',
            sourceCost:20000,
            output: '6x kubejs:blockcasing_plain',
        },
        {
            inputs: [
                'ars_nouveau:glyph_flare',
                'ars_nouveau:glyph_ignite',
                'ars_nouveau:glyph_firework',
                'ars_nouveau:glyph_smelt',
                'ars_nouveau:glyph_explosion',
                'minecraft:soul_campfire',
                'ars_nouveau:arcane_pedestal',
                'ars_nouveau:arcane_pedestal'
            ],
            reagent: 'eidolon:crucible',
            sourceCost: 10000,
            output: 'eidolon:brazier',
        },
        //powah
        {
            inputs: [
                'pneumaticcraft:printed_circuit_board',
                'pneumaticcraft:printed_circuit_board',
                'pneumaticcraft:printed_circuit_board',
                'pneumaticcraft:printed_circuit_board',
                'pneumaticcraft:printed_circuit_board',
                'create:shadow_steel',
                'create:refined_radiance',
                'createaddition:overcharged_alloy'
            ],
            reagent: 'powah:capacitor_basic',
            sourceCost: 10000,
            output: '3x powah:dielectric_casing',
        },
        //kjs
        {
            inputs: [
                'minecraft:chorus_flower',
                'minecraft:chorus_flower',
                'minecraft:chorus_flower',
                'minecraft:chorus_flower',
                'minecraft:popped_chorus_fruit',
                'minecraft:popped_chorus_fruit',
                'minecraft:popped_chorus_fruit',
                'minecraft:popped_chorus_fruit'
            ],
            reagent: 'pneumaticcraft:ingot_iron_compressed',
            sourceCost: 5000,
            output: 'rainbowcompound:chorusite_ingot',
        },
        //occultism
        {
            inputs: [
                'eidolon:arcane_gold_ingot',
                'eidolon:arcane_gold_ingot',
                'eidolon:arcane_gold_ingot',
                'eidolon:arcane_gold_ingot',
                'eidolon:arcane_gold_ingot',
                'eidolon:arcane_gold_ingot',
                'eidolon:arcane_gold_ingot',
                'eidolon:arcane_gold_ingot'
            ],
            reagent: 'occultism:sacrificial_bowl',
            sourceCost: 10000,
            output: 'occultism:golden_sacrificial_bowl',
        },
        {
            inputs: [
                'rainbowcompound:blazeite_ingot',
                'rainbowcompound:blazeite_ingot',
                'rainbowcompound:blazeite_ingot',
                'rainbowcompound:blazeite_ingot',
                'rainbowcompound:blazeite_ingot',
                'rainbowcompound:blazeite_ingot',
                'rainbowcompound:blazeite_ingot',
                'rainbowcompound:blazeite_ingot'
            ],
            reagent: 'occultism:chalk_white_impure',
            sourceCost: 10000,
            output: Item.of('occultism:chalk_gold_impure'),
        },
        {
            inputs: [
                'rainbowcompound:chorusite_ingot',
                'rainbowcompound:chorusite_ingot',
                'rainbowcompound:chorusite_ingot',
                'rainbowcompound:chorusite_ingot',
                'rainbowcompound:chorusite_ingot',
                'rainbowcompound:chorusite_ingot',
                'rainbowcompound:chorusite_ingot',
                'rainbowcompound:chorusite_ingot'
            ],
            reagent: 'occultism:chalk_white_impure',
            sourceCost: 10000,
            output: Item.of('occultism:chalk_purple_impure'),
        },
        {
            inputs: [
                'bloodmagic:blankslate',
                'bloodmagic:blankslate',
                'bloodmagic:blankslate',
                'botania:livingrock',
                'botania:livingrock',
                'botania:livingrock',
                'botania:livingrock',
                'eidolon:lesser_soul_gem'
            ],
            reagent: 'ironfurnaces:emerald_furnace',
            sourceCost: 10000,
            output: Item.of('bloodmagic:soulforge'),
        },
        {
            inputs: [
                'ars_nouveau:alchemical_sourcelink',
                'minecraft:cauldron',
                'minecraft:cauldron',
                'botania:alchemy_catalyst',
                'botania:alchemy_catalyst',
            ],
            reagent: 'minecraft:brewing_stand',
            sourceCost: 10000,
            output: Item.of('bloodmagic:alchemytable'),
        },
        {
            inputs: [
                'botania:life_essence',
                'botania:life_essence',
                'botania:life_essence',
                'botania:life_essence',
            ],
            reagent: 'botania:terrasteel_ingot',
            sourceCost: 10000,
            output: Item.of('botania:gaia_ingot'),
        },
        {
            inputs: [
                'astralsorcery:marble_raw',
                'astralsorcery:glass_lens',
                'astralsorcery:marble_raw',
                '#forge:treated_wood',
                '#forge:treated_wood'
            ],
            reagent: 'ars_nouveau:arcane_relay',
            sourceCost: 10000,
            output: Item.of('astralsorcery:spectral_relay'),
        },
        {
            inputs: ['minecraft:brewing_stand', 'ars_nouveau:glyph_orbit', 'minecraft:emerald', 'ars_nouveau:glyph_craft'],
            reagent: 'ars_nouveau:wixie_shards',
            sourceCost: 10000,
            output: Item.of('ars_nouveau:wixie_charm'),
        },
        {
            inputs: [
                'bloodmagic:etherealslate',
                'kubejs:ultimate_rune',
                'bloodmagic:etherealslate',
                'kubejs:ultimate_rune',
                'kubejs:ultimate_rune',
                'bloodmagic:etherealslate',
                'naturesaura:break_prevention',
                'bloodmagic:etherealslate'
            ],
            sourceCost: 5000,
            reagent: Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0}'),
            output: Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0,Unbreakable:1}'),
        },
        {
            inputs: ['mythicbotany:vanaheim_rune', 'mythicbotany:alfheim_rune', 'mythicbotany:midgard_rune', 'mythicbotany:helheim_rune', 'mythicbotany:nidavellir_rune', 'mythicbotany:niflheim_rune', 'mythicbotany:muspelheim_rune', 'mythicbotany:joetunheim_rune'],
            sourceCost: 20000,
            reagent: Item.of('mythicbotany:asgard_rune'),
            output: Item.of('kubejs:ultimate_rune'),
        },
        {
            inputs: [
                'naturesaura:infused_iron',
                'naturesaura:infused_iron',
                'naturesaura:infused_iron',
                'naturesaura:infused_iron',
                'naturesaura:infused_iron',
                'naturesaura:infused_iron',
                'naturesaura:infused_iron',
                'naturesaura:infused_iron'
            ],
            sourceCost: 10000,
            reagent: Item.of('dankstorage:dank_1'),
            output: Item.of('dankstorage:dank_4'),
        },
        {
            inputs: [
                'naturesaura:infused_iron',
                'naturesaura:infused_iron',
                'naturesaura:infused_iron',
                'naturesaura:infused_iron',
                'naturesaura:infused_iron',
                'naturesaura:infused_iron',
                'naturesaura:infused_iron',
                'naturesaura:infused_iron'
            ],
            sourceCost: 10000,
            reagent: Item.of('tanknull:tank_1'),
            output: Item.of('tanknull:tank_4'),
        },
        {
            inputs: [
                'extendedcrafting:the_ultimate_ingot',
                'extendedcrafting:the_ultimate_ingot',
                'extendedcrafting:the_ultimate_ingot',
                'extendedcrafting:the_ultimate_ingot',
                'extendedcrafting:the_ultimate_ingot',
                'extendedcrafting:the_ultimate_ingot',
                'extendedcrafting:the_ultimate_ingot',
                'extendedcrafting:the_ultimate_ingot',
            ],
            sourceCost: 20000,
            reagent: Item.of('ars_nouveau:mana_jar'),
            output: Item.of('ars_nouveau:creative_mana_jar'),
        },

    ];
    recipes.forEach((recipe) => {
        recipe.sourceCost
            ? event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .merge({ sourceCost: recipe.sourceCost/2 })
                  //.id(recipe.id)
            : event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  //.id(recipe.id);
    });
});
