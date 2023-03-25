onEvent('entity_type.tags', (event) => {
    let entities = ['botania:doppleganger'];
    event.get('eomaw:gaia_guardian').add(entities);
});
