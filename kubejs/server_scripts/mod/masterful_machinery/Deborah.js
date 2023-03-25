onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:scraper', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'resourcefulbees:scraper', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'resourcefulbees:honey', amount: 10000 }}
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:magic_dna', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'resourcefulbees:terrasteel_honeycomb', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:bee_dna', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'resourcefulbees:honey', amount: 10000 }}
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:industrial_dna', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'resourcefulbees:industrious_honeycomb', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:bee_dna', count: 1 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'resourcefulbees:honey', amount: 10000 }}
            ],
            ticks: 20,
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'deborah_1';
        recipe.controllerId = 'deborah';
        event.custom(recipe);
    });
});