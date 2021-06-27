
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('!')

onEvent('recipes', event => {

    //Furnace Changes

   // event.remove({output: 'minecraft:furnace'})
    event.shaped('minecraft:furnace', [
        'CCC',
        'C C',
        'BBB'
      ], {
        C: '#minecraft:stone_crafting_materials',
        B: 'minecraft:bricks'
      }) //change the furnace recipe to require bricks

      event.recipes.minecraft.campfire_cooking('minecraft:brick', 'minecraft:clay_ball') //allow bricks to be made in the campfire

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

        event.remove({output: smokerRecipes[i], type: 'minecraft:smelting'})

      } //remove the smoker recipes from the regular furnace
})