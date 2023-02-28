onEvent('recipes', (event) => {
    event.remove({ output: 'thermal:energy_cell_frame' });
    event.remove({ output: 'thermal:fluid_cell_frame' });
    event.remove({ output: 'integrateddynamics:cable' });
    event.remove({ output: 'extendedcrafting:redstone_ingot' });
    event.remove({ output: 'refinedstorage:machine_casing' });
    const recipes = [
        {
            input: 'industrialforegoing:machine_frame_pity',
            fluid: Fluid.of('emendatusenigmatica:molten_cast_iron', 1000),
            output: 'thermal:energy_cell_frame',
        },
        {
            input: 'industrialforegoing:machine_frame_pity',
            fluid: Fluid.of('thermal:redstone', 1000),
            output: 'thermal:fluid_cell_frame',
        },
        {
            input: 'refinedstorage:cable',
            fluid: Fluid.of('integrateddynamics:menril_resin', 100),
            output: 'integrateddynamics:cable',
        },
        {
            input: 'minecraft:iron_ingot',
            fluid: Fluid.of('emendatusenigmatica:molten_redstone', 100),
            output: 'extendedcrafting:redstone_ingot',
        },
        {
            input: 'rftoolsbase:machine_frame',
            fluid: Fluid.of('emendatusenigmatica:molten_cast_iron', 1000),
            output: 'refinedstorage:machine_casing',
        },
        {
            input: 'masterfulmachinery:assembly_machine_mk1_controller',
            fluid: Fluid.of('kubejs:molten_black_iron', 1000),
            output: 'masterfulmachinery:assembly_machine_mk2_controller',
        },
        {
            input: 'masterfulmachinery:assembly_machine_mk1_item_port_items_input',
            fluid: Fluid.of('kubejs:molten_black_iron', 1000),
            output: 'masterfulmachinery:assembly_machine_mk2_item_port_items_input',
        },
        {
            input: 'masterfulmachinery:assembly_machine_mk1_item_port_items_output',
            fluid: Fluid.of('kubejs:molten_black_iron', 1000),
            output: 'masterfulmachinery:assembly_machine_mk2_item_port_items_output',
        },
        {
            input: 'masterfulmachinery:assembly_machine_mk1_energy_port_energy_input',
            fluid: Fluid.of('kubejs:molten_black_iron', 1000),
            output: 'masterfulmachinery:assembly_machine_mk2_energy_port_energy_input',
        },
        {
            input: 'masterfulmachinery:blast_starlight_fluid_port_fluids_input',
            fluid: Fluid.of('kubejs:molten_black_iron', 1000),
            output: 'masterfulmachinery:assembly_machine_mk2_fluid_port_fluids_input',
        },
        {
            input: 'masterfulmachinery:blast_starlight_starlight_port_astral_starlight_input',
            fluid: Fluid.of('kubejs:molten_black_iron', 1000),
            output: 'masterfulmachinery:assembly_machine_mk2_starlight_port_astral_starlight_input',
        },
        {
            input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:bee' }).weakNBT().toJson(),
            fluid: Fluid.of('mekanism:brine', 1000),
            output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:salt_bee' }).toJson(),
        },
        {
            input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:salt_bee' }).weakNBT().toJson(),
            fluid: Fluid.of('mekanism:lithium', 1000),
            output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:lithium_bee' }).toJson(),
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input])//.id(recipe.id);
    });
});