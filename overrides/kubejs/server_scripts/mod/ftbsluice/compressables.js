onEvent("recipes", (event) => {
    for (let type in global.compressables) {
        let props = global.compressables[type];
        let maxLevel = props.maxLevel || global.maxCompress;
        for (let i = 1; i <= maxLevel; i++) {
            let sm = Ingredient.of(`#resource:${type}/${i - 1}x`);
            let lg = Ingredient.of(`#resource:${type}/${i}x`);

            event.shaped(lg, ["CCC", "CCC", "CCC"], {
                C: sm,
            });

            event.shapeless(Item.of(sm, 9), lg);
        }
    }
})