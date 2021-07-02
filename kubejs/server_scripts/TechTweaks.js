
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Tweaking Tech Progression!')

onEvent('recipes', event => {

    //Immersive Recipe Tweaks

    event.remove({ output: 'immersiveengineering:windmill' })
    event.shaped('immersiveengineering:windmill', [
        'BBB',
        'BAB',
        'BBB'
    ], {
        B: 'immersiveengineering:windmill_blade',
        A: 'create:andesite_alloy'
    })

    event.remove({ output: 'immersiveengineering:watermill' })
    event.shaped('immersiveengineering:watermill', [
        ' S ',
        'SAS',
        ' S '
    ], {
        S: 'immersiveengineering:waterwheel_segment',
        A: 'create:andesite_alloy'
    })

    event.remove({ output: 'immersiveengineering:dynamo' })
    event.shaped('immersiveengineering:dynamo', [
        'RCR',
        'IWI'
    ], {
        R: '#forge:dusts/redstone',
        C: 'immersiveengineering:coil_lv',
        I: '#forge:ingots/iron',
        W: 'create:cogwheel'
    })

    event.remove({ output: 'immersiveengineering:turntable' })
    event.shaped('immersiveengineering:turntable', [
        'IWI',
        'RCR'
    ], {
        R: '#forge:dusts/redstone',
        C: 'immersiveengineering:coil_lv',
        I: '#forge:ingots/iron',
        W: 'create:large_cogwheel'
    })

    event.remove({ output: 'immersiveengineering:conveyor_basic' })
    event.shaped('immersiveengineering:conveyor_basic', [
        'BBB',
        'IRI'
    ], {
        R: '#forge:dusts/redstone',
        B: 'create:belt_connector',
        I: '#forge:ingots/iron'
    })

    //Create Recipe Tweaks

    event.remove({ output: 'create:crushing_wheel' })
    event.recipes.create.mechanical_crafting('create:crushing_wheel', [
        ' AAA ',
        'AATAA',
        'ATSTA',
        'AATAA',
        ' AAA '
    ], {
        A: 'create:andesite_alloy',
        T: '#forge:treated_wood',
        S: '#forge:rods/steel'
    })

    event.remove({ output: 'create:schematicannon' })
    event.shaped('create:schematicannon', [
        ' C ',
        'LDL',
        'STS'
    ], {
        L: '#minecraft:logs',
        C: 'minecraft:cauldron',
        S: 'minecraft:smooth_stone',
        D: 'minecraft:dispenser',
        T: 'immersiveengineering:turntable'
    })

    event.remove({ output: 'create:rope_pulley' })
    event.shaped('create:rope_pulley', [
        ' A ',
        'SHS',
        ' I '
    ], {
        A: 'create:andesite_casing',
        S: 'create:shaft',
        H: 'immersiveengineering:wirecoil_structure_rope',
        I: '#forge:plates/iron'
    })

    event.remove({ output: 'create:cart_assembler' })
    event.shaped('create:cart_assembler', [
        'BBB',
        'SRS',
        'L L'
    ], {
        B: 'minecraft:slime_block',
        S: '#forge:ingots/steel',
        R: '#forge:dusts/redstone',
        L: '#minecraft:logs'
    })

    event.remove({ output: 'create:mechanical_drill' })
    event.recipes.create.mechanical_crafting('create:mechanical_drill', [
        ' A ',
        'ASA',
        'CCC'
    ], {
        A: 'create:andesite_alloy',
        C: 'create:andesite_casing',
        S: '#forge:ingots/steel'
    })

    event.remove({ output: 'create:mechanical_saw' })
    event.recipes.create.mechanical_crafting('create:mechanical_saw', [
        ' P ',
        'PSP',
        'CCC'
    ], {
        P: '#forge:plates/iron',
        C: 'create:andesite_casing',
        S: '#forge:ingots/steel'
    })

    event.remove({ output: 'create:deployer' })
    event.recipes.create.mechanical_crafting('create:deployer', [
        ' E ',
        'CEC',
        'WET',
        ' H '
    ], {
        E: 'create:piston_extension_pole',
        C: 'create:andesite_casing',
        T: 'create:electron_tube',
        W: 'create:cogwheel',
        H: 'create:brass_hand'
    })

    event.remove({ output: 'create:mechanical_harvester' })
    event.recipes.create.mechanical_crafting('create:mechanical_harvester', [
        'APA',
        'ASA',
        'CCC'
    ], {
        P: '#forge:plates/iron',
        C: 'create:andesite_casing',
        S: '#forge:ingots/steel',
        A: 'create:andesite_alloy'
    })

    event.remove({ output: 'create:mechanical_plough' })
    event.recipes.create.mechanical_crafting('create:mechanical_plough', [
        'PPP',
        'ASA',
        'CCC'
    ], {
        P: '#forge:plates/iron',
        C: 'create:andesite_casing',
        S: '#forge:ingots/steel',
        A: 'create:andesite_alloy'
    })

    event.remove({ output: 'create:flywheel' })
    event.recipes.create.mechanical_crafting('create:flywheel', [
        ' BBB',
        'CBRB',
        ' BBB'
    ], {
        B: '#forge:ingots/brass',
        C: 'create:andesite_casing',
        R: '#forge:rods/steel'
    })

    event.remove({ output: 'create:furnace_engine' })
    event.recipes.create.mechanical_crafting('create:furnace_engine', [
        'SSB',
        'SGP',
        'SSB'
    ], {
        B: '#forge:ingots/brass',
        G: 'immersiveengineering:generator',
        P: 'minecraft:piston',
        S: '#forge:plates/brass'
    })

    event.remove({ output: 'create:mechanical_arm' })
    event.shaped('create:mechanical_arm', [
        'SSA',
        'SW ',
        'ETE'
    ], {
        A: 'create:andesite_alloy',
        W: 'create:cogwheel',
        E: 'create:electron_tube',
        S: '#forge:plates/brass',
        T: 'immersiveengineering:turntable'
    })
})