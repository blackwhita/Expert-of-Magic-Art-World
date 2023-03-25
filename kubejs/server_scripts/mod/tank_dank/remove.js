onEvent('recipes', event => {
    const tank_dank = ['tanknull:tank_3','tanknull:tank_4','tanknull:tank_5','tanknull:tank_6','tanknull:tank_7','dankstorage:dank_3', 'dankstorage:dank_4', 'dankstorage:dank_5', 'dankstorage:dank_6', 'dankstorage:dank_7']
    tank_dank.forEach((output) => {
        event.remove({ output: output });
    }); 
});
