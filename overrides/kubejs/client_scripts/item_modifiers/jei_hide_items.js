onEvent('jei.hide.items', (event) => {
    materialsToUnify.forEach((material) => {
        if (material == 'iesnium' || material == 'graphite' || material == 'hop_graphite') {
            return;
        }
        itemsToHide.push(
            'occultism:' + material + '_ingot',
            'occultism:' + material + '_ore',
            'occultism:' + material + '_dust',
            'occultism:' + material + '_nugget',
            'occultism:' + material + '_block',
            'immersiveengineering:ingot_' + material,
            'immersiveengineering:dust_' + material,
            'immersiveengineering:nugget_' + material,
            'immersiveengineering:stick_' + material,
            'mekanism:nugget_' + material,
            'mekanism:dust_' + material,
            'mekanism:ingot_' + material,
            'mekanism:block_' + material,
            'thermal:' + material + '_block',
            'steampowered:'+ material +'_ingot',
            'steampowered:'+ material +'_sheet',
        );
    });

    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });
    event.hide(disabledItem);

    disabledItems.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    const items = [
        'masterfulmachinery:assembly_machine_mk2_energy_port_energy_output', 
        'masterfulmachinery:blast_starlight_fluid_port_fluids_output', 
        'masterfulmachinery:heterochromatic_compound_spinny_port_create_rotation_output', 
        'masterfulmachinery:heterochromatic_compound_energy_port_energy_output', 
        'masterfulmachinery:assembly_machine_mk1_high_pressure_port_pncr_pressure_output', 
        'masterfulmachinery:assembly_machine_mk1_spinny_port_create_rotation_output', 
        'masterfulmachinery:assembly_machine_mk1_energy_port_energy_output', 
        'masterfulmachinery:industrial_assembly_machine_energy_port_energy_output', 
        'create:flywheel', 
        'create:furnace_engine', 
        'masterfulmachinery:assembly_machine_mk2_energy_port_energy_output', 
        'masterfulmachinery:assembly_machine_mk2_starlight_port_astral_starlight_output', 
        'masterfulmachinery:industrial_assembly_machine_fluid_port_fluids_output', 
        'masterfulmachinery:assembly_machine_mk2_fluid_port_fluids_output', 
        'masterfulmachinery:Deborah_fluid_port_fluids_output', 
        'masterfulmachinery:eroded_altar_mana_port_botania_mana_output', 
        'masterfulmachinery:eroded_altar_fluid_port_fluids_output', 
        'masterfulmachinery:blast_starlight_starlight_port_astral_starlight_output',
        'ftbjarmod:cast_iron_gear',
        'ftbjarmod:cast_iron_ingot'
    ];
    items.forEach((disabledItem) => {
            event.hide(disabledItem);
    });
    event.hide(disabledItem);


    colors.forEach((color) => {
        event.hide('/refinedstorage:' + color + '\\w/');
    });
});