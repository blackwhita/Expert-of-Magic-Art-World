//priority: 1000

// Used to populate the buildWoodVariants constant - Add variants here to enable compat with various cutting mechanics.
// Be aware that you may need to specify exceptions in the loop below for this to work properly.
var woodVariantsToConstruct = [
    'minecraft:acacia',
    'minecraft:birch',
    'minecraft:dark_oak',
    'minecraft:jungle',
    'minecraft:oak',
    'minecraft:spruce',
    'minecraft:warped',
    'minecraft:crimson',
    'ars_nouveau:red_archwood',
    'ars_nouveau:green_archwood',
    'ars_nouveau:purple_archwood',
    'ars_nouveau:blue_archwood',
    'integrateddynamics:menril',
    'integrateddynamics:menril_filled',
    // 'sushigocrafting:avocado'
];

var buildWoodVariants = [];

woodVariantsToConstruct.forEach((variant) => {
    var splitVariant = variant.split(':');
    var modId = splitVariant[0];
    var logType = splitVariant[1];
    var logSuffix, woodSuffix, logBlockStripped, woodBlockStripped, logBlock, woodBlock, plankBlock, slabBlock;

    //suffix exceptions
    switch (logType) {
        case 'bulbis':
            logSuffix = '_stem';
            woodSuffix = '_wood';
            break;
        case 'sythian':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        case 'warped':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        case 'crimson':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        case 'embur':
            logSuffix = '_pedu';
            woodSuffix = '_hyphae';
            break;
        case 'fungal_imparius':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        default:
            logSuffix = '_log';
            woodSuffix = '_wood';
    }

    logBlock = modId + ':' + logType + logSuffix;
    woodBlock = modId + ':' + logType + woodSuffix;
    logBlockStripped = modId + ':stripped_' + logType + logSuffix;
    woodBlockStripped = modId + ':stripped_' + logType + woodSuffix;
    plankBlock = modId + ':' + logType + '_planks';
    slabBlock = modId + ':' + logType + '_slab';


    switch (logType) {
        case 'palo_verde':
            plankBlock = 'minecraft:birch_planks';
            break;
        case 'withering_oak':
            logBlockStripped = 'minecraft:stripped_oak_log';
            woodBlockStripped = 'minecraft:stripped_oak_wood';
            plankBlock = 'minecraft:oak_planks';
            break;
        case 'red_archwood':
            plankBlock = 'ars_nouveau:archwood_planks';
            slabBlock = 'ars_nouveau:archwood_slab';
            break;
        case 'green_archwood':
            plankBlock = 'ars_nouveau:archwood_planks';
            break;
        case 'purple_archwood':
            plankBlock = 'ars_nouveau:archwood_planks';
            break;
        case 'blue_archwood':
            plankBlock = 'ars_nouveau:archwood_planks';
            break;
        case 'driftwood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break;
        case 'grimwood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break;
        case 'rosewood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break;
        case 'menril':
            logBlock = 'integrateddynamics:menril_log';
            woodBlock = 'integrateddynamics:menril_wood';
            logBlockStripped = 'integrateddynamics:menril_log_stripped';
            woodBlockStripped = 'integrateddynamics:menril_wood_stripped';
            plankBlock = 'integrateddynamics:menril_planks';
            break;
        case 'menril_filled':
            logBlock = 'integrateddynamics:menril_log_filled';
            woodBlock = 'integrateddynamics:menril_wood';
            logBlockStripped = 'integrateddynamics:menril_log_stripped';
            woodBlockStripped = 'integrateddynamics:menril_wood_stripped';
            plankBlock = 'integrateddynamics:menril_planks';
            break;
        case 'avocado':
            woodBlock = 'minecraft:oak_wood';
            logBlockStripped = 'minecraft:stripped_oak_log';
            woodBlockStripped = 'minecraft:stripped_oak_wood';
            plankBlock = 'minecraft:oak_planks';
            break;
        default:
    }

    var woodVariant = {
        modId: modId,
        logType: logType,
        logBlock: logBlock,
        woodBlock: woodBlock,
        logBlockStripped: logBlockStripped,
        woodBlockStripped: woodBlockStripped,
        plankBlock: plankBlock,
        slabBlock: slabBlock
    };

    buildWoodVariants.push(woodVariant);
});
