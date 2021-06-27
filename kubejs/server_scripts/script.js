
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Changing Furnace Recipes!')

onEvent('recipes', event => {

  // FURNACE CHANGES

  //SUBJECT TO CHANGE --------------------------------------------------------------------------------

  //event.remove({output: 'minecraft:furnace'})

  event.shaped('minecraft:furnace', [
    'CCC',
    'C C',
    'BBB'
  ], {
    C: '#minecraft:stone_crafting_materials',
    B: 'minecraft:bricks'
  }) //change the furnace recipe to require bricks

  event.recipes.minecraft.campfire_cooking('minecraft:brick', 'minecraft:clay_ball') //allow bricks to be made in the campfire

  //-----------------------------------------------------------------------------------------------

  const smokerRecipes = [
    'minecraft:baked_potato',
    'minecraft:cooked_rabbit',
    'atum:quail_cooked',
    'minecraft:cooked_porkchop',
    'rats:cooked_rat',
    'minecraft:cooked_beef',
    'projectvibrantjourneys:cooked_clam',
    'minecraft:cooked_cod',
    'minecraft:cooked_mutton',
    'atum:camel_cooked',
    'minecraft:cooked_chicken',
    'minecraft:cooked_salmon',
    'minecraft:bread',
    'minecraft:dried_kelp'
  ]; //every smoker recipe output

  for (let i = 0; i < smokerRecipes.length; i++) {

    event.remove({ output: smokerRecipes[i], type: 'minecraft:smelting' })

  } //remove the smoker recipes from the regular furnace

  const blastFurnaceRecipes = [
    'immersiveengineering:ingot_steel',
    'immersiveengineering:ingot_hop_graphite',
    'immersiveengineering:ingot_copper',
    'immersiveengineering:ingot_constantan',
    'create:brass_ingot',
    'rats:raw_plastic',
    'minecraft:iron_nugget',
    'minecraft:gold_nugget',
    'immersiveengineering:nugget_aluminum',
    'immersiveengineering:nugget_steel',
    'betterendforge:thallasium_nugget',
    'betterendforge:terminite_nugget',
    'atum:nebu_drop',
    'immersiveengineering:ingot_uranium',
    'create:copper_ingot',
    'minecraft:iron_ingot',
    'minecraft:netherite_scrap',
    'minecraft:redstone',
    'immersiveengineering:ingot_electrum',
    'create:zinc_ingot',
    'minecraft:gold_ingot',
    'immersiveengineering:ingot_silver',
    'minecraft:emerald',
    'minecraft:coal',
    'minecraft:quartz',
    'immersiveengineering:ingot_lead',
    'immersiveengineering:ingot_aluminum',
    'astralsorcery:aquamarine',
    'immersiveengineering:ingot_nickel',
    'minecraft:lapis_lazuli',
    'betterendforge:thallasium_ingot',
    'minecraft:diamond',
    'astralsorcery:starmetal_ingot'
  ]; //every blast furnace recipe output

  for (let i = 0; i < blastFurnaceRecipes.length; i++) {

    event.remove({ output: blastFurnaceRecipes[i], type: 'minecraft:smelting' })

  } //remove the blast furnace recipes from the regular furnace

})