onEvent('recipes', event => {
    event.remove({ output: 'eidolon:pewter_blend' });
    event.remove({ output: 'eidolon:worktable' });
    event.shapeless('2x eidolon:pewter_blend', ['pneumaticcraft:ingot_iron_compressed', '#forge:ingots/lead'])
    const recipes = [
        {
            output: '3x eidolon:stone_altar',
            pattern: [
                'AAA',
                'BCB',
                'BDB'
            ],
            key: {
                A: 'minecraft:smooth_stone_slab',
                B: '#forge:stone',
                C: 'eidolon:soul_shard',
                D: 'eidolon:pewter_inlay'
            },
            id: 'eidolon:stone_altar'
        },
        {
            output: '8x eidolon:unholy_symbol',
            pattern: [
                'ABA',
                'BCB',
                'ABA'
            ],
            key: {
                A: '#forge:wool',
                B: 'minecraft:blue_dye',
                C: 'eidolon:unholy_symbol'
            },
            id: 'eidolon:unholy_symbol'
        },
        {
            output: 'eidolon:prestigious_palm',
            pattern: [
                'ABA',
                'CDC',
                'AEA'
            ],
            key: {
                A: 'eidolon:wicked_weave',
                B: 'eidolon:warped_sprouts',
                C: 'eidolon:ender_calx',
                D: 'eidolon:lesser_soul_gem',
                E: 'eidolon:soul_shard',
                //C: 
                //C: 
                //C: 
            },
            id: 'eidolon:prestigious_palm'
        },
        {
            output: 'eidolon:glass_hand',
            pattern: [
                ' A ',
                'BCB',
                ' D '
            ],
            key: {
                A: 'eidolon:zombie_heart',
                B: 'eidolon:lesser_soul_gem',
                C: 'eidolon:basic_amulet',
                D: 'eidolon:wraith_heart',
                //E: 'eidolon:soul_shard',
                //C: 
                //C: 
                //C: 
            },
            id: 'eidolon:glass_hand'
        },
        {
            output: 'eidolon:soul_enchanter',
            pattern: [
                'ABA',
                'CDC',
                'DDD'
            ],
            key: {
                A: 'eidolon:gold_inlay',
                B: 'minecraft:book',
                C: 'eidolon:arcane_gold_ingot',
                D: '#forge:obsidian',
                //E: 'eidolon:soul_shard',
                //C: 
                //C: 
                //C: 
            },
            id: 'eidolon:soul_enchanter'
        },
        {
            output: 'eidolon:unholy_effigy',
            pattern: [
                ' A ',
                'BBB',
                'CBC'
            ],
            key: {
                A: 'eidolon:unholy_symbol',
                B: '#forge:stone',
                C: 'eidolon:gold_inlay',
                //D: '#forge:obsidian',
                //E: 'eidolon:soul_shard',
                //C: 
                //C: 
                //C: 
            },
            id: 'eidolon:unholy_effigy'
        },
        {
            output: 'eidolon:reversal_pick',
            pattern: [
                'ABA',
                'CDC',
                'EFE'
            ],
            key: {
                A: '#forge:obsidian',
                B: 'minecraft:crying_obsidian',
                C: 'eidolon:soul_shard',
                D: 'eidolon:pewter_ingot',
                E: 'eidolon:lesser_soul_gem',
                F: 'eidolon:pewter_inlay'
                //C: 
                //C: 
            },
            id: 'eidolon:reversal_pick'
        },

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
})