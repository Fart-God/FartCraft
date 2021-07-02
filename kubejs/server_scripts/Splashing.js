
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Changing Splashing Recipes!')

onEvent('recipes', event => {
	
    event.remove({output: '#forge:nuggets', type: 'create:splashing'}) //remove splashing recipes that output nuggets
    //this removes the gravel>iron, red sand>gold, and soul sand> quartz/gold
    //this also removes a stage of create ore processing in favor of chaining it with immersive for a greater ore to ingot ratio


})