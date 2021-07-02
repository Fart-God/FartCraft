
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Changing Starlight Infusion Recipes!')

onEvent('recipes', event => {

    function starlightInfuse(input, output, count, isTag) {
        if (isTag == false) {

            event.custom({
                'type': 'astralsorcery:infuser',
                'fluidInput': 'astralsorcery:liquid_starlight',
                'input': {
                    'item': input
                },
                'output': {
                    'item': output,
                    'count': count
                },
                'consumptionChance': 0.1,
                'duration': 100,
                'consumeMultipleFluids': false,
                'acceptChaliceInput': true,
                'copyNBTToOutputs': false
            })

        } else {

            event.custom({
                'type': 'astralsorcery:infuser',
                'fluidInput': 'astralsorcery:liquid_starlight',
                'input': {
                    'tag': input
                },
                'output': {
                    'item': output,
                    'count': count
                },
                'consumptionChance': 0.1,
                'duration': 100,
                'consumeMultipleFluids': false,
                'acceptChaliceInput': true,
                'copyNBTToOutputs': false
            })

        }


    }

    const removals = [
        'astralsorcery:infuser/blaze_rod',
        'astralsorcery:infuser/gold_ore',
        'astralsorcery:infuser/iron_ore',
        'astralsorcery:infuser/lapis_ore',
        'astralsorcery:infuser/redstone_ore'
    ];

    for (let i = 0; i < removals.length; i++) {

        event.remove({ id: removals[i] })

    }

    starlightInfuse('forge:rods/blaze', 'minecraft:blaze_powder', 6, true)
    starlightInfuse('forge:ores/lapis', 'minecraft:lapis_lazuli', 20, true)
    starlightInfuse('forge:ores/redstone', 'minecraft:redstone', 16, true)
    starlightInfuse('minecraft:nether_quartz_ore', 'minecraft:quartz', 6, false)

    const ore = [
        'forge:ores/gold',
        'forge:ores/copper',
        'forge:ores/aluminum',
        'forge:ores/iron',
        'forge:ores/lead',
        'forge:ores/silver',
        'forge:ores/nickel',
        'forge:ores/uranium',
        'forge:ores/zinc'
    ];

    const ingot = [
        'minecraft:iron_ingot', 
        'minecraft:gold_ingot', 
        'immersiveengineering:ingot_copper', 
        'immersiveengineering:ingot_aluminum', 
        'immersiveengineering:ingot_lead', 
        'immersiveengineering:ingot_silver', 
        'immersiveengineering:ingot_nickel', 
        'immersiveengineering:ingot_uranium', 
        'create:zinc_ingot'
    ];

    for (let i = 0; i < ore.length; i++) {

        starlightInfuse(ore[i], ingot[i], 2, true)

    }

})