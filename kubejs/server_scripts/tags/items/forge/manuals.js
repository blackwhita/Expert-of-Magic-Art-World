onEvent('item.tags', (event) => {
    var items = [
        'patchouli:guide_book',
        'immersiveengineering:manual',
        'botania:lexicon',
        'powah:book',
        'rftoolsbase:manual',
        'ars_nouveau:worn_notebook',
        'astralsorcery:tome',
        'occultism:dictionary_of_spirits'
    ];
    event.get('forge:manuals').add(items);
});
