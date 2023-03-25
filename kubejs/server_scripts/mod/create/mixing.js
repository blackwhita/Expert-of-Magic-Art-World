onEvent('recipes', (event) => {
    event.remove({ output: 'ars_nouveau:end_fiber'  });
    event.remove({ output: 'powah:dielectric_paste'  });
    event.remove({ output: 'refinedstorage:quartz_enriched_iron'  });
    const recipes = [
        {
            superheated: true,
            inputs: ['ars_nouveau:blaze_fiber','minecraft:chorus_flower',Item.of('minecraft:popped_chorus_fruit', 2),Fluid.of("minecraft:lava", 500)],
            output: Item.of('ars_nouveau:end_fiber', 1)
        },
        {
            superheated: true,
            inputs: [Item.of('pneumaticcraft:plastic', 4),'minecraft:clay_ball',Fluid.of("minecraft:lava", 500)],
            output: Item.of('powah:dielectric_paste', 4)
        },
        {
            heated: true,
            inputs: [Item.of('minecraft:warped_wart_block', 4),'pneumaticcraft:ingot_iron_compressed','minecraft:nether_brick'],
            output: Item.of('rainbowcompound:warpedite_ingot', 1)
        },
        {
            heated: true,
            inputs: [Item.of('minecraft:slime_ball', 4),'minecraft:gold_ingot'],
            output: Item.of('rainbowcompound:slimeite_ingot', 1)
        },
        //
        {
            //heated: false,
            inputs: ['minecraft:andesite','minecraft:quartz'],
            output: Item.of('astralsorcery:marble_raw', 1)
        },
        {
            heated: true,
            inputs: [Item.of('minecraft:quartz', 3),'minecraft:iron_ingot'],
            output: Item.of('refinedstorage:quartz_enriched_iron', 4)
        },
        {
            heated: true,
            inputs: [Item.of('minecraft:string', 2),'minecraft:slime_ball'],
            output: Item.of('refinedstorage:processor_binding', 8)
        },
        {
            heated: true,
            inputs: ['kubejs:overlay_inputbus',Fluid.of('resourcefulbees:honey', 500)],
            output: Item.of('masterfulmachinery:deborah_item_port_items_input', 1)
        },
        {
            heated: true,
            inputs: ['kubejs:overlay_outputbus',Fluid.of('resourcefulbees:honey', 500)],
            output: Item.of('masterfulmachinery:deborah_item_port_items_output', 1)
        },
        {
            heated: true,
            inputs: ['kubejs:overlay_fluidinputhatch',Fluid.of('resourcefulbees:honey', 500)],
            output: Item.of('masterfulmachinery:deborah_fluid_port_fluids_input', 1)
        },
        {
            heated: true,
            inputs: ['kubejs:overlay_controller',Fluid.of('resourcefulbees:honey', 500)],
            output: Item.of('masterfulmachinery:deborah_controller', 1)
        },
        {
            heated: true,
            inputs: ['#forge:ingots/copper','#forge:ingots/zinc'],
            output: Item.of('#forge:ingots/brass', 2)
        },
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.mixing(recipe.output, recipe.inputs)//.id(recipe.id);

        if (recipe.heated) {
            re.heated();
        } else if (recipe.superheated) {
            re.superheated();
        } else {
            //unheated
        }
    });
});
