onEvent('item.registry', event => {
	event.create('chinese_dumpling').displayName("§6中国饺子").texture('china:items/chinese_dumpling').tooltip('来自青瑜').food(food => {
		food
    		.hunger(6)
    		.saturation(6)
      		.effect('speed', 600, 0, 1)
      		.removeEffect('poison')
      		.alwaysEdible()
      		.fastToEat()
      		.meat()
      		.eaten(ctx => {
        		ctx.player.tell(`新年要快乐哦~`)
        	})
	})
})

