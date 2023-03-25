onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier('minecraft:bee')
        .matchMainHand(Item.of('kubejs:scraper').ignoreNBT())
        .survivesExplosion()
        .killedByPlayer()
        .randomChanceWithEnchantment("minecraft:looting", [0.1, 0.2, 0.3, 0.5])
        .thenAdd('kubejs:bee_dna');
});