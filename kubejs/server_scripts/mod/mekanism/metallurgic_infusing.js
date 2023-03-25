onEvent('recipes', (event) => {
    const mumetal = [
        'mekanism:alloy_infused',
        'mekanism:basic_control_circuit',
        'mekanism:alloy_reinforced',
        'mekanism:alloy_atomic',
        'thermal:rf_coil'
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output  });
    });
         recipes = [
        {
            output: 'thermal:rf_coil',
            input: 'naturesaura:tainted_gold',
            infusionInput: 'mekanism:redstone',
            infusionAmount: 80,
        },
        {
            output: 'mekanism:alloy_infused',
            input: 'kubejs:high_steel_ingot',
            infusionInput: 'mekanism:redstone',
            infusionAmount: 20,
        },
        {
            output: 'mekanism:basic_control_circuit',
            input: 'pneumaticcraft:printed_circuit_board',
            infusionInput: 'mekanism:redstone',
            infusionAmount: 40,
        },
        {
            output: 'mekanism:alloy_reinforced',
            input: 'botania:manasteel_ingot',
            infusionInput: 'mekanism:diamond',
            infusionAmount: 40,
        },
        {
            output: 'mekanism:alloy_atomic',
            input: 'astralsorcery:starmetal_ingot',
            infusionInput: 'mekanism:refined_obsidian',
            infusionAmount: 40,
        },
        /*{
            output: 'kubejs:novaextended-ark_circuit-layer0',
            input: 'mekanism:ultimate_control_circuit',
            infusionInput: 'kubejs:high_steel_ingot',
            infusionAmount: 40,
        },
        {
            output: 'kubejs:novaextended-extremecircuit-layer0',
            input: 'kubejs:novaextended-ark_circuit-layer0',
            infusionInput: 'mekanismmatter:universal_matter',
            infusionAmount: 40,
        }*/
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanism
            .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
            //.id(recipe.id);
    });
});
