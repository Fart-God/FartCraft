
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Changing Wood Recipes!')

onEvent('recipes', event => {

	// WOOD CHANGES

	event.remove({ output: '#minecraft:planks' }) //remove every plank recipe so that new ones can be added

	//removing every recipe removes a handful of immersive recipes that change stair>plank/door>plank/bookshelf>plank
	//i didnt feel like they were needed, they could be added back if desired

	const Logs = [
		'minecraft:oak_log',
		'minecraft:spruce_log',
		'minecraft:birch_log',
		'minecraft:jungle_log',
		'minecraft:acacia_log',
		'minecraft:dark_oak_log',
		'minecraft:crimson_stem',
		'minecraft:warped_stem',
		'atum:palm_log',
		'atum:deadwood_log',
		'betterendforge:lucernia_log',
		'betterendforge:mossy_glowshroom_log',
		'betterendforge:lacugrove_log',
		'betterendforge:end_lotus_log',
		'betterendforge:pythadendron_log',
		'betterendforge:dragon_tree_log',
		'betterendforge:tenanea_log',
		'betterendforge:helix_tree_log',
		'betterendforge:umbrella_tree_log',
		'betterendforge:jellyshroom_log'
	]; //every log

	const Wood = [
		'minecraft:oak_wood',
		'minecraft:spruce_wood',
		'minecraft:birch_wood',
		'minecraft:jungle_wood',
		'minecraft:acacia_wood',
		'minecraft:dark_oak_wood',
		'minecraft:crimson_hyphae',
		'minecraft:warped_hyphae',
		'atum:palm_wood',
		'atum:deadwood_wood',
		'betterendforge:lucernia_bark',
		'betterendforge:mossy_glowshroom_bark',
		'betterendforge:lacugrove_bark',
		'betterendforge:end_lotus_bark',
		'betterendforge:pythadendron_bark',
		'betterendforge:dragon_tree_bark',
		'betterendforge:tenanea_bark',
		'betterendforge:helix_tree_bark',
		'betterendforge:umbrella_tree_bark',
		'betterendforge:jellyshroom_bark'
	]; //every wood/bark

	const oredictLogs = [
		'#minecraft:oak_logs',
		'#minecraft:spruce_logs',
		'#minecraft:birch_logs',
		'#minecraft:jungle_logs',
		'#minecraft:acacia_logs',
		'#minecraft:dark_oak_logs',
		'#minecraft:crimson_stems',
		'#minecraft:warped_stems',
		'#forge:palm_logs',
		'#forge:deadwood_logs',
		'#betterendforge:lucernia_logs',
		'#betterendforge:mossy_glowshroom_logs',
		'#betterendforge:lacugrove_logs',
		'#betterendforge:end_lotus_logs',
		'#betterendforge:pythadendron_logs',
		'#betterendforge:dragon_tree_logs',
		'#betterendforge:tenanea_logs',
		'#betterendforge:helix_tree_logs',
		'#betterendforge:umbrella_tree_logs',
		'#betterendforge:jellyshroom_logs'
	]; //every item with logs tag

	const strippedLogs = [
		'minecraft:stripped_oak_log',
		'minecraft:stripped_spruce_log',
		'minecraft:stripped_birch_log',
		'minecraft:stripped_jungle_log',
		'minecraft:stripped_acacia_log',
		'minecraft:stripped_dark_oak_log',
		'minecraft:stripped_crimson_stem',
		'minecraft:stripped_warped_stem',
		'atum:stripped_palm_log',
		'atum:stripped_deadwood_log',
		'betterendforge:lucernia_stripped_log',
		'betterendforge:mossy_glowshroom_stripped_log',
		'betterendforge:lacugrove_stripped_log',
		'betterendforge:end_lotus_stripped_log',
		'betterendforge:pythadendron_stripped_log',
		'betterendforge:dragon_tree_stripped_log',
		'betterendforge:tenanea_stripped_log',
		'betterendforge:helix_tree_stripped_log',
		'betterendforge:umbrella_tree_stripped_log',
		'betterendforge:jellyshroom_stripped_log'
	]; //every stripped log

	const strippedWood = [
		'minecraft:stripped_oak_wood',
		'minecraft:stripped_spruce_wood',
		'minecraft:stripped_birch_wood',
		'minecraft:stripped_jungle_wood',
		'minecraft:stripped_acacia_wood',
		'minecraft:stripped_dark_oak_wood',
		'minecraft:stripped_crimson_hyphae',
		'minecraft:stripped_warped_hyphae',
		'atum:stripped_palm_wood',
		'atum:stripped_deadwood_wood',
		'betterendforge:lucernia_stripped_bark',
		'betterendforge:mossy_glowshroom_stripped_bark',
		'betterendforge:lacugrove_stripped_bark',
		'betterendforge:end_lotus_stripped_bark',
		'betterendforge:pythadendron_stripped_bark',
		'betterendforge:dragon_tree_stripped_bark',
		'betterendforge:tenanea_stripped_bark',
		'betterendforge:helix_tree_stripped_bark',
		'betterendforge:umbrella_tree_stripped_bark',
		'betterendforge:jellyshroom_stripped_bark'
	]; //every stripped wood/bark

	const Planks = [
		'minecraft:oak_planks',
		'minecraft:spruce_planks',
		'minecraft:birch_planks',
		'minecraft:jungle_planks',
		'minecraft:acacia_planks',
		'minecraft:dark_oak_planks',
		'minecraft:crimson_planks',
		'minecraft:warped_planks',
		'atum:palm_planks',
		'atum:deadwood_planks',
		'betterendforge:lucernia_planks',
		'betterendforge:mossy_glowshroom_planks',
		'betterendforge:lacugrove_planks',
		'betterendforge:end_lotus_planks',
		'betterendforge:pythadendron_planks',
		'betterendforge:dragon_tree_planks',
		'betterendforge:tenanea_planks',
		'betterendforge:helix_tree_planks',
		'betterendforge:umbrella_tree_planks',
		'betterendforge:jellyshroom_planks'
	]; //every plank

	for (let i = 0; i < Logs.length; i++) {

		event.shapeless(Item.of(Planks[i], 2), oredictLogs[i])

		event.recipes.create.cutting(Item.of(Planks[i], 4), strippedLogs[i])
		event.recipes.create.cutting(Item.of(Planks[i], 4), strippedWood[i])

		event.recipes.immersiveengineering.sawmill(Item.of(Planks[i], 6), Logs[i], [{ stripping: false, output: '2x immersiveengineering:dust_wood' }], strippedLogs[i])
		event.recipes.immersiveengineering.sawmill(Item.of(Planks[i], 6), Wood[i], [{ stripping: false, output: '2x immersiveengineering:dust_wood' }], strippedWood[i])
		event.recipes.immersiveengineering.sawmill(Item.of(Planks[i], 6), strippedLogs[i], [{ stripping: false, output: 'immersiveengineering:dust_wood' }])
		event.recipes.immersiveengineering.sawmill(Item.of(Planks[i], 6), strippedWood[i], [{ stripping: false, output: 'immersiveengineering:dust_wood' }])

	} //adding recipes for wood progression vanilla x2 > create x4 > immersive x6



	//Log to Stripped
	//adds create recipes for modded stripped logs

	const missingLogs = [
		'atum:palm_log',
		'atum:deadwood_log',
		'betterendforge:lucernia_log',
		'betterendforge:mossy_glowshroom_log',
		'betterendforge:lacugrove_log',
		'betterendforge:end_lotus_log',
		'betterendforge:pythadendron_log',
		'betterendforge:dragon_tree_log',
		'betterendforge:tenanea_log',
		'betterendforge:helix_tree_log',
		'betterendforge:umbrella_tree_log',
		'betterendforge:jellyshroom_log'
	]; //logs without create stripped recipe

	const missingWood = [
		'atum:palm_wood',
		'atum:deadwood_wood',
		'betterendforge:lucernia_bark',
		'betterendforge:mossy_glowshroom_bark',
		'betterendforge:lacugrove_bark',
		'betterendforge:end_lotus_bark',
		'betterendforge:pythadendron_bark',
		'betterendforge:dragon_tree_bark',
		'betterendforge:tenanea_bark',
		'betterendforge:helix_tree_bark',
		'betterendforge:umbrella_tree_bark',
		'betterendforge:jellyshroom_bark'
	]; //wood/bark without create stripped recipe

	const missingStrippedLogs = [
		'atum:stripped_palm_log',
		'atum:stripped_deadwood_log',
		'betterendforge:lucernia_stripped_log',
		'betterendforge:mossy_glowshroom_stripped_log',
		'betterendforge:lacugrove_stripped_log',
		'betterendforge:end_lotus_stripped_log',
		'betterendforge:pythadendron_stripped_log',
		'betterendforge:dragon_tree_stripped_log',
		'betterendforge:tenanea_stripped_log',
		'betterendforge:helix_tree_stripped_log',
		'betterendforge:umbrella_tree_stripped_log',
		'betterendforge:jellyshroom_stripped_log'
	]; //stripped version of logs for recipe

	const missingStrippedWood = [
		'atum:stripped_palm_wood',
		'atum:stripped_deadwood_wood',
		'betterendforge:lucernia_stripped_bark',
		'betterendforge:mossy_glowshroom_stripped_bark',
		'betterendforge:lacugrove_stripped_bark',
		'betterendforge:end_lotus_stripped_bark',
		'betterendforge:pythadendron_stripped_bark',
		'betterendforge:dragon_tree_stripped_bark',
		'betterendforge:tenanea_stripped_bark',
		'betterendforge:helix_tree_stripped_bark',
		'betterendforge:umbrella_tree_stripped_bark',
		'betterendforge:jellyshroom_stripped_bark'
	]; //stripped version of wood/bark for recipe

	for (let i = 0; i < missingLogs.length; i++) {

		event.recipes.create.cutting(missingStrippedLogs[i], missingLogs[i])
		event.recipes.create.cutting(missingStrippedWood[i], missingWood[i])

	} //adding recipes for stripped logs

	//event.recipes.create.cutting('4x minecraft:oak_planks', 'minecraft:stripped_oak_log')
	//event.recipes.create.cutting('4x minecraft:oak_planks', 'minecraft:stripped_oak_wood')

})
