onEvent('item.tooltip', (event) => {
    const disabledInExpert = Text.of('小提示').aqua();
    const recipes = [
        {
            items: ['createaddition:overcharged_alloy'],
            text: [
                disabledInExpert, 
                Text.of('不要尝试用自然祭坛去制作它，否则你会后悔的').red()
        ]
        },
        {
            items: ['kubejs:akashic_record'],
            text: [
                Text.of('当你拿到他的时候，你会获得来自作者blackwhita的话').red()
        ]
        },
        {
            items: ['createaddition:alternator'],
            text: [
                Text.of('请使用steampowered的交流发电机').color('#CD853F')
        ]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
