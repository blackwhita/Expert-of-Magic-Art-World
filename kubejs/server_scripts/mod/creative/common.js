onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('create:creative_fluid_tank', 2),
            inputs: ['mekanism:creative_fluid_tank'],
            id: 'create:creative_fluid_tank'
        },
        {
            output: Item.of('thermal:fluid_tank_creative_augment', 2),
            inputs: ['create:creative_fluid_tank'],
            id: 'thermal:fluid_tank_creative_augment'
        },
        {
            output: Item.of('mekanism:creative_fluid_tank', 2),
            inputs: ['thermal:fluid_tank_creative_augment'],
            id: 'mekanism:creative_fluid_tank_1'
        },
        {
            output: Item.of('create:creative_crate', 2),
            inputs: ['storagedrawers:creative_vending_upgrade'],
            id: 'create:creative_crate'
        },
        {
            output: Item.of('mekanism:creative_bin', 2),
            inputs: ['create:creative_crate'],
            id: 'mekanism:creative_bin'
        },
        {
            output: Item.of('storagedrawers:creative_vending_upgrade', 2),
            inputs: ['mekanism:creative_bin'],
            id: 'storagedrawers:creative_vending_upgrade_1'
        },
        {
            output: Item.of('integrateddynamics:energy_battery_creative', 2),
            inputs: ['mekanism:creative_energy_cube'],
            id: 'integrateddynamics:energy_battery_creative'
        },
        {
            output: Item.of('immersiveengineering:capacitor_creative', 2),
            inputs: ['integrateddynamics:energy_battery_creative'],
            id: 'immersiveengineering:capacitor_creative'
        },
        {
            output: Item.of('rftoolspower:dimensionalcell_creative', 2),
            inputs: ['immersiveengineering:capacitor_creative'],
            id: 'rftoolspower:dimensionalcell_creative'
        },
        {
            output: Item.of('mekanism:creative_energy_cube', 2),
            inputs: ['rftoolspower:dimensionalcell_creative'],
            id: 'mekanism:creative_energy_cube_1'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'creativecrafter:creative_crafter',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'extendedcrafting:the_ultimate_ingot',
                B: 'extrastorage:netherite_crafter'
            },
            id: 'creativecrafter:creative_crafter'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
