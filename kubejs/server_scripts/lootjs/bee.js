onEvent("lootjs", (event) => {
    event
    .addLootTypeModifier(LootType.FISHING)
    .thenAdd(Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:fish_bee' }))
    .matchOffHand('resourcefulbees:bee_jar')
    .timeCheck(24000, 0, 9000)
    .weatherCheck({
        raining: false, // 雨天天气
        thundering: false // 雷雨天气
    })
})