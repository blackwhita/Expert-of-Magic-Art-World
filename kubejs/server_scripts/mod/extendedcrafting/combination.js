onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                { item: 'extendedcrafting:basic_component' },
                { item: 'extendedcrafting:basic_component' },
                { item: 'eidolon:shadow_gem' },
                { item: 'thermal:machine_crafter' },
                { item: 'extendedcrafting:basic_component' },
                { item: 'extendedcrafting:basic_component' },
                { item: 'thermal:machine_crafter' },
                { item: 'eidolon:shadow_gem' }
            ],
            catalyst: { item: 'extendedcrafting:basic_catalyst' },
            powerCost: 10000,
            powerRate: 1000,
            result: { item: 'extendedcrafting:basic_table' },
            id: 'extendedcrafting:basic_table'
        },
        {
            inputs: [
                { item: 'extendedcrafting:advanced_component' },
                { item: 'extendedcrafting:advanced_component' },
                { item: 'mythicbotany:kvasir_mead' },
                { item: 'extendedcrafting:basic_table' },
                { item: 'extendedcrafting:advanced_component' },
                { item: 'extendedcrafting:advanced_component' },
                { item: 'extendedcrafting:basic_table' },
                { item: 'mythicbotany:kvasir_mead' }
            ],
            catalyst: { item: 'extendedcrafting:advanced_catalyst' },
            powerCost: 50000,
            powerRate: 5000,
            result: { item: 'extendedcrafting:advanced_table' },
            id: 'extendedcrafting:advanced_table'
        },
        {
            inputs: [
                { item: 'extendedcrafting:elite_component' },
                { item: 'extendedcrafting:elite_component' },
                { item: 'mekanism:pellet_polonium' },
                { item: 'extendedcrafting:advanced_table' },
                { item: 'extendedcrafting:elite_component' },
                { item: 'extendedcrafting:elite_component' },
                { item: 'extendedcrafting:advanced_table' },
                { item: 'mekanism:pellet_polonium' }
            ],
            catalyst: { item: 'extendedcrafting:elite_catalyst' },
            powerCost: 100000,
            powerRate: 10000,
            result: { item: 'extendedcrafting:elite_table' },
            id: 'extendedcrafting:elite_table'
        },
        {
            inputs: [
                { item: 'extendedcrafting:ultimate_component' },
                { item: 'extendedcrafting:ultimate_component' },
                { item: 'mekanismmatter:universal_matter' },
                { item: 'extendedcrafting:elite_table' },
                { item: 'extendedcrafting:ultimate_component' },
                { item: 'extendedcrafting:ultimate_component' },
                { item: 'extendedcrafting:elite_table' },
                { item: 'mekanismmatter:universal_matter' }
            ],
            catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
            powerCost: 500000,
            powerRate: 50000,
            result: { item: 'extendedcrafting:ultimate_table' },
            id: 'extendedcrafting:ultimate_table'
        },
        {
            inputs: [
                { item: 'mekanism:ultimate_control_circuit' },
                { item: 'mekanism:ultimate_control_circuit' },
                { item: 'extendedcrafting:the_ultimate_ingot' },
                { item: 'extendedcrafting:the_ultimate_ingot' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:pellet_polonium' },
                { item: 'mekanism:pellet_polonium' },
                { item: 'mekanism:pellet_polonium' },
                { item: 'mekanism:pellet_polonium' },
                Item.of('psi:psimetal_exosuit_boots').ignoreNBT(),
                Item.of('mythicbotany:alfsteel_boots').ignoreNBT()
            ],
            catalyst: Item.of('pneumaticcraft:pneumatic_boots').ignoreNBT(),
            powerCost: 1000000,
            powerRate: 100000,
            result: { item: 'mekanism:mekasuit_boots' },
            id: 'mekanism:mekasuit_boots'
        },
        {
            inputs: [
                { item: 'mekanism:ultimate_control_circuit' },
                { item: 'mekanism:ultimate_control_circuit' },
                { item: 'extendedcrafting:the_ultimate_ingot' },
                { item: 'extendedcrafting:the_ultimate_ingot' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:pellet_polonium' },
                { item: 'mekanism:pellet_polonium' },
                { item: 'mekanism:pellet_polonium' },
                { item: 'mekanism:pellet_polonium' },
                Item.of('psi:psimetal_exosuit_leggings').ignoreNBT(),
                Item.of('mythicbotany:alfsteel_leggings').ignoreNBT()
            ],
            catalyst: Item.of('pneumaticcraft:pneumatic_leggings').ignoreNBT(),
            powerCost: 1000000,
            powerRate: 100000,
            result: { item: 'mekanism:mekasuit_pants' },
            id: 'mekanism:mekasuit_pants'
        },
        {
            inputs: [
                { item: 'mekanism:ultimate_control_circuit' },
                { item: 'mekanism:ultimate_control_circuit' },
                { item: 'extendedcrafting:the_ultimate_ingot' },
                { item: 'extendedcrafting:the_ultimate_ingot' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:pellet_polonium' },
                { item: 'mekanism:pellet_polonium' },
                { item: 'mekanism:pellet_polonium' },
                { item: 'mekanism:pellet_polonium' },
                Item.of('psi:psimetal_exosuit_chestplate').ignoreNBT(),
                Item.of('mythicbotany:alfsteel_chestplate').ignoreNBT()
            ],
            catalyst: Item.of('pneumaticcraft:pneumatic_chestplate').ignoreNBT(),
            powerCost: 1000000,
            powerRate: 100000,
            result: { item: 'mekanism:mekasuit_bodyarmor' },
            id: 'mekanism:mekasuit_bodyarmor'
        },
        {
            inputs: [
                { item: 'mekanism:ultimate_control_circuit' },
                { item: 'mekanism:ultimate_control_circuit' },
                { item: 'extendedcrafting:the_ultimate_ingot' },
                { item: 'extendedcrafting:the_ultimate_ingot' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:pellet_polonium' },
                { item: 'mekanism:pellet_polonium' },
                { item: 'mekanism:pellet_polonium' },
                { item: 'mekanism:pellet_polonium' },
                Item.of('psi:psimetal_exosuit_helmet').ignoreNBT(),
                Item.of('mythicbotany:alfsteel_helmet').ignoreNBT()
            ],
            catalyst: Item.of('pneumaticcraft:pneumatic_helmet').ignoreNBT(),
            powerCost: 1000000,
            powerRate: 100000,
            result: { item: 'mekanism:mekasuit_helmet' },
            id: 'mekanism:mekasuit_helmet'
        },
        {
            inputs: [
                { item: 'mekanism:ultimate_control_circuit' },
                { item: 'kubejs:high_steel_ingot' },
                { item: 'mekanism:ultimate_control_circuit' },
                { item: 'kubejs:high_steel_ingot' },
                { item: 'mekanism:ultimate_control_circuit' },
                { item: 'kubejs:high_steel_ingot' },
                { item: 'mekanism:ultimate_control_circuit' },
                { item: 'kubejs:high_steel_ingot' }
            ],
            catalyst: { item: 'rftoolscontrol:cpu_core_2000' },
            powerCost: 100000,
            powerRate: 10000,
            result: { item: 'kubejs:novaextended-ark_circuit-layer0' },
            id: 'kubejs:novaextended-ark_circuit-layer0'
        },
        {
            inputs: [
                { item: 'kubejs:novaextended-ark_circuit-layer0' },
                { item: 'kubejs:novaextended-ark_circuit-layer0' },
                { item: 'mekanismmatter:universal_matter' },
                { item: 'mekanismmatter:universal_matter' },
                { item: 'mekanismmatter:universal_matter' },
                { item: 'mekanismmatter:universal_matter' }
            ],
            catalyst: { item: 'rftoolscontrol:cpu_core_2000' },
            powerCost: 1000000,
            powerRate: 100000,
            result: { item: 'kubejs:novaextended-extremecircuit-layer0' },
            id: 'kubejs:novaextended-extremecircuit-layer0'
        },
    ];

    recipes.forEach((recipe) => {
        let ingredient = [];
        recipe.inputs.forEach((input) => {
            ingredient.push(input);
        });
        event
            .custom({
                type: 'extendedcrafting:combination',
                powerCost: recipe.powerCost,
                powerRate: recipe.powerRate,
                input: recipe.catalyst,
                ingredients: ingredient,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
