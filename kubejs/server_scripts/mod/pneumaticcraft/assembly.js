onEvent('recipes', (event) => {
    const mumetal = [
        'mekanism:elite_control_circuit',
    ]
    mumetal.forEach((output) => {
        event.remove({ output: output  });
    });
    const recipes = [
        {
            input: { item: 'kubejs:broken_advanced_pcb', count: 1 },
            output: { item: 'mekanism:elite_control_circuit', count: 1 },
            program: 'laser',
        }
    ]
    recipes.forEach((recipe) => {
        recipe.input.type = 'pneumaticcraft:stacked_item';
        event
            .custom({
                type: `pneumaticcraft:assembly_${recipe.program}`,
                input: recipe.input,
                result: recipe.output,
                program: recipe.program
            })
    });
});
