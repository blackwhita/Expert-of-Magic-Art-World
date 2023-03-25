onEvent('block.tags', (event) => {
    candles.forEach((candle) => {
        event.get('forge:candles').add(candle);
    });
});
