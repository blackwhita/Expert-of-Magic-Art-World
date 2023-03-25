onEvent('item.tags', (event) => {
    combVariants.forEach((comb) => {
    });

    honeyVarieties.forEach((honey) => {
        if (honey == 'resourcefulbees:honey') {
            honey = 'minecraft:honey';
        }
        event.get('diet:sugars').add(honey + '_bottle');
    });

    event.add('diet:sugars', ['mekanism:canteen']);
});
