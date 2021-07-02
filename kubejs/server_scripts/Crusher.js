
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Changing Crusher Recipes!')

onEvent('recipes', event => {

    event.remove({output: '#forge:dusts', input: '#forge:ores', type: 'immersiveengineering:crusher'})

    const crushedOre = [
        'create:crushed_iron_ore',
        'create:crushed_gold_ore',
        'create:crushed_copper_ore',
        'create:crushed_silver_ore',
        'create:crushed_lead_ore',
        'create:crushed_aluminum_ore',
        'create:crushed_uranium_ore',
        'create:crushed_nickel_ore'
    ]; //every crushed ore from the create crushing wheel

    const gritOre = [
        'immersiveengineering:dust_iron',
        'immersiveengineering:dust_gold',
        'immersiveengineering:dust_copper',
        'immersiveengineering:dust_silver',
        'immersiveengineering:dust_lead',
        'immersiveengineering:dust_aluminum',
        'immersiveengineering:dust_uranium',
        'immersiveengineering:dust_nickel'
    ]; //every grit ore from the immersive crusher


    for (let i = 0; i < crushedOre.length; i++) {

        event.recipes.immersiveengineering.crusher(Item.of(gritOre[i], 2), crushedOre[i])

    } //add crusher recipe to convert crushed ore > 2x grit

    const crusherTweaks = [
        'minecraft:diamond',
        'minecraft:quartz',
        'minecraft:emerald',
        'minecraft:lapis_lazuli',
        'minecraft:redstone'
    ];

    const crusherTweaksOutput = [
        '3x minecraft:diamond',
        '4x minecraft:quartz',
        '3x minecraft:emerald',
        '16x minecraft:lapis_lazuli',
        '12x minecraft:redstone'
    ];

    const crusherTweaksInput = [
        'minecraft:diamond_ore',
        'minecraft:nether_quartz_ore',
        'minecraft:emerald_ore',
        'minecraft:lapis_ore',
        'minecraft:redstone_ore'
    ];

    for (let i = 0; i < crusherTweaks.length; i++) {

        event.remove({ output: crusherTweaks[i], type: 'immersiveengineering:crusher'})

        event.recipes.immersiveengineering.crusher(crusherTweaksOutput[i], crusherTweaksInput[i])

    } //add crusher recipies to make its outputs slightly better than crushing wheels

})