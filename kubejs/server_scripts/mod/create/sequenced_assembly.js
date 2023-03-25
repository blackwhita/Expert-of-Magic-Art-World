onEvent('recipes', (event) => {
    const mumetal = [
        'ars_nouveau:arcane_pedestal',
        'ars_nouveau:enchanting_apparatus',
        'ars_nouveau:arcane_core',
        'ars_nouveau:mycelial_sourcelink',
        'ars_nouveau:vitalic_sourcelink',
        'ars_nouveau:alchemical_sourcelink' ,
        'ars_nouveau:volcanic_accumulator',
        //powah
        'powah:dielectric_rod',
        'powah:capacitor_basic',
        //immersiveengineering
        'immersiveengineering:blastbrick',
        'immersiveengineering:cokebrick',
        'immersiveengineering:alloybrick',
        'immersiveengineering:rs_engineering',
        'immersiveengineering:light_engineering',
        'immersiveengineering:heavy_engineering',
        //ther
        'industrialforegoing:machine_frame_pity',
        //psi
        'psi:programmer'
    ]
    
    mumetal.forEach((output) => {
        event.remove({ output: output });
    });  
         recipes = [
        {
            input: 'minecraft:bookshelf',
            outputs: ['ars_nouveau:enchanting_apparatus'],
            transitionalItem: 'minecraft:bookshelf',
            loops: 4,
            sequence: [
                {
                    type: 'deploying',
                    input: ['minecraft:bookshelf', 'emendatusenigmatica:arcane_gem'],
                    output: 'minecraft:bookshelf'
                },
                {
                    type: 'deploying',
                    input: ['minecraft:bookshelf', 'emendatusenigmatica:arcane_gem'],
                    output: 'minecraft:bookshelf'
                },
                {
                    type: 'deploying',
                    input: ['minecraft:bookshelf', 'emendatusenigmatica:arcane_gem'],
                    output: 'minecraft:bookshelf'
                },
                {
                    type: 'deploying',
                    input: ['minecraft:bookshelf', 'create:shadow_steel'],
                    output: 'minecraft:bookshelf'
                }
            ],
        },
    ];
let armorTypes = [
        {
            loops: 4,
            armors: [
                {
                    base: '#forge:plates/gold',
                    material_1: 'create:cogwheel',
                    material_2: 'create:large_cogwheel',
                    material_3: 'pneumaticcraft:ingot_iron_compressed',
                    material_4: 'pneumaticcraft:ingot_iron_compressed',
                    result: 'create:precision_mechanism',
                },
                {
                    base: 'create:depot',
                    material_1: 'emendatusenigmatica:arcane_gem',
                    material_2: 'emendatusenigmatica:arcane_gem',
                    material_3: 'emendatusenigmatica:arcane_gem',
                    material_4: 'create:chromatic_compound',
                    result: 'ars_nouveau:arcane_pedestal',
                },
                /*{
                    base: 'minecraft:enchanting_table',
                    material_1: 'emendatusenigmatica:arcane_gem',
                    material_2: 'emendatusenigmatica:arcane_gem',
                    material_3: 'emendatusenigmatica:arcane_gem',
                    material_4: 'create:shadow_steel',
                    result: 'ars_nouveau:enchanting_apparatus',
                },*/
                {
                    base: 'create:andesite_casing',
                    material_1: 'create:copper_casing',
                    material_2: 'create:copper_casing',
                    material_3: 'create:refined_radiance_casing',
                    material_4: 'create:shadow_steel_casing',
                    result: 'ars_nouveau:arcane_core',
                },
                {
                    base: 'createaddition:overcharged_alloy',
                    material_1: 'minecraft:brown_mushroom',
                    material_2: 'minecraft:brown_mushroom',
                    material_3: 'minecraft:red_mushroom',
                    material_4: 'minecraft:red_mushroom',
                    result: 'ars_nouveau:mycelial_sourcelink',
                },
                {
                    base: 'createaddition:overcharged_alloy',
                    material_1: 'minecraft:rotten_flesh',
                    material_2: 'minecraft:bone',
                    material_3: 'minecraft:spider_eye',
                    material_4: 'minecraft:gunpowder',
                    result: 'ars_nouveau:vitalic_sourcelink',
                },
                {
                    base: 'createaddition:overcharged_alloy',
                    material_1: 'minecraft:brewing_stand',
                    material_2: 'minecraft:brewing_stand',
                    material_3: 'minecraft:brewing_stand',
                    material_4: 'minecraft:brewing_stand',
                    result: 'ars_nouveau:alchemical_sourcelink',
                },
                {
                    base: 'createaddition:overcharged_alloy',
                    material_1: 'resourcefulbees:blaze_honeycomb',
                    material_2: 'resourcefulbees:blaze_honeycomb',
                    material_3: 'resourcefulbees:blaze_honeycomb',
                    material_4: 'resourcefulbees:blaze_honeycomb',
                    result: 'ars_nouveau:volcanic_accumulator',
                },
                {
                    base: 'kubejs:blockcasing_plain',
                    material_1: 'create:cogwheel',
                    material_2: 'create:large_cogwheel',
                    material_3: 'create:mechanical_piston',
                    material_4: 'create:mechanical_piston',
                    result: 'kubejs:overlay_gearbox',
                },
                //powah
                {
                    base: 'emendatusenigmatica:diamond_rod',
                    material_1: 'powah:dielectric_paste',
                    material_2: 'powah:dielectric_paste',
                    material_3: 'powah:dielectric_paste',
                    material_4: 'powah:dielectric_paste',
                    result: '16x powah:dielectric_rod',
                },
                {
                    base: 'pneumaticcraft:printed_circuit_board',
                    material_1: 'eidolon:arcane_gold_ingot',
                    material_2: 'eidolon:arcane_gold_ingot',
                    material_3: 'eidolon:arcane_gold_ingot',
                    material_4: 'eidolon:arcane_gold_ingot',
                    result: '16x powah:capacitor_basic',
                },
                //immersiveengineering
                {
                    base: 'minecraft:white_concrete',
                    material_1: 'minecraft:brick',
                    material_2: 'minecraft:nether_brick',
                    material_3: 'pneumaticcraft:ingot_iron_compressed',
                    material_4: 'buildinggadgets:construction_paste',
                    result: 'immersiveengineering:blastbrick',
                },
                {
                    base: 'occultism:otherstone_tablet',
                    material_1: 'minecraft:clay_ball',
                    material_2: 'powah:uraninite',
                    material_3: 'minecraft:brick',
                    material_4: 'buildinggadgets:construction_paste',
                    result: 'immersiveengineering:cokebrick',
                },
                {
                    base: 'occultism:otherstone',
                    material_1: '#forge:sand',
                    material_2: 'powah:uraninite',
                    material_3: 'minecraft:brick',
                    material_4: 'buildinggadgets:construction_paste',
                    result: 'immersiveengineering:alloybrick',
                },
                {
                    base: 'create:refined_radiance_casing',
                    material_1: 'minecraft:redstone',
                    material_2: 'minecraft:redstone',
                    material_3: 'minecraft:redstone',
                    material_4: 'immersiveengineering:logic_circuit',
                    result: 'immersiveengineering:rs_engineering',
                },
                {
                    base: 'create:shadow_steel_casing',
                    material_1: 'immersiveengineering:component_iron',
                    material_2: 'immersiveengineering:component_iron',
                    material_3: 'immersiveengineering:component_iron',
                    material_4: 'immersiveengineering:logic_circuit',
                    result: 'immersiveengineering:light_engineering',
                },
                {
                    base: 'createaddition:overcharged_casing',
                    material_1: 'immersiveengineering:component_steel',
                    material_2: 'immersiveengineering:component_steel',
                    material_3: 'immersiveengineering:component_steel',
                    material_4: 'immersiveengineering:logic_circuit',
                    result: 'immersiveengineering:heavy_engineering',
                },
                //ther
                {
                    base: 'pneumaticcraft:compressed_stone',
                    material_1: '#forge:gears/cast_iron',
                    material_2: 'emendatusenigmatica:constantan_gear',
                    material_3: 'emendatusenigmatica:electrum_gear',
                    material_4: 'emendatusenigmatica:invar_gear',
                    result: 'industrialforegoing:machine_frame_pity',
                },
                //psi
                {
                    base: 'chipped:mechanist_workbench',
                    material_1: 'powah:steel_energized',
                    material_2: 'eidolon:lesser_soul_gem',
                    material_3: 'eidolon:death_essence',
                    material_4: 'emendatusenigmatica:arcane_block',
                    result: 'psi:cad_assembler',
                },

                
            ]
        },
    ];

    armorTypes.forEach((armorType) => {
        armorType.armors.forEach((armor) => {
            recipes.push({
                input: armor.base,
                outputs: [armor.result],
                transitionalItem: armor.base,
                loops: armorType.loops,
                sequence: [
                    {
                        type: 'deploying',
                        input: [armor.base, armor.material_1],
                        output: armor.base
                    },
                    {
                        type: 'deploying',
                        input: [armor.base, armor.material_2],
                        output: armor.base
                    },
                    {
                        type: 'deploying',
                        input: [armor.base, armor.material_3],
                        output: armor.base
                    },
                    {
                        type: 'deploying',
                        input: [armor.base, armor.material_4],
                        output: armor.base
                    }
                ],
                //id: armor.id
            });
        });
    });

    recipes.forEach((recipe) => {
        let sequence = [];

        recipe.sequence.forEach((step) => {
            if (step.type == 'deploying') {
                sequence.push(event.recipes.create.deploying(step.output, step.input));
            } else if (step.type == 'cutting') {
                sequence.push(
                    event.recipes.create.cutting(step.output, step.input).processingTime(step.processingTime)
                );
            } else if (step.type == 'filling') {
                sequence.push(event.recipes.create.filling(step.output, step.input));
            } else if (step.type == 'pressing') {
                sequence.push(event.recipes.create.pressing(step.output, step.input));
            }
        });

        event.recipes.create
            .sequenced_assembly(recipe.outputs, recipe.input, sequence)
            .loops(recipe.loops)
            .transitionalItem(recipe.transitionalItem)
            //.id(recipe.id);
    });
});

