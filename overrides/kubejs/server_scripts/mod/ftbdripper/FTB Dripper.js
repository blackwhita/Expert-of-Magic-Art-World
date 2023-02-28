onEvent('recipes', event => {
	event.recipes.ftbdripperDrip({
		inputBlock: 'ftbsluice:dust',
		outputBlock: 'minecraft:clay',
	});
})