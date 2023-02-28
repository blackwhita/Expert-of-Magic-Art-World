onEvent('recipes', (event) => {
    const recipes = [
    {
        input: { item : 'pneumaticcraft:assembly_platform' },
        output: { item : 'psi:programmer' },
        id: 'psi:assembler'
    }
    ]
    recipes.forEach((recipe) => {
        event
            .custom({
                type: "psi:trick_crafting",
                input: recipe.input,
                output: recipe.output,
                cad: { item: "psi:cad_assembly_iron" }
            })
            .id(recipe.id);
    });
});