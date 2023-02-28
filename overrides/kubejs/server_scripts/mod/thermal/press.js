onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [Item.of('extendedcrafting:black_iron_ingot'), /*Ingredient.of('#thermal:crafting/dies/packing_2x2')*/],
            output: Item.of('extendedcrafting:black_iron_slate'),
            energy: 1000,
        },
        {
            inputs: [Item.of('refinedstorage:raw_advanced_processor'), Ingredient.of('thermal:press_coin_die')],
            output: Item.of('refinedstorage:advanced_processor'),
            energy: 1000,
        },
        {
            inputs: [Item.of('refinedstorage:raw_improved_processor'), Ingredient.of('thermal:press_coin_die')],
            output: Item.of('refinedstorage:improved_processor'),
            energy: 1000,
        },
        {
            inputs: [Item.of('extrastorage:raw_neural_processor'), Ingredient.of('thermal:press_coin_die')],
            output: Item.of('extrastorage:neural_processor'),
            energy: 1000,
        },
        {
            inputs: [Item.of('refinedstorage:raw_basic_processor'), Ingredient.of('thermal:press_coin_die')],
            output: Item.of('refinedstorage:basic_processor'),
            energy: 1000,
        },
        {
            inputs: [Item.of('minecraft:blaze_powder',8), Ingredient.of('immersiveengineering:mold_rod')],
            output: Item.of('minecraft:blaze_rod'),
            energy: 5000,
        },
    ];






///////////////////////////////////////////////////////////////////////////////////////
    /*emendatusenigmatica_materials_plate_or_rod.forEach((items) => {
        recipes.push(
            {
            inputs: [Item.of(`emendatusenigmatica:${items}_ingot`), Ingredient.of('immersiveengineering:mold_plate')],
            output: Item.of(`emendatusenigmatica:${items}_plate`),
            energy: 1000,
        },
        {
            inputs: [Item.of(`4x emendatusenigmatica:${items}_ingot`), Ingredient.of('immersiveengineering:mold_gear')],
            output: Item.of(`emendatusenigmatica:${items}_gear`),
            energy: 4000,
        },
        {
            inputs: [Item.of(`emendatusenigmatica:${items}_ingot`), Ingredient.of('immersiveengineering:mold_rod')],
            output: Item.of(`emendatusenigmatica:${items}_rod`),
            energy: 2000,
        }
        );
    });

    emendatusenigmatica_gem_plate_or_rod.forEach((items_1) => {
        recipes.push(
            {
            inputs: [Item.of(`emendatusenigmatica:${items_1}_gem`), Ingredient.of('immersiveengineering:mold_plate')],
            output: Item.of(`emendatusenigmatica:${items_1}_plate`),
            energy: 1000,
        },
        {
            inputs: [Item.of(`4x emendatusenigmatica:${items_1}_gem`), Ingredient.of('immersiveengineering:mold_gear')],
            output: Item.of(`emendatusenigmatica:${items_1}_gear`),
            energy: 4000,
        },
        {
            inputs: [Item.of(`emendatusenigmatica:${items_1}_gem`), Ingredient.of('immersiveengineering:mold_rod')],
            output: Item.of(`emendatusenigmatica:${items_1}_rod`),
            energy: 2000,
        }
        );
    });

    minecraft_materials_plate_or_rod.forEach((items_2) => {
        recipes.push(
            {
            inputs: [Item.of(`minecraft:${items_2}_ingot`), Ingredient.of('immersiveengineering:mold_plate')],
            output: Item.of(`emendatusenigmatica:${items_2}_plate`),
            energy: 1000,
        },
        {
            inputs: [Item.of(`4x minecraft:${items_2}_ingot`), Ingredient.of('immersiveengineering:mold_gear')],
            output: Item.of(`emendatusenigmatica:${items_2}_gear`),
            energy: 4000,
        },
        {
            inputs: [Item.of(`minecraft:${items_2}_ingot`), Ingredient.of('immersiveengineering:mold_rod')],
            output: Item.of(`emendatusenigmatica:${items_2}_rod`),
            energy: 2000,
        }
        );
    });

    thermal_extra_materials_plate_or_rod.forEach((items_3) => {
        recipes.push(
            {
            inputs: [Item.of(`thermal_extra:${items_3}_ingot`), Ingredient.of('immersiveengineering:mold_plate')],
            output: Item.of(`thermal_extra:${items_3}_plate`),
            energy: 1000,
        },
        {
            inputs: [Item.of(`4x thermal_extra:${items_3}_ingot`), Ingredient.of('immersiveengineering:mold_gear')],
            output: Item.of(`thermal_extra:${items_3}_gear`),
            energy: 4000,
        }
        );
    });
    //绿宝石
    recipes = [
        {
            inputs: [Item.of('minecraft:emerald'), Ingredient.of('immersiveengineering:mold_plate')],
            output: Item.of('emendatusenigmatica:emerald_plate'),
            energy: 1000,
        },
        {
            inputs: [Item.of('4x minecraft:emerald'), Ingredient.of('immersiveengineering:mold_gear')],
            output: Item.of('emendatusenigmatica:emerald_gear'),
            energy: 4000,
        },
        {
            inputs: [Item.of('minecraft:emerald'), Ingredient.of('immersiveengineering:mold_rod')],
            output: Item.of('emendatusenigmatica:emerald_rod'),
            energy: 2000,
        },
    //钻石
        {
            inputs: [Item.of('minecraft:diamond'), Ingredient.of('immersiveengineering:mold_plate')],
            output: Item.of('emendatusenigmatica:diamond_plate'),
            energy: 1000,
        },
        {
            inputs: [Item.of('4x minecraft:diamond'), Ingredient.of('immersiveengineering:mold_gear')],
            output: Item.of('emendatusenigmatica:diamond_gear'),
            energy: 4000,
        },
        {
            inputs: [Item.of('minecraft:diamond'), Ingredient.of('immersiveengineering:mold_rod')],
            output: Item.of('emendatusenigmatica:diamond_rod'),
            energy: 2000,
        },
    //青金石 
        {
            inputs: [Item.of('minecraft:lapis_lazuli'), Ingredient.of('immersiveengineering:mold_plate')],
            output: Item.of('emendatusenigmatica:lapis_plate'),
            energy: 1000,
        },
        {
            inputs: [Item.of('4x minecraft:lapis_lazuli'), Ingredient.of('immersiveengineering:mold_gear')],
            output: Item.of('emendatusenigmatica:lapis_gear'),
            energy: 4000,
        },
        {
            inputs: [Item.of('minecraft:lapis_lazuli'), Ingredient.of('immersiveengineering:mold_rod')],
            output: Item.of('emendatusenigmatica:lapis_rod'),
            energy: 2000,
        },
    //下届合金锭
        {
            inputs: [Item.of('minecraft:netherite_ingot'), Ingredient.of('immersiveengineering:mold_plate')],
            output: Item.of('thermal:netherite_plate'),
            energy: 1000,
        },
        {
            inputs: [Item.of('4x minecraft:netherite_ingot'), Ingredient.of('immersiveengineering:mold_gear')],
            output: Item.of('thermal:netherite_gear'),
            energy: 4000,
        }
    ];*/





    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.output, recipe.inputs).energy(recipe.energy)//.id(recipe.id);${items}
    });
});//
