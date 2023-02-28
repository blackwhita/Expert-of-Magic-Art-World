onEvent('recipes', (event) => {
    const mumetal = [
        'pneumaticcraft:advanced_pcb',
        'mekanism:advanced_control_circuit',
        'bloodmagic:blankslate', 
        'bloodmagic:reinforcedslate', 
        'bloodmagic:infusedslate', 
        'bloodmagic:demonslate',
        'bloodmagic:etherealslate',
        'bloodmagic:airscribetool',
        'bloodmagic:firescribetool',
        'bloodmagic:waterscribetool',
        'bloodmagic:earthscribetool',
        'bloodmagic:duskscribetool',
        'bloodmagic:soulsnare'
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output });
    }); 
    const recipes = [
        {
            input: 'kubejs:broken_advanced_pcb',
            output: 'pneumaticcraft:advanced_pcb',
            syphon: 10000,
            altarLevel: 4,
            consumptionRate: 50,
            drainRate: 1,
        },
        {
            input: 'mekanism:basic_control_circuit',
            output: 'mekanism:advanced_control_circuit',
            syphon: 1000,
            altarLevel: 2,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'botania:livingrock',
            output: 'bloodmagic:blankslate',
            syphon: 1000,
            altarLevel: 0,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'pneumaticcraft:compressed_stone',
            output: 'bloodmagic:reinforcedslate',
            syphon: 2000,
            altarLevel: 1,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'botania:elf_quartz',
            output: 'bloodmagic:infusedslate',
            syphon: 3000,
            altarLevel: 2,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'create:shadow_steel',
            output: 'bloodmagic:demonslate',
            syphon: 5000,
            altarLevel: 3,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'eidolon:shadow_gem',
            output: 'bloodmagic:etherealslate',
            syphon: 8000,
            altarLevel: 4,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'botania:rune_air',
            output:'bloodmagic:airscribetool',
            syphon: 5000,
            altarLevel: 2,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'botania:rune_fire',
            output: 'bloodmagic:firescribetool',
            syphon: 5000,
            altarLevel: 2,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'botania:rune_water',
            output: 'bloodmagic:waterscribetool',
            syphon: 5000,
            altarLevel: 2,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'botania:rune_earth',
            output: 'bloodmagic:earthscribetool',
            syphon: 5000,
            altarLevel: 2,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'ars_nouveau:whelp_charm',
            output: 'bloodmagic:duskscribetool',
            syphon: 8000,
            altarLevel: 3,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'ars_nouveau:end_fiber',
            output: 'bloodmagic:soulsnare',
            syphon: 1000,
            altarLevel: 0,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'minecraft:nether_star',
            output: '8x astralsorcery:aquamarine',
            syphon: 10000,
            altarLevel: 3,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'kubejs:overlay_mana_input',
            output: 'masterfulmachinery:eroded_altar_mana_port_botania_mana_input',
            syphon: 10000,
            altarLevel: 2,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'kubejs:overlay_inputbus',
            output: 'masterfulmachinery:eroded_altar_item_port_items_input',
            syphon: 10000,
            altarLevel: 2,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'kubejs:overlay_outputbus',
            output: 'masterfulmachinery:eroded_altar_item_port_items_output',
            syphon: 10000,
            altarLevel: 2,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'kubejs:overlay_fluidinputhatch',
            output: 'masterfulmachinery:eroded_altar_fluid_port_fluids_input',
            syphon: 10000,
            altarLevel: 2,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'kubejs:overlay_controller',
            output: 'masterfulmachinery:eroded_altar_controller',
            syphon: 10000,
            altarLevel: 2,
            consumptionRate: 30,
            drainRate: 1,
        },
        {
            input: 'astralsorcery:aquamarine',
            output: 'eidolon:shadow_gem',
            syphon: 50000,
            altarLevel: 4,
            consumptionRate: 100,
            drainRate: 1,
        },
        {
            input: 'mythicbotany:alfsteel_ingot',
            output: 'astralsorcery:starmetal_ingot',
            syphon: 10000,
            altarLevel: 4,
            consumptionRate: 100,
            drainRate: 1,
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .altar(recipe.output, recipe.input)
            .upgradeLevel(recipe.altarLevel)
            .altarSyphon(recipe.syphon)
            .consumptionRate(recipe.consumptionRate)
            .drainRate(recipe.drainRate)
            //.id(recipe.id);
    });
});
