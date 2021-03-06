
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('!')

onEvent('recipes', event => {

    event.remove({id: 'astralsorcery:altar/mantle_vicio'}) //remove the vicio mantle recipe

    event.custom({
        'type': 'astralsorcery:altar',
        'altar_type': 3,
        'duration': 720,
        'starlight': 6400,
        'pattern': [
          '__B__',
          '__A__',
          'BDCDB',
          '__A__',
          '__B__'
        ],
        'key': {
          'A': {
            'tag': 'forge:feathers'
          },
          'B': {
            'tag': 'astralsorcery:stardust'
          },
          'C': {
            'item': 'astralsorcery:mantle'
          },
          'D': {
              'item': 'minecraft:elytra'
          }
        },
        'recipe_class': 'astralsorcery:constellation_base_nbt_copy',
        'output': [
          {
            'item': 'astralsorcery:mantle',
            'count': 1
          }
        ],
        'options': {
          'copy_nbt_from_items_matching': [
            {
              'item': 'astralsorcery:mantle'
            }
          ],
          'constellation': 'astralsorcery:vicio'
        },
        'focus_constellation': 'astralsorcery:vicio',
        'relay_inputs': [
          {
            'tag': 'forge:feathers'
          },
          {
            'item': 'minecraft:sugar'
          },
          {
            'item': 'minecraft:string'
          },
          {
            'tag': 'minecraft:fishes'
          }
        ],
        'effects': [
          'astralsorcery:built_in_effect_constellation_finish',
          'astralsorcery:built_in_effect_trait_relay_highlight',
          'astralsorcery:built_in_effect_discovery_central_beam',
          'astralsorcery:built_in_effect_trait_focus_circle',
          'astralsorcery:altar_default_sparkle',
          'astralsorcery:built_in_effect_constellation_lines',
          'astralsorcery:built_in_effect_attunement_sparkle'
        ]
      }) //change the vicio mantle recipe to include elytra

})