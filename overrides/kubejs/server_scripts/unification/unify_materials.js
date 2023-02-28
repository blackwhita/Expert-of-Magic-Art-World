onEvent('recipes', (event) => {
    const id_prefix = 'eomaw:unification/unify_dyes/';

    materialsToUnify.forEach((material) => {
        var ingot = getPreferredItemInTag(Ingredient.of(`#forge:ingots/${material}`)).id;
        var nugget = getPreferredItemInTag(Ingredient.of(`#forge:nuggets/${material}`)).id;
        var gem = getPreferredItemInTag(Ingredient.of(`#forge:gems/${material}`)).id;

        var plate = getPreferredItemInTag(Ingredient.of(`#forge:plates/${material}`)).id;
        var gear = getPreferredItemInTag(Ingredient.of(`#forge:gears/${material}`)).id;
        var rod = getPreferredItemInTag(Ingredient.of(`#forge:rods/${material}`)).id;
        var wire = getPreferredItemInTag(Ingredient.of(`#forge:wires/${material}`)).id;

        let crushed_ore = getPreferredItemInTag(Ingredient.of(`#create:crushed_ores/${material}`)).id;
        var ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`)).id;
        var mana_cluster = getPreferredItemInTag(Ingredient.of(`#eomaw:mana_clusters/${material}`)).id;
        var fulminated_cluster = getPreferredItemInTag(Ingredient.of(`#eomaw:fulminated_clusters/${material}`)).id;
        var levigated_material = getPreferredItemInTag(Ingredient.of(`#eomaw:levigated_materials/${material}`)).id;
        var crystalline_sliver = getPreferredItemInTag(Ingredient.of(`#eomaw:crystalline_slivers/${material}`)).id;

        gear_unification(event, material, ingot, gem, gear);
        rod_unification(event, material, ingot, gem, rod, plate);
        plate_unification(event, material, ingot, gem, plate);
        wire_unification(event, material, ingot, gem, wire, plate);

        immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, crushed_ore, ingot);

        magical_ore_processing(
            event,
            material,
            ore,
            ingot,
            nugget,
            mana_cluster,
            fulminated_cluster,
            levigated_material,
            crystalline_sliver
        );
    });

    function gear_unification(event, material, ingot, gem, gear) {
        if (gear == air) {
            return;
        }

        event.remove({ output: gear });

        var output = gear,
            input,
            mold = 'immersiveengineering:mold_gear';

        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }

        event.recipes.thermal
            .press(output, [Ingredient.of(input, 4), mold])
            .id(`thermal:machine/press/press_${material}_ingot_to_gear`);

        event.recipes.immersiveengineering
            .metal_press(`4x ${output}`, Ingredient.of(`16x ${input}`), mold)
            .id(`kubejs:immersiveengineering_metal_press_${material}_gear`);

        event
            .shaped(output, ['CAC', 'ABA', 'CAC'], {
                A: input,
                B: '#forge:plates/iron_tin',
                C: '#forge:nuggets/aluminum'
            })
            .id(`kubejs:crafting_shaped_${material}_gear`);
    }

    function rod_unification(event, material, ingot, gem, rod) {
        if (rod == air) {
            return;
        }

        event.remove({ output: rod });

        let output = rod,
            input,
            mold = '#thermal:crafting/dies/rod';
        const hammer = '#forge:tools/crafting_hammer';
        const plateTag = `#forge:plates/${material}`;
        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }

        event.recipes.thermal
            .press(rod, [input, mold])
            .energy(2400)
            .id(`thermal:machine/press/press_${material}_ingot_to_rod`);

        event.recipes.immersiveengineering
            .metal_press(`4x ${rod}`, `4x ${input}`, mold)
            .id(`kubejs:immersiveengineering_metal_press_${material}_rod`);

        event.shapeless(output, [plateTag, hammer, plateTag]).id(`kubejs:shapeless_crafting_${material}_rod`);
    }

    function plate_unification(event, material, ingot, gem, plate) {
        if (plate == air) {
            return;
        }

        event.remove({ output: plate });
        event.remove({ id: /immersiveengineering:crafting\/plate_/ });
        event.remove({ id: /create:pressing\/\w*_ingot/ });

        const output = plate,
            mold = '#thermal:crafting/dies/plate',
            hammer = '#forge:tools/crafting_hammer';

        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }
        event.shapeless(output, [input, hammer, input]).id(`kubejs:shapeless_crafting_${material}_plate`);

        event.recipes.immersiveengineering
            .metal_press(`4x ${output}`, `4x ${input}`, mold)
            .id(`kubejs:immersiveengineering_metal_press_${material}_plate`);

        event.recipes.create.pressing(output, input).id(`kubejs:create_pressing_${material}_plate`);

        event.recipes.thermal
            .press(Item.of(output), input)
            .energy(2400)
            .id(`thermal:machine/press/press_${material}_ingot_to_plate`);
    }

    function wire_unification(event, material, ingot, gem, wire, plate) {
        if (wire == air) {
            return;
        }

        event.remove({ output: wire });

        const wireCutters = '#forge:tools/wirecutter';
        let output = wire,
            mold = '#thermal:crafting/dies/wire';

        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }

        event.recipes.thermal
            .press(Item.of(output, 4), [plate, mold])
            .energy(2400)
            .id(`kubejs:immersiveengineering_metal_press_${material}_wire`);

        event.recipes.immersiveengineering
            .metal_press(`16x ${output}`, `4x ${plate}`, mold)
            .id(`kubejs:immersiveengineering_metal_press_${material}_wire`);

        event.shapeless(Item.of(output, 2), [plate, plate, wireCutters]).id(`kubejs:shaped_crafting_${material}_wire`);
    }

    function immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, crushed_ore, ingot) {
        if (ore == air || crushed_ore == air || ingot == air) {
            return;
        }

        var primaryOutput = crushed_ore,
            input = `#forge:ores/${material}`,
            materialProperties;

        try {
            materialProperties = oreProcessingSecondaries[material];
        } catch (err) {
            return;
        }

        try {
            secondaryOutput = getPreferredItemInTag(
                Ingredient.of(`#create:crushed_ores/${materialProperties.secondary}`)
            ).id;
        } catch (err) {
            secondaryOutput = crushed_ore;
        }

        event.recipes.immersiveengineering
            .crusher(primaryOutput, input, [
                Item.of(primaryOutput, 2).chance(0.6),
                Item.of(primaryOutput).chance(0.5),
                Item.of(secondaryOutput, 2).chance(0.35),
                Item.of('minecraft:gravel').chance(0.18)
            ])
            .id(`immersiveengineering:crusher/ore_${material}`);
    }

    function magical_ore_processing(
        event,
        material,
        ore,
        ingot,
        nugget,
        mana_cluster,
        fulminated_cluster,
        levigated_material,
        crystalline_sliver
    ) {
        if (
            ore == air ||
            ingot == air ||
            nugget == air ||
            mana_cluster == air ||
            fulminated_cluster == air ||
            levigated_material == air ||
            crystalline_sliver == air
        ) {
            return;
        }

        var secondary_fulminated_cluster,
            infusing_input = `#forge:ores/${material}`,
            zapping_input = `#eomaw:mana_clusters/${material}`,
            crumbling_input = `#eomaw:fulminated_clusters/${material}`,
            freezing_input = `#eomaw:levigated_materials/${material}`,
            fusing_input = `#eomaw:crystalline_slivers/${material}`;

        try {
            secondary_fulminated_cluster = getPreferredItemInTag(
                Ingredient.of(`#eomaw:fulminated_clusters/${oreProcessingSecondaries[material].secondary}`)
            ).id;
        } catch (err) {
            secondary_fulminated_cluster = getPreferredItemInTag(
                Ingredient.of(`#mekanism:fulminated_clusters/${material}`)
            ).id;
        }

        // Step One: Infuse!
        event
            .custom({
                type: 'botania:mana_infusion',
                input: Ingredient.of(infusing_input).toJson(),
                output: { item: mana_cluster, count: 1 },
                catalyst: { type: 'block', block: 'naturesaura:generator_limit_remover' },
                mana: 2000
            })
            .id(`eomaw:expert/magical_ore_processing/mana/${material}`);

        // Step Two: Zap!
        event
            .custom({
                type: 'interactio:item_lightning',
                inputs: [Ingredient.of(zapping_input).toJson()],
                output: {
                    entries: [
                        { result: { item: fulminated_cluster, count: 1 }, weight: 20 },
                        { result: { item: secondary_fulminated_cluster, count: 1 }, weight: 10 },
                        { result: { item: 'thermal:slag', count: 1 }, weight: 5 }
                    ],
                    empty_weight: 65,
                    rolls: 20
                }
            })
            .id(`eomaw:expert/magical_ore_processing/lightning/${material}`);

        // Step Three: Crumble!
        event
            .custom({
                type: 'naturesaura:altar',
                input: Ingredient.of(crumbling_input).toJson(),
                output: Ingredient.of(levigated_material).toJson(),
                catalyst: Ingredient.of('naturesaura:crushing_catalyst').toJson(),
                aura_type: 'naturesaura:overworld',
                aura: 300,
                time: 1
            })
            .id(`eomaw:expert/magical_ore_processing/aura/${material}`);

        // Step Four: Freeze!
        event
            .custom({
                type: 'interactio:item_fluid_transform',
                inputs: [
                    Ingredient.of(freezing_input).toJson(),
                    { tag: 'botania:runes/winter', count: 1, return_chance: 1.0 }
                ],
                output: {
                    entries: [
                        { result: Ingredient.of(crystalline_sliver).toJson(), weight: 75 },
                        { result: Ingredient.of('bloodmagic:corrupted_tinydust').toJson(), weight: 25 }
                    ],
                    empty_weight: 0,
                    rolls: 20
                },
                fluid: { fluid: 'astralsorcery:liquid_starlight' },
                consume_fluid: 0.05
            })
            .id(`eomaw:expert/magical_ore_processing/starlight/${material}`);

        // Step Five: Blood!
        event.recipes.bloodmagic
            .altar(nugget, fusing_input)
            .upgradeLevel(4)
            .altarSyphon(18)
            .consumptionRate(18)
            .drainRate(9)
            .id(`eomaw:expert/magical_ore_processing/blood/${material}`);
    }
    materialsToUnify.forEach((material) => {
        let ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`)).id;
        let block = getPreferredItemInTag(Ingredient.of(`#forge:storage_blocks/${material}`)).id;
        let ingot = getPreferredItemInTag(Ingredient.of(`#forge:ingots/${material}`)).id;
        let nugget = getPreferredItemInTag(Ingredient.of(`#forge:nuggets/${material}`)).id;

        let gem = getPreferredItemInTag(Ingredient.of(`#forge:gems/${material}`)).id;
        let chunk = getPreferredItemInTag(Ingredient.of(`#forge:chunks/${material}`)).id;

        let crushed_ore = getPreferredItemInTag(Ingredient.of(`#create:crushed_ores/${material}`)).id;
        let dust = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${material}`)).id;
        let shard = getPreferredItemInTag(Ingredient.of(`#forge:shards/${material}`)).id;

        let mek_crystal = getPreferredItemInTag(Ingredient.of(`#mekanism:crystals/${material}`)).id;
        let mek_shard = getPreferredItemInTag(Ingredient.of(`#mekanism:shards/${material}`)).id;
        let mek_clump = getPreferredItemInTag(Ingredient.of(`#mekanism:clumps/${material}`)).id;
        let mek_dirty_dust = getPreferredItemInTag(Ingredient.of(`#mekanism:dirty_dusts/${material}`)).id;

        let fragment = getPreferredItemInTag(Ingredient.of(`#bloodmagic:fragments/${material}`)).id;
        let gravel = getPreferredItemInTag(Ingredient.of(`#bloodmagic:gravels/${material}`)).id;

        let gear = getPreferredItemInTag(Ingredient.of(`#forge:gears/${material}`)).id;
        let rod = getPreferredItemInTag(Ingredient.of(`#forge:rods/${material}`)).id;
        let plate = getPreferredItemInTag(Ingredient.of(`#forge:plates/${material}`)).id;

        let coin = getPreferredItemInTag(Ingredient.of(`#forge:coins/${material}`)).id;

        astralsorcery_ore_processing_infuser(event, material, ore, ingot, gem, shard);


        bloodmagic_metal_ore_processing(event, material, ore, fragment, gravel, dust, ingot);
        bloodmagic_gem_ore_processing(event, material, ore, gem, shard, dust);
        bloodmagic_ingot_gem_crushing(event, material, ingot, dust, gem);

        create_metal_ore_processing(event, material, ore, crushed_ore, ingot, nugget);
        create_gem_ore_processing(event, material, ore, gem, dust, shard);
        create_ingot_gem_milling(event, material, ingot, dust, gem);
        create_metal_block_processing(event, material, crushed_ore, ingot, nugget);

        emendatus_hammer_crushing(event, material, ore, dust);
        emendatus_shapeless_transform(event, material, ore, chunk);

        immersiveengineering_ingot_crushing(event, material, dust, ingot);
        immersiveengineering_gem_ore_processing(event, material, ore, dust, gem, shard);
        immersiveengineering_hammer_crushing(event, material, ore, dust, gem);
        immersiveengineering_gem_crushing(event, material, dust, gem);
        immersiveengineering_coin_pressing(event, material, ingot, nugget, coin);

        mekanism_ingot_gem_crushing(event, material, ingot, dust, gem);
        mekanism_gem_ore_processing(event, material, ore, dust, gem, shard);
        mekanism_metal_ore_processing(
            event,
            material,
            ore,
            mek_crystal,
            mek_shard,
            mek_clump,
            mek_dirty_dust,
            dust,
            ingot
        );

        minecraft_ore_ingot_smelting(event, material, ore, ingot);
        minecraft_gem_ore_smelting(event, material, ore, gem);
        minecraft_dust_smelting(event, material, dust, ingot);

        occultism_gem_ore_crushing(event, material, ore, dust, gem, shard);
        occultism_metal_ore_crushing(event, material, ore, dust, ingot);
        occultism_ingot_gem_crushing(event, material, ingot, dust, gem);

        ars_nouveau_gem_ore_crushing(event, material, ore, dust, gem, shard);
        ars_nouveau_metal_ore_crushing(event, material, ore, dust, ingot);
        ars_nouveau_ingot_gem_crushing(event, material, ingot, dust, gem);

        pedestals_gem_ore_crushing(event, material, ore, dust, shard, gem);
        pedestals_metal_ore_crushing(event, material, ore, ingot, dust);
        pedestals_ingot_gem_crushing(event, material, ingot, dust, gem);

        thermal_metal_ore_pulverizing(event, material, ore, dust, ingot);
        thermal_gem_ore_pulverizing(event, material, ore, dust, gem, shard);
        thermal_ingot_gem_pulverizing(event, material, ingot, dust, gem);
        thermal_metal_melting(event, material, block, ingot, nugget, gear, rod, plate);
        thermal_gem_melting(event, material, block, gem, gear, rod, plate);


        material_packing_unpacking(event, material, block, ingot, gem, nugget);
    });

    function astralsorcery_ore_processing_infuser(event, material, ore, ingot, gem, shard) {
        if (ore == air) {
            return;
        }

        blacklistedMaterials = ['redstone', 'lapis', 'emerald', 'diamond', 'iron'];
        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var input = `forge:ores/${material}`,
            output,
            count;
        if (shard != air) {
            output = shard;
            count = 3;
        } else if (gem != air) {
            output = gem;
            count = 5;
        } else if (ingot != air) {
            output = ingot;
            count = 3;
        } else {
            return;
        }

        switch (material) {
            case 'dimensional':
                count = 9;
                break;
            case 'fluorite':
                count = 7;
                break;
            default:
                break;
        }

        fallback_id(
            event.custom({
                type: 'astralsorcery:infuser',
                fluidInput: 'astralsorcery:liquid_starlight',
                input: {
                    tag: input
                },
                output: {
                    item: output,
                    count: count
                },
                consumptionChance: 0.1,
                duration: 100,
                consumeMultipleFluids: false,
                acceptChaliceInput: true,
                copyNBTToOutputs: false
            }),
            `${id_prefix}${arguments.callee.name}/`
        );
    }

    function bloodmagic_metal_ore_processing(event, material, ore, fragment, gravel, dust, ingot) {
        if (ore == air || ingot == air || fragment == air) {
            return;
        }

        var secondaryOutput, materialProperties;

        try {
            materialProperties = oreProcessingSecondaries[material];
        } catch (err) {
            return;
        }

        try {
            secondaryOutput = getPreferredItemInTag(
                Ingredient.of(`#bloodmagic:fragments/${materialProperties.secondary}`)
            ).id;
        } catch (err) {
            secondaryOutput = fragment;
        }

        // Ore to Fragment in ARC
        event.recipes.bloodmagic
            .arc(Item.of(fragment, 3), `#forge:ores/${material}`, '#bloodmagic:arc/explosive', [
                Item.of(fragment, 2).chance(0.25),
                Item.of(secondaryOutput, 2).chance(0.25)
            ])
            .consumeIngredient(false)
            .id(`bloodmagic:arc/fragments${material}`);

        // Fragment to Gravel in ARC
        event.recipes.bloodmagic
            .arc(gravel, `#bloodmagic:fragments/${material}`, '#bloodmagic:arc/resonator', [
                Item.of('bloodmagic:corrupted_tinydust', 1).chance(0.05),
                Item.of('bloodmagic:corrupted_tinydust', 1).chance(0.01)
            ])
            .consumeIngredient(false)
            .id(`bloodmagic:arc/gravels${material}`);

        // Gravel to Dust in ARC
        event.recipes.bloodmagic
            .arc(dust, `#bloodmagic:gravels/${material}`, '#bloodmagic:arc/cuttingfluid', [])
            .consumeIngredient(false)
            .id(`bloodmagic:arc/dustsfrom_gravel_${material}`);

        // Ore to Dust in Alchemy
        event.recipes.bloodmagic
            .alchemytable(Item.of(dust, 3), ['#bloodmagic:arc/cuttingfluid', `#forge:ores/${material}`])
            .syphon(400)
            .ticks(200)
            .upgradeLevel(1)
            .id(`bloodmagic:alchemytable/sand_${material}`);
    }
    function bloodmagic_gem_ore_processing(event, material, ore, gem, shard, dust) {
        if (ore == air) {
            return;
        }

        try {
            var materialProperties = gemProcessingProperties[material],
                count = materialProperties.bloodmagic.count,
                inputs = ['#bloodmagic:arc/cuttingfluid', `#forge:ores/${material}`];
        } catch (err) {
            return;
        }

        switch (materialProperties.output) {
            case 'dust':
                output = dust;
                break;
            case 'gem':
                output = gem;
                break;
            case 'shard':
                output = shard;
                break;
            default:
                return;
        }

        // Alchemy Table Processing
        fallback_id(
            event.recipes.bloodmagic
                .alchemytable(Item.of(output, count), inputs)
                .syphon(400)
                .ticks(200)
                .upgradeLevel(1),
            `${id_prefix}${arguments.callee.name}/`
        );
    }
    function bloodmagic_ingot_gem_crushing(event, material, ingot, dust, gem) {
        if (dust == air) {
            return;
        }

        var input,
            output = dust;
        if (ingot != air) {
            type = 'ingot';
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
            type = 'gem';
        } else {
            return;
        }

        // Ingots and Gems to Dust in ARC
        event.recipes.bloodmagic
            .arc(output, input, '#bloodmagic:arc/explosive', [])
            .consumeIngredient(false)
            .id(`bloodmagic:arc/dustsfrom_${type}_${material}`);
    }

    function create_metal_ore_processing(event, material, ore, crushed_ore, ingot, nugget) {
        if (ore == air || crushed_ore == air || ingot == air) {
            return;
        }

        var primaryOutput = crushed_ore,
            secondaryOutput,
            processingTime,
            stoneOutput = 'minecraft:cobblestone',
            primaryCount = 2,
            secondaryCount = 2,
            input = `#forge:ores/${material}`,
            materialProperties;

        try {
            materialProperties = oreProcessingSecondaries[material];
        } catch (err) {
            return;
        }

        try {
            secondaryOutput = getPreferredItemInTag(
                Ingredient.of(`#create:crushed_ores/${materialProperties.secondary}`)
            ).id;
            processingTime = materialProperties.createProcessingTime;
        } catch (err) {
            secondaryOutput = crushed_ore;
            processingTime = 400;
        }
        // Milling - Lower rates
        var primaryChance = 0.25,
            secondaryChance = 0.05;
        var outputs = [
            Item.of(primaryOutput),
            Item.of(primaryOutput, primaryCount).withChance(primaryChance),
            Item.of(secondaryOutput, secondaryCount).withChance(secondaryChance)
        ];
        event.recipes.create
            .milling(outputs, input)
            .processingTime(processingTime)
            .id(`create:milling/${material}_ore`);

        // Crushing - Higher Rates
        primaryChance = 0.6;
        secondaryChance = 0.1;
        outputs = [
            Item.of(primaryOutput),
            Item.of(primaryOutput, primaryCount).withChance(primaryChance),
            Item.of(secondaryOutput, secondaryCount).withChance(secondaryChance),
            Item.of(stoneOutput).withChance(0.125)
        ];
        event.recipes.create
            .crushing(outputs, input)
            .processingTime(processingTime)
            .id(`create:crushing/${material}_ore`);
    }

    function create_gem_ore_processing(event, material, ore, gem, dust, shard) {
        if (ore == air) {
            return;
        }

        try {
            var materialProperties = gemProcessingProperties[material],
                stoneOutput = materialProperties.stoneOutput,
                processingTime = materialProperties.create.processingTime,
                primaryCount = materialProperties.create.primaryCount,
                secondaryCount = materialProperties.create.secondaryCount,
                secondaryChance = materialProperties.create.secondaryChance,
                input = `#forge:ores/${material}`;
        } catch (err) {
            return;
        }

        switch (materialProperties.output) {
            case 'dust':
                output = dust;
                break;
            case 'gem':
                output = gem;
                break;
            case 'shard':
                output = shard;
                break;
            default:
                return;
        }
        let secondaryOutput = output;
        if (materialProperties.secondary) {
            secondaryOutput = materialProperties.secondary;
        }

        let outputs = [
            Item.of(output, primaryCount),
            Item.of(secondaryOutput, secondaryCount).withChance(secondaryChance),
            Item.of(stoneOutput).withChance(0.125)
        ];

        event.recipes.create
            .crushing(outputs, input)
            .processingTime(processingTime)
            .id(`create:crushing/${material}_ore`);
    }

    function create_ingot_gem_milling(event, material, ingot, dust, gem) {
        if (dust == air) {
            return;
        }

        var input,
            outputs = [Item.of(dust, 1)],
            processingTime = 300;
        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }

        fallback_id(
            event.recipes.create.milling(outputs, input).processingTime(processingTime),
            `${id_prefix}${arguments.callee.name}/`
        );
    }

    function create_metal_block_processing(event, material, crushed_ore, ingot, nugget) {
        if (ingot == air || crushed_ore == air) {
            return;
        }

        let output = Item.of(crushed_ore, 5),
            input = `#forge:storage_blocks/${material}`;

        // Crush Blocks to Crushed Ore
        event.recipes.create.crushing(output, input).processingTime(400).id(`create:crushing/${material}_block`);

        // Washing
        output = [Item.of(nugget, 10), Item.of(nugget, 5).withChance(0.5)];
        input = crushed_ore;

        event.recipes.create.splashing(output, input).id(`create:splashing/crushed_${material}`);

        // Smelting and Blasting
        output = ingot;
        input = `#create:crushed_ores/${material}`;

        event.blasting(output, input).xp(0.1).id(`create:blasting/${material}_ingot_from_crushed`);
        event.smelting(output, input).xp(0.1).id(`create:smelting/${material}_ingot_from_crushed`);
    }


    function emendatus_hammer_crushing(event, material, ore, dust) {
        if (ore == air || dust == air) {
            return;
        }

        event.replaceInput(
            { id: `emendatusenigmatica:dust_from_chunk/${material}` },
            `emendatusenigmatica:${material}_chunk`,
            `#forge:ores/${material}`
        );
    }

    function emendatus_shapeless_transform(event, material, ore, chunk) {
        if (ore == air || chunk == air) {
            return;
        }
        if (material == 'mana') {
            material = 'arcane';
        }

        event
            .shapeless(`emendatusenigmatica:${material}_ore`, [`emendatusenigmatica:${material}_chunk`])
            .id(`eomaw:base/emendatusenigmatica/${material}_ore`);
        event
            .shapeless(Item.of(`emendatusenigmatica:${material}_chunk`, 4), [`emendatusenigmatica:${material}_cluster`])
            .id(`emendatusenigmatica:chunk_from_cluster/${material}`);
    }

    function immersiveengineering_hammer_crushing(event, material, ore, dust, gem) {
        if (ore == air || dust == air) {
            return;
        }

        let output = dust,
            input = [`#forge:ores/${material}`],
            hammer = '#forge:tools/crafting_hammer';

        if (gem != air) {
            input.push(`#forge:gems/${material}`);
        }

        event.shapeless(output, [input, hammer]).id(`eomaw:base/enigmatica/${material}_dust`);
    }

    function immersiveengineering_gem_crushing(event, material, dust, gem) {
        if (gem == air || dust == air) {
            return;
        }

        var output = dust,
            input = `#forge:gems/${material}`;

        fallback_id(
            event.recipes.immersiveengineering.crusher(output, input).energy(2000),
            `${id_prefix}${arguments.callee.name}/`
        );
    }
    function immersiveengineering_coin_pressing(event, material, ingot, nugget, coin) {
        if (ingot == air || nugget == air || coin == air) {
            return;
        }

        var output = Item.of(coin, 3),
            input = `#forge:ingots/${material}`,
            mold = `#thermal:crafting/dies/coin`;

        // Ingots to Coins
        fallback_id(
            event.recipes.immersiveengineering.metal_press(output, input, mold),
            `${id_prefix}${arguments.callee.name}/`
        );

        // Nuggets to Coins
        output = coin;
        input = `3x #forge:nuggets/${material}`;
        fallback_id(
            event.recipes.immersiveengineering.metal_press(output, input, mold),
            `${id_prefix}${arguments.callee.name}/`
        );
    }

    function immersiveengineering_ingot_crushing(event, material, dust, ingot) {
        if (ingot == air || dust == air) {
            return;
        }

        if (material == 'signalum' || material == 'lumium' || material == 'enderium') {
            var output = dust,
                input = `#forge:ingots/${material}`;

            fallback_id(
                event.recipes.immersiveengineering.crusher(output, input).energy(2000),
                `${id_prefix}${arguments.callee.name}/`
            );
        }
    }

    function immersiveengineering_gem_ore_processing(event, material, ore, dust, gem, shard) {
        if (ore == air) {
            return;
        }

        try {
            var materialProperties = gemProcessingProperties[material],
                primaryCount = materialProperties.immersiveengineering.count,
                input = `#forge:ores/${material}`,
                primaryOutput;
        } catch (err) {
            return;
        }

        switch (materialProperties.output) {
            case 'dust':
                primaryOutput = dust;
                break;
            case 'gem':
                primaryOutput = gem;
                break;
            case 'shard':
                primaryOutput = shard;
                break;
            default:
                return;
        }

        if (materialProperties.secondary) {
            let secondaryOutput = materialProperties.secondary,
                secondaryChance = materialProperties.immersiveengineering.secondaryChance;
            event.recipes.immersiveengineering
                .crusher(Item.of(primaryOutput, primaryCount), input, [
                    Item.of(secondaryOutput).chance(secondaryChance)
                ])
                .energy(2000)
                .id(`immersiveengineering:crusher/ore_${material}`);
        } else {
            event.recipes.immersiveengineering
                .crusher(Item.of(primaryOutput, primaryCount), input)
                .energy(2000)
                .id(`immersiveengineering:crusher/ore_${material}`);
        }
    }

    function mekanism_ingot_gem_crushing(event, material, ingot, dust, gem) {
        if (dust == air) {
            return;
        }

        var input,
            output = dust;
        if (ingot != air) {
            type = 'ingot';
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
            type = 'gem';
        } else {
            return;
        }

        event.remove({
            input: input,
            mod: 'mekanism',
            type: 'mekanism:crushing'
        });

        event.recipes.mekanism.crushing(output, input).id(`mekanism:processing/${material}/to_dust`);
    }

    function mekanism_gem_ore_processing(event, material, ore, dust, gem, shard) {
        if (ore == air) {
            return;
        }

        try {
            var materialProperties = gemProcessingProperties[material],
                count = materialProperties.mekanism.count,
                input = `#forge:ores/${material}`;
        } catch (err) {
            return;
        }

        switch (materialProperties.output) {
            case 'dust':
                output = dust;
                break;
            case 'gem':
                output = gem;
                break;
            case 'shard':
                output = shard;
                break;
            default:
                return;
        }

        event.recipes.mekanism.enriching(Item.of(output, count), input).id(`mekanism:processing/${material}/from_ore`);
    }

    function mekanism_metal_ore_processing(
        event,
        material,
        ore,
        mek_crystal,
        mek_shard,
        mek_clump,
        mek_dirty_dust,
        dust,
        ingot
    ) {
        if (ore == air || ingot == air || mek_crystal == air) {
            return;
        }

        blacklistedMaterials = ['copper', 'gold', 'iron', 'lead', 'osmium', 'tin', 'uranium'];
        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        let mek_dirty_slurry = `emendatusenigmatica:dirty_${material}`,
            mek_clean_slurry = `emendatusenigmatica:clean_${material}`;

        // Dissolution
        event
            .custom({
                type: 'mekanism:dissolution',
                itemInput: { ingredient: { tag: `forge:ores/${material}` } },
                gasInput: { amount: 1, gas: 'mekanism:sulfuric_acid' },
                output: {
                    slurry: mek_dirty_slurry,
                    amount: 1000,
                    chemicalType: 'slurry'
                }
            })
            .id(`mekanism:processing/${material}/slurry/dirty`);

        // Washing
        event
            .custom({
                type: 'mekanism:washing',
                fluidInput: { amount: 5, tag: 'minecraft:water' },
                slurryInput: { amount: 1, slurry: mek_dirty_slurry },
                output: { slurry: mek_clean_slurry, amount: 1 }
            })
            .id(`mekanism:processing/${material}/slurry/clean`);

        // Crystallizing
        event
            .custom({
                type: 'mekanism:crystallizing',
                chemicalType: 'slurry',
                input: { amount: 200, slurry: mek_clean_slurry },
                output: { item: mek_crystal }
            })
            .id(`mekanism:processing/${material}/crystal/from_slurry`);

        // Injecting
        event
            .custom({
                type: 'mekanism:injecting',
                itemInput: { ingredient: { tag: `mekanism:crystals/${material}` } },
                gasInput: { amount: 1, gas: 'mekanism:hydrogen_chloride' },
                output: { item: mek_shard }
            })
            .id(`mekanism:processing/${material}/shard/from_crystal`);
        event
            .custom({
                type: 'mekanism:injecting',
                itemInput: { ingredient: { tag: `forge:ores/${material}` } },
                gasInput: { amount: 1, gas: 'mekanism:hydrogen_chloride' },
                output: { item: mek_shard, count: 4 }
            })
            .id(`mekanism:processing/${material}/shard/from_ore`);

        // Purifying
        event.recipes.mekanism
            .purifying(Item.of(mek_clump), `#mekanism:shards/${material}`, { amount: 1, gas: 'mekanism:oxygen' })
            .id(`mekanism:processing/${material}/clump/from_shard`);
        event.recipes.mekanism
            .purifying(Item.of(mek_clump, 3), `#forge:ores/${material}`, { amount: 1, gas: 'mekanism:oxygen' })
            .id(`mekanism:processing/${material}/clump/from_ore`);

        // Crushing
        event.recipes.mekanism
            .crushing(Item.of(mek_dirty_dust), `#mekanism:clumps/${material}`)
            .id(`mekanism:processing/${material}/dirty_dust/from_clump`);

        // Enriching
        event.recipes.mekanism
            .enriching(Item.of(dust), `#mekanism:dirty_dusts/${material}`)
            .id(`mekanism:processing/${material}/dust/from_dirty_dust`);
        event.recipes.mekanism
            .enriching(Item.of(dust, 2), `#forge:ores/${material}`)
            .id(`mekanism:processing/${material}/dust/from_ore`);
    }

    function minecraft_ore_ingot_smelting(event, material, ore, ingot) {
        if (ore == air || ingot == air) {
            return;
        }

        blacklistedMaterials = ['ender'];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = ingot,
            input = `#forge:ores/${material}`;

        fallback_id(event.smelting(output, input).xp(0.7), `${id_prefix}${arguments.callee.name}/`);
        fallback_id(event.blasting(output, input).xp(0.7), `${id_prefix}${arguments.callee.name}/`);
    }

    function minecraft_gem_ore_smelting(event, material, ore, gem) {
        if (ore == air || gem == air) {
            return;
        }

        blacklistedMaterials = ['amber', 'ender'];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = gem,
            input = `#forge:ores/${material}`;

        fallback_id(event.smelting(output, input).xp(0.7), `${id_prefix}${arguments.callee.name}/`);
        fallback_id(event.blasting(output, input).xp(0.7), `${id_prefix}${arguments.callee.name}/`);
    }

    function minecraft_dust_smelting(event, material, dust, ingot) {
        if (ingot == air || dust == air) {
            return;
        }

        blacklistedMaterials = ['starmetal'];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = ingot,
            input = `#forge:dusts/${material}`;

        fallback_id(event.smelting(output, input).xp(0.7), `${id_prefix}${arguments.callee.name}/`);
        fallback_id(event.blasting(output, input).xp(0.7), `${id_prefix}${arguments.callee.name}/`);
    }

    function occultism_gem_ore_crushing(event, material, ore, dust, gem, shard) {
        if (ore == air) {
            return;
        }

        try {
            var materialProperties = gemProcessingProperties[material],
                count = materialProperties.occultism.count,
                input = `forge:ores/${material}`,
                output;
        } catch (err) {
            return;
        }

        switch (materialProperties.output) {
            case 'dust':
                output = dust;
                break;
            case 'gem':
                output = gem;
                break;
            case 'shard':
                output = shard;
                break;
            default:
                return;
        }

        fallback_id(
            event.custom({
                type: 'occultism:crushing',
                ingredient: { tag: input },
                result: { item: output, count: count },
                crushing_time: 100,
                ignore_crushing_multiplier: false
            }),
            `${id_prefix}${arguments.callee.name}/`
        );
    }

    function occultism_metal_ore_crushing(event, material, ore, dust, ingot) {
        if (ore == air || ingot == air || dust == air) {
            return;
        }
        var output,
            input = `forge:ores/${material}`,
            output = dust,
            count = 2;

        event
            .custom({
                type: 'occultism:crushing',
                ingredient: { tag: input },
                result: { item: output, count: count },
                crushing_time: 100,
                ignore_crushing_multiplier: false
            })
            .id(`occultism:crushing/${material}_dust`);
    }

    function occultism_ingot_gem_crushing(event, material, ingot, dust, gem) {
        if (dust == air) {
            return;
        }

        blacklistedMaterials = ['silver'];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var input,
            output = dust;
        if (ingot != air) {
            input = `forge:ingots/${material}`;
        } else if (gem != air) {
            input = `forge:gems/${material}`;
        } else {
            return;
        }

        fallback_id(
            event.custom({
                type: 'occultism:crushing',
                ingredient: { tag: input },
                result: { item: output, count: 1 },
                crushing_time: 100,
                ignore_crushing_multiplier: true
            }),
            `${id_prefix}${arguments.callee.name}/`
        );
    }

    function ars_nouveau_gem_ore_crushing(event, material, ore, dust, gem, shard) {
        if (ore == air) {
            return;
        }

        try {
            var materialProperties = gemProcessingProperties[material],
                primaryCount = materialProperties.thermal.primaryCount,
                secondaryCount = materialProperties.thermal.secondaryCount,
                secondaryChance = materialProperties.thermal.secondaryChance,
                input = `#forge:ores/${material}`;
        } catch (err) {
            return;
        }

        switch (materialProperties.output) {
            case 'dust':
                primaryOutput = dust;
                break;
            case 'gem':
                primaryOutput = gem;
                break;
            case 'shard':
                primaryOutput = shard;
                break;
            default:
                return;
        }

        let secondaryOutput = output;

        if (materialProperties.secondary) {
            secondaryOutput = materialProperties.secondary;
        }

        event
            .custom({
                type: 'ars_nouveau:crush',
                input: Ingredient.of(input).toJson(),
                output: [
                    Item.of(primaryOutput, primaryCount).chance(1.0),
                    Item.of(secondaryOutput, secondaryCount).chance(secondaryChance)
                ]
            })
            .id(`ars_nouveau:crushing/${material}_from_ore`);
    }

    function ars_nouveau_metal_ore_crushing(event, material, ore, dust, ingot) {
        if (ore == air || ingot == air || dust == air) {
            return;
        }
        var primaryOutput = dust,
            primaryCount = 2,
            input = `#forge:ores/${material}`,
            materialProperties;

        try {
            materialProperties = oreProcessingSecondaries[material];
        } catch (err) {
            return;
        }

        try {
            secondaryOutput = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${materialProperties.secondary}`)).id;
        } catch (err) {
            secondaryOutput = dust;
        }
        event
            .custom({
                type: 'ars_nouveau:crush',
                input: Ingredient.of(input).toJson(),
                output: [Item.of(primaryOutput, primaryCount).chance(1.0), Item.of(secondaryOutput).chance(0.1)]
            })
            .id(`ars_nouveau:crushing/${material}_dust_from_ore`);
    }

    function ars_nouveau_ingot_gem_crushing(event, material, ingot, dust, gem) {
        if (dust == air) {
            return;
        }

        blacklistedMaterials = [];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var input,
            output = dust;
        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }

        event
            .custom({
                type: 'ars_nouveau:crush',
                input: Ingredient.of(input).toJson(),
                output: [Item.of(output).chance(1.0)]
            })
            .id(`ars_nouveau:crushing/${material}_dust`);
    }

    function pedestals_gem_ore_crushing(event, material, ore, dust, shard, gem) {
        if (ore == air) {
            return;
        }

        try {
            var materialProperties = gemProcessingProperties[material],
                count = materialProperties.pedestals.count,
                input = `forge:ores/${material}`,
                output;
        } catch (err) {
            return;
        }

        switch (materialProperties.output) {
            case 'dust':
                output = dust;
                break;
            case 'gem':
                output = gem;
                break;
            case 'shard':
                output = shard;
                break;
            default:
                return;
        }

        event
            .custom({
                type: 'pedestals:pedestal_crushing',
                ingredient: { tag: input },
                result: { item: output, count: count }
            })
            .id(`pedestals:pedestal_crushing/dust${material}`);
    }
    function pedestals_metal_ore_crushing(event, material, ore, ingot, dust) {
        if (ore == air || ingot == air || dust == air) {
            return;
        }
        var output,
            input = `forge:ores/${material}`,
            output = dust,
            count = 2;

        event
            .custom({
                type: 'occultism:crushing',
                ingredient: { tag: input },
                result: { item: output, count: count },
                crushing_time: 100
            })
            .id(`occultism:crushing/${material}_dust`);

        event
            .custom({
                type: 'pedestals:pedestal_crushing',
                ingredient: { tag: input },
                result: { item: output, count: count }
            })
            .id(`pedestals:pedestal_crushing/dust${material}`);
    }

    function pedestals_ingot_gem_crushing(event, material, ingot, dust, gem) {
        if (dust == air) {
            return;
        }

        var input,
            output = dust;
        if (ingot != air) {
            input = `forge:ingots/${material}`;
        } else if (gem != air) {
            input = `forge:gems/${material}`;
        } else {
            return;
        }

        fallback_id(
            event.custom({
                type: 'pedestals:pedestal_crushing',
                ingredient: {
                    tag: input
                },
                result: {
                    item: output,
                    count: 1
                }
            }),
            `${id_prefix}${arguments.callee.name}/`
        );
    }

    function thermal_metal_ore_pulverizing(event, material, ore, dust, ingot) {
        if (ore == air || dust == air || ingot == air) {
            return;
        }

        var primaryOutput = dust,
            stoneOutput = 'minecraft:gravel',
            primaryCount = 2,
            input = `#forge:ores/${material}`,
            experience = 0.2,
            materialProperties;

        try {
            materialProperties = oreProcessingSecondaries[material];
        } catch (err) {
            return;
        }

        try {
            secondaryOutput = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${materialProperties.secondary}`)).id;
        } catch (err) {
            secondaryOutput = dust;
        }

        outputs = [
            Item.of(primaryOutput, primaryCount),
            Item.of(secondaryOutput).chance(0.1),
            Item.of(stoneOutput).chance(0.2)
        ];

        if (material == 'gold') {
            outputs.push(Item.of('emendatusenigmatica:cinnabar_gem').chance(0.05));
        }

        event.recipes.thermal
            .pulverizer(outputs, input)
            .experience(experience)
            .id(`thermal:machine/pulverizer/pulverizer_${material}_ore`);
    }

    function thermal_gem_ore_pulverizing(event, material, ore, dust, gem, shard) {
        if (ore == air) {
            return;
        }

        try {
            var materialProperties = gemProcessingProperties[material],
                stoneOutput = materialProperties.stoneOutput,
                primaryCount = materialProperties.thermal.primaryCount,
                secondaryCount = materialProperties.thermal.secondaryCount,
                secondaryChance = materialProperties.thermal.secondaryChance,
                input = `#forge:ores/${material}`,
                experience = 0.2;
        } catch (err) {
            return;
        }

        switch (materialProperties.output) {
            case 'dust':
                primaryOutput = dust;
                break;
            case 'gem':
                primaryOutput = gem;
                break;
            case 'shard':
                primaryOutput = shard;
                break;
            default:
                return;
        }

        let secondaryOutput = output;

        if (materialProperties.secondary) {
            secondaryOutput = materialProperties.secondary;
        }

        outputs = [
            Item.of(primaryOutput, primaryCount),
            Item.of(secondaryOutput, secondaryCount).chance(secondaryChance),
            Item.of(stoneOutput).chance(0.2)
        ];
        /*
        event.remove({
            input: input,
            mod: 'thermal',
            type: 'thermal:pulverizer'
        });
        */
        event.recipes.thermal
            .pulverizer(outputs, input)
            .experience(experience)
            .id(`thermal:machine/pulverizer/pulverizer_${material}_ore`);
    }

    function thermal_ingot_gem_pulverizing(event, material, ingot, dust, gem) {
        if (dust == air) {
            return;
        }

        var input,
            output = dust;
        if (ingot != air) {
            type = 'ingot';
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
            type = 'gem';
        } else {
            return;
        }

        event.remove({
            input: input,
            mod: 'thermal',
            type: 'thermal:pulverizer'
        });
        fallback_id(event.recipes.thermal.pulverizer(output, input), `${id_prefix}${arguments.callee.name}/`);
    }


    function thermal_metal_melting(event, material, block, ingot, nugget, gear, rod, plate) {
        if (ingot == air) {
            return;
        }

        let modId;
        if (Fluid.exists(`materialis:molten_${material}`)) {
            modId = 'materialis';
        } else if (Fluid.exists(`emendatusenigmatica:molten_${material}`)) {
            modId = 'emendatusenigmatica';
        } else if (Fluid.exists(`kubejs:molten_${material}`)) {
            modId = 'kubejs';
        } else {
            return;
        }

        let recipes = [{ type: 'ingot', amount: 144, input: `#forge:ingots/${material}`, energy: 5000 }];
        if (nugget != air) {
            recipes.push({ type: 'nugget', amount: 16, input: `#forge:nuggets/${material}`, energy: 555 });
        }
        if (block != air) {
            recipes.push({ type: 'block', amount: 1296, input: `#forge:storage_blocks/${material}`, energy: 40000 });
        }
        if (gear != air) {
            recipes.push({ type: 'gear', amount: 576, input: `#forge:gears/${material}`, energy: 20000 });
        }
        if (rod != air) {
            recipes.push({ type: 'rod', amount: 144, input: `#forge:rods/${material}`, energy: 2500 });
        }
        if (plate != air) {
            recipes.push({ type: 'plate', amount: 144, input: `#forge:plates/${material}`, energy: 5000 });
        }

        recipes.forEach((recipe) => {
            event.recipes.thermal
                .crucible(Fluid.of(`${modId}:molten_${material}`, recipe.amount), recipe.input)
                .energy(recipe.energy)
                .id(`eomaw:base/thermal/crucible/${material}_${recipe.type}`);
        });
    }

    function thermal_gem_melting(event, material, block, gem, gear, rod, plate) {
        if (gem == air) {
            return;
        }

        let modId;
        if (Fluid.exists(`materialis:molten_${material}`)) {
            modId = 'materialis';
        } else if (Fluid.exists(`emendatusenigmatica:molten_${material}`)) {
            modId = 'emendatusenigmatica';
        } else if (Fluid.exists(`kubejs:molten_${material}`)) {
            modId = 'kubejs';
        } else {
            return;
        }

        blacklistedMaterials = ['ender'];
        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        let baseAmount = 144,
            blockAmount = 144 * 9,
            gearAmount = 144 * 4;

        if (material == 'quartz') {
            blockAmount = 144 * 4;
        }

        let recipes = [{ type: 'gem', amount: baseAmount, input: `#forge:gems/${material}`, energy: 5000 }];
        if (block != air) {
            recipes.push({
                type: 'block',
                amount: blockAmount,
                input: `#forge:storage_blocks/${material}`,
                energy: 40000
            });
        }
        if (gear != air) {
            recipes.push({ type: 'gear', amount: gearAmount, input: `#forge:gears/${material}`, energy: 20000 });
        }
        if (rod != air) {
            recipes.push({ type: 'rod', amount: baseAmount, input: `#forge:rods/${material}`, energy: 2500 });
        }
        if (plate != air) {
            recipes.push({ type: 'plate', amount: baseAmount, input: `#forge:plates/${material}`, energy: 5000 });
        }

        recipes.forEach((recipe) => {
            event.recipes.thermal
                .crucible(Fluid.of(`${modId}:molten_${material}`, recipe.amount), recipe.input)
                .energy(recipe.energy)
                .id(`eomaw:base/thermal/crucible/${material}_${recipe.type}`);
        });
    }

    function material_packing_unpacking(event, material, block, ingot, gem, nugget) {
        blacklistedMaterials = ['ender', 'amber', 'quartz'];
        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        let recipes = [];

        if (block !== air && ingot !== air) {
            //compact ingot to block
            recipes.push({
                output: block,
                input: `9x #forge:ingots/${material}`,
                mold: '#thermal:crafting/dies/packing_3x3',
                id_suffix: `${material}_ingots_to_block`
            });

            //split block to ingot
            recipes.push({
                output: Item.of(ingot, 9),
                input: `#forge:storage_blocks/${material}`,
                mold: '#thermal:crafting/dies/unpacking',
                id_suffix: `${material}_block_to_ingots`
            });
        }

        if (block !== air && gem !== air) {
            //compact gem to block
            recipes.push({
                output: block,
                input: `9x #forge:gems/${material}`,
                mold: '#thermal:crafting/dies/packing_3x3',
                id_suffix: `${material}_gems_to_block`
            });

            //split block to gem
            recipes.push({
                output: Item.of(gem, 9),
                input: `#forge:storage_blocks/${material}`,
                mold: '#thermal:crafting/dies/unpacking',
                id_suffix: `${material}_block_to_gems`
            });
        }

        if (ingot !== air && nugget !== air) {
            //compact nugget to ingot
            recipes.push({
                output: ingot,
                input: `9x #forge:nuggets/${material}`,
                mold: '#thermal:crafting/dies/packing_3x3',
                id_suffix: `${material}_nuggets_to_ingot`
            });

            //split ingot to nugget
            recipes.push({
                output: Item.of(nugget, 9),
                input: `#forge:ingots/${material}`,
                mold: '#thermal:crafting/dies/unpacking',
                id_suffix: `${material}_ingot_to_nuggets`
            });
        }

        recipes.forEach((recipe) => {
            event.recipes.thermal
                .press(recipe.output, [recipe.input, recipe.mold])
                .energy(2400)
                .id(`${id_prefix}thermal/press/${recipe.id_suffix}`);

            event.recipes.immersiveengineering
                .metal_press(recipe.output, recipe.input, recipe.mold)
                .id(`${id_prefix}immersiveengineering/metal_press/${recipe.id_suffix}`);
        });
    }
});
