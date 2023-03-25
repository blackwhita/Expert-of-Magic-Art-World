onEvent('item.modification', event => {
    event.modify('immersiveengineering:logic_circuit', item => {
      item.maxStackSize = 64
    })
    const fireResistant_item = [
      'create:empty_blaze_burner',
      'create:blaze_burner',
      'minecraft:netherrack', 
      'minecraft:warped_roots', 
      'minecraft:crimson_roots'
    ]
    fireResistant_item.forEach(item_1 => {
        event.modify(item_1, item => {
          item.fireResistant = true
    })
    }) 
})