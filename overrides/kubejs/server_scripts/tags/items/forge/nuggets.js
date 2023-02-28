onEvent('item.tags', (event) => {
    event.add('forge:nuggets', [
        'eidolon:arcane_gold_nugget',
        'eidolon:pewter_nugget',
        'immersiveengineering:nugget_aluminum',
        'immersiveengineering:nugget_constantan',
        'immersiveengineering:nugget_electrum',
        'immersiveengineering:nugget_lead',
        'immersiveengineering:nugget_nickel',
        'immersiveengineering:nugget_silver',
        'immersiveengineering:nugget_uranium',
        'mythicbotany:alfsteel_nugget',
        'occultism:iesnium_nugget',
    ]);

    event.get('forge:nuggets/alfsteel').add('mythicbotany:alfsteel_nugget');
});
