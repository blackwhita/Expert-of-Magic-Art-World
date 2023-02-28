onEvent("recipes", (event) => {
  const mumetal = [
    'mekanismmatter:naquadah_reactor_controller',
    'industrialforegoing:mycelial_reactor'
]
mumetal.forEach((output) => {
    event.remove({ output: output });
}); 

  const recipes=[
    {
      pattern: [
        "       ",
        "ABBBBBA",
        "ACDEDCA",
        "ACDEDCA",
        "ABBBBBA",
        "       ",
        "       ",
      ],
      key: {
        A: { item: 'botania:mana_diamond'},
        B: { item: 'mekanism:pellet_antimatter'},
        C: { item: 'powah:steel_energized'},
        D: { item: 'kubejs:high_steel_ingot'},
        E: { item: 'extendedcrafting:ender_star'},
      },
      result: { item: 'extendedcrafting:crystaltine_ingot' , count:8 },
      id: 'extendedcrafting:crystaltine_ingot'
    }
  ]
  recipes.forEach((recipe) => {
    event
        .custom({
            type: 'extendedcrafting:shaped_table',
            pattern: recipe.pattern,
            key: recipe.key,
            result:recipe.result
        })
        .id(recipe.id);
});
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBBBA",
        "BCDEDCB",
        "BDFGFDB",
        "BHGIGHB",
        "BDFGFDB",
        "BCDEDCB",
        "ABBBBBA"
      ],
      "key": {
        "A": {
          "item": "kubejs:blockcasing_plain"
        },
        "B": {
          "item": "kubejs:high_steel_ingot"
        },
        "C": {
          "item": "immersiveengineering:radiator"
        },
        "D": {
          "item": "mekanismmatter:universal_matter"
        },
        "E": {
          "item": "kubejs:molten_black_iron_bucket"
        },
        "F": {
          "item": "kubejs:novaextended-ark_circuit-layer0"
        },
        "G": {
          "item": "extendedcrafting:enhanced_ender_component"
        },
        "H": {
          "item": "mekanismgenerators:fusion_fuel_bucket"
        },
        "I": {
          "item": "kubejs:overlay_controller"
        }
      },
      "result": {
        "item": "masterfulmachinery:industrial_assembly_machine_controller"
      }
    }
  )
  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "emendatusenigmatica:lumium_ingot"
        },
        {
          "item": "emendatusenigmatica:enderium_ingot"
        },
        {
          "item": "emendatusenigmatica:cast_iron_ingot"
        },
        {
          "item": "extendedcrafting:black_iron_ingot"
        },
        {
          "item": "extendedcrafting:redstone_ingot"
        },
        {
          "item": "extendedcrafting:enhanced_ender_ingot"
        },
        {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        {
          "item": "mekanism:ingot_refined_obsidian"
        },
        {
          "item": "mekanism:ingot_refined_glowstone"
        },
        {
          "item": "emendatusenigmatica:signalum_ingot"
        },
        {
          "item": "emendatusenigmatica:invar_ingot"
        },
        {
          "item": "emendatusenigmatica:steel_ingot"
        },
        {
          "item": "emendatusenigmatica:electrum_ingot"
        },
        {
          "item": "emendatusenigmatica:constantan_ingot"
        },
        {
          "item": "emendatusenigmatica:bronze_ingot"
        },
        {
          "item": "emendatusenigmatica:brass_ingot"
        },
        {
          "item": "emendatusenigmatica:cobalt_ingot"
        },
        {
          "item": "emendatusenigmatica:zinc_ingot"
        },
        {
          "item": "eidolon:pewter_ingot"
        },
        {
          "item": "emendatusenigmatica:copper_ingot"
        },
        {
          "item": "emendatusenigmatica:aluminum_ingot"
        },
        {
          "item": "astralsorcery:starmetal_ingot"
        },
        {
          "item": "botania:terrasteel_ingot"
        },
        {
          "item": "botania:elementium_ingot"
        },
        {
          "item": "botania:gaia_ingot"
        },
        {
          "item": "minecraft:diamond"
        },
        {
          "item": "minecraft:emerald"
        },
        {
          "item": "minecraft:glowstone_dust"
        },
        {
          "item": "minecraft:redstone"
        },
        {
          "item": "mekanismmatter:trinium_ingot"
        },
        {
          "item": "naturesaura:infused_iron"
        },
        {
          "item": "naturesaura:sky_ingot"
        },
        {
          "item": "woot:si_ingot"
        },
        {
          "item": "emendatusenigmatica:silver_ingot"
        },
        {
          "item": "emendatusenigmatica:nickel_ingot"
        },
        {
          "item": "emendatusenigmatica:uranium_ingot"
        },
        {
          "item": "emendatusenigmatica:tin_ingot"
        },
        {
          "item": "emendatusenigmatica:osmium_ingot"
        },
        {
          "item": "minecraft:netherite_ingot"
        },
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "botania:manasteel_ingot"
        },
        {
          "item": "industrialforegoing:pink_slime_ingot"
        },
        {
          "item": "emendatusenigmatica:lead_ingot"
        },
        {
          "item": "psi:ivory_psimetal"
        },
        {
          "item": "psi:ebony_psimetal"
        },
        {
          "item": "psi:psimetal"
        },
        {
          "item": "mythicbotany:alfsteel_ingot"
        },
        {
          "item": "occultism:iesnium_ingot"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "thermal_extra:drownium_ingot"
        },
        {
          "item": "thermal_extra:zauvium_ingot"
        },
        {
          "item": "thermal_extra:nectium_ingot"
        },
        {
          "item": "thermal_extra:polarium_ingot"
        },
        {
          "item": "thermal_extra:nebulium_ingot"
        },
        {
          "item": "thermal_extra:vukaium_ingot"
        },
        {
          "item": "thermal_extra:dragon_bronze_ingot"
        },
        {
          "item": "thermal_extra:dragon_enderium_ingot"
        }
      ],
      "result": {
        "item": "extendedcrafting:the_ultimate_ingot"
      }
    }
  ) 
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "       ",
        " ABBBA ",
        " BCDCB ",
        " BDEDB ",
        " BCDCB ",
        " ABBBA ",
        "       "
      ],
      "key": {
        "A": {
          "item": "rftoolspower:power_core3"
        },
        "B": {
          "item": "kubejs:high_steel_ingot"
        },
        "C": {
          "item": "mekanism:advanced_control_circuit"
        },
        "D": {
          "item": "rftoolscontrol:cpu_core_500"
        },
        "E": {
          "item": "kubejs:overlay_energyinputhatch"
        }
      },
      "result": {
        "item": "masterfulmachinery:industrial_assembly_machine_energy_port_energy_input"
      }
    }
  )
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "       ",
        " ABBBA ",
        " BCDCB ",
        " BDEDB ",
        " BCDCB ",
        " ABBBA ",
        "       "
      ],
      "key": {
        "A": {
          "item": "sophisticatedbackpacks:stack_upgrade_tier_4"
        },
        "B": {
          "item": "kubejs:high_steel_ingot"
        },
        "C": {
          "item": "mekanism:advanced_control_circuit"
        },
        "D": {
          "item": "rftoolscontrol:cpu_core_500"
        },
        "E": {
          "item": "kubejs:overlay_outputbus"
        }
      },
      "result": {
        "item": "masterfulmachinery:industrial_assembly_machine_item_port_items_output"
      }
    }
  )
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "       ",
        " ABBBA ",
        " BCDCB ",
        " BDEDB ",
        " BCDCB ",
        " ABBBA ",
        "       "
      ],
      "key": {
        "A": {
          "item": "sophisticatedbackpacks:stack_upgrade_tier_4"
        },
        "B": {
          "item": "kubejs:high_steel_ingot"
        },
        "C": {
          "item": "mekanism:advanced_control_circuit"
        },
        "D": {
          "item": "rftoolscontrol:cpu_core_500"
        },
        "E": {
          "item": "kubejs:overlay_inputbus"
        }
      },
      "result": {
        "item": "masterfulmachinery:industrial_assembly_machine_item_port_items_input"
      }
    }
  )
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "       ",
        " ABBBA ",
        " BCDCB ",
        " BDEDB ",
        " BCDCB ",
        " ABBBA ",
        "       "
      ],
      "key": {
        "A": {
          "type": "forge:nbt",
          "item": "tanknull:tank_5",
          "count": 1,
          "nbt": "{fluidinv:{}}"
        },
        "B": {
          "item": "kubejs:high_steel_ingot"
        },
        "C": {
          "item": "mekanism:advanced_control_circuit"
        },
        "D": {
          "item": "rftoolscontrol:cpu_core_500"
        },
        "E": {
          "item": "kubejs:overlay_fluidinputhatch"
        }
      },
      "result": {
        "item": "masterfulmachinery:industrial_assembly_machine_fluid_port_fluids_input"
      }
    }
  )
  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "farmersdelight:beef_patty"
        },
        {
          "item": "pamhc2foodcore:beefjerkyitem"
        },
        {
          "item": "pamhc2foodextended:bulgogiitem"
        },
        {
          "item": "pamhc2foodcore:chickenjerkyitem"
        },
        {
          "item": "pamhc2trees:cinnamonitem"
        },
        {
          "item": "minecraft:cooked_chicken"
        },
        {
          "item": "farmersdelight:cooked_chicken_cuts"
        },
        {
          "item": "simplefarming:cooked_horse_meat"
        },
        {
          "item": "minecraft:cooked_mutton"
        },
        {
          "item": "minecraft:cooked_rabbit"
        },
        {
          "item": "pamhc2foodextended:cornedbeefitem"
        },
        {
          "item": "pamhc2foodextended:cracklinsitem"
        },
        {
          "item": "artifacts:eternal_steak"
        },
        {
          "item": "pamhc2foodcore:fishjerkyitem"
        },
        {
          "item": "pamhc2foodextended:gourmetbeefpattyitem"
        },
        {
          "item": "pamhc2foodextended:gourmetmuttonpattyitem"
        },
        {
          "item": "pamhc2foodextended:gourmetporkpattyitem"
        },
        {
          "item": "pamhc2foodextended:gravyitem"
        },
        {
          "item": "pamhc2foodextended:groundcinnamonitem"
        },
        {
          "item": "sushigocrafting:imitation_crab"
        },
        {
          "item": "pamhc2foodcore:muttonjerkyitem"
        },
        {
          "item": "pamhc2foodcore:porkjerkyitem"
        },
        {
          "item": "minecraft:rabbit_stew"
        },
        {
          "item": "pamhc2foodcore:rabbitjerkyitem"
        }
      ],
      "result": {
        "item": "avaritia:cosmic_meatballs"
      }
    }
  )
  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "pamhc2foodcore:chickendinneritem"
        },
        {
          "item": "pamhc2foodcore:hotchocolateitem"
        },
        {
          "item": "pamhc2foodcore:epicbaconitem"
        },
        {
          "item": "pamhc2foodcore:gummybearsitem"
        },
        {
          "item": "pamhc2foodcore:fishandchipsitem"
        },
        {
          "item": "pamhc2foodcore:glazedcarrotsitem"
        },
        {
          "item": "pamhc2foodcore:bakedvegetablemedlyitem"
        },
        {
          "item": "pamhc2foodextended:cookedtofishitem"
        },
        {
          "item": "pamhc2foodextended:cookedtofuttonitem"
        },
        {
          "item": "pamhc2foodextended:supremepizzaitem"
        },
        {
          "item": "pamhc2foodextended:energydrinkitem"
        },
        {
          "item": "pamhc2foodextended:garlicbreaditem"
        },
        {
          "item": "pamhc2foodextended:bbqchickenpizzaitem"
        },
        {
          "item": "pamhc2foodextended:fishtacoitem"
        },
        {
          "item": "pamhc2foodextended:theatreboxitem"
        },
        {
          "item": "pamhc2foodextended:cornonthecobitem"
        },
        {
          "item": "pamhc2foodextended:cheezepuffsitem"
        },
        {
          "item": "pamhc2foodextended:epicbltitem"
        },
        {
          "item": "pamhc2foodextended:homestylelunchitem"
        },
        {
          "item": "pamhc2foodextended:honeyglazedhamitem"
        },
        {
          "item": "pamhc2foodextended:meringuebombeitem"
        },
        {
          "item": "pamhc2foodextended:honeyglazedhamitem"
        },
        {
          "item": "pamhc2foodextended:battenbergitem"
        },
        {
          "item": "pamhc2foodextended:mochidessertitem"
        },
        {
          "item": "pamhc2foodextended:ploughmanslunchitem"
        },
        {
          "item": "pamhc2foodextended:pambitsboxitem"
        },
        {
          "item": "pamhc2foodextended:pumpkinspicelatteitem"
        },
        {
          "item": "pamhc2foodextended:stuffedeggplantitem"
        },
        {
          "item": "pamhc2foodextended:sundayhighteaitem"
        },
        {
          "item": "pamhc2foodextended:weekendpicnicitem"
        },
        {
          "item": "pamhc2foodextended:tiropitaitem"
        },
        {
          "item": "pamhc2foodextended:tamarindjellysandwichitem"
        },
        {
          "item": "farmersdelight:hamburger"
        },
        {
          "item": "farmersdelight:honey_cookie"
        },
        {
          "item": "farmersdelight:stuffed_pumpkin_block"
        },
        {
          "item": "farmersdelight:shepherds_pie_block"
        },
        {
          "item": "sushigocrafting:onigiri"
        },
        {
          "item": "sushigocrafting:tuna_temaki"
        },
        {
          "item": "sushigocrafting:tobiko_crab_cheese_california"
        },
        {
          "item": "simplefarming:pizza"
        },
        {
          "item": "simplefarming:olive_tomato_salad"
        },
        {
          "item": "create:honeyed_apple"
        },
        {
          "item": "create:builders_tea"
        },
        {
          "item": "simplefarming:turnip_beetroot_gratin"
        },
        {
          "item": "farmersdelight:squid_ink_pasta"
        },
        {
          "item": "avaritia:cosmic_meatballs"
        }
      ],
      "result": {
        "item": "avaritia:ultimate_stew"
      }
    }
    )
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBABBBA",
        "BCDEFEDCB",
        "BDEFGFEDB",
        "BEFHIHFEB",
        "AFGIJIGFA",
        "BEFHIHFEB",
        "BDEFGFEDB",
        "BCDEFEDCB",
        "ABBBABBBA"
      ],
      "key": {
        "A": {
          "item": "avaritia:ultimate_stew"
        },
        "B": {
          "item": "extendedcrafting:the_ultimate_ingot"
        },
        "C": {
          "item": "kubejs:ultimate_rune"
        },
        "D": {
          "item": "kubejs:omniscient_lens"
        },
        "E": {
          "type": "forge:nbt",
          "item": "powah:energy_cell_nitro",
          "count": 1,
          "nbt": "{lollipoptile_stack_nbt:{energy_stored_main_energy:140000000L}}"
        },
        "F": {
          "item": "kubejs:novaextended-extremecircuit-layer0"
        },
        "G": {
          "item": "mekanismmatter:trinium_ingot"
        },
        "H": {
          "item": "kubejs:creative_catalyst"
        },
        "I": {
          "item": "thermal:rf_coil_creative_augment"
        },
        "J": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_energy_cube",
          "count": 1,
          "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"256000000\"}]}}"
        }
      },
      "result": {
        "item": "mekanism:creative_energy_cube"
      }
    }
    )
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBABBBA",
        "BCDEFEDCB",
        "BDEFGFEDB",
        "BEFHEHFEB",
        "AFGEIEGFA",
        "BEFHEHFEB",
        "BDEFGFEDB",
        "BCDEFEDCB",
        "ABBBABBBA"
      ],
      "key": {
        "A": {
          "item": "avaritia:ultimate_stew"
        },
        "B": {
          "item": "extendedcrafting:the_ultimate_ingot"
        },
        "C": {
          "item": "kubejs:ultimate_rune"
        },
        "D": {
          "item": "kubejs:omniscient_lens"
        },
        "E": {
          "item": "botania:fabulous_pool"
        },
        "F": {
          "item": "kubejs:novaextended-extremecircuit-layer0"
        },
        "G": {
          "item": "mekanismmatter:trinium_ingot"
        },
        "H": {
          "item": "kubejs:creative_catalyst"
        },
        "I": {
          "type": "forge:nbt",
          "item": "botania:mana_tablet",
          "count": 1,
          "nbt": "{mana:500000,creative:1b}"
        }
      },
      "result": {
        "item": "botania:creative_pool"
      }
    }
    )
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBABBBA",
        "BCDEFGDCB",
        "BDHFIFJDB",
        "BKFLMLFNB",
        "AFIOPQIFA",
        "BRFLSLFTB",
        "BDUFIFVDB",
        "BCDWFXDCB",
        "ABBBABBBA"
      ],
      "key": {
        "A": {
          "item": "avaritia:ultimate_stew"
        },
        "B": {
          "item": "extendedcrafting:the_ultimate_ingot"
        },
        "C": {
          "item": "kubejs:ultimate_rune"
        },
        "D": {
          "item": "kubejs:omniscient_lens"
        },
        "E": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"emendatusenigmatica:molten_signalum\",Amount:256000}}]}}"
        },
        "F": {
          "item": "kubejs:novaextended-extremecircuit-layer0"
        },
        "G": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"immersiveengineering:creosote\",Amount:256000}}]}}"
        },
        "H": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"immersiveengineering:concrete\",Amount:256000}}]}}"
        },
        "I": {
          "item": "mekanismmatter:trinium_ingot"
        },
        "J": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"industrialforegoing:latex\",Amount:256000}}]}}"
        },
        "K": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"immersiveengineering:ethanol\",Amount:256000}}]}}"
        },
        "L": {
          "item": "kubejs:creative_catalyst"
        },
        "M": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"industrialforegoing:essence\",Amount:256000}}]}}"
        },
        "N": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"immersivepetroleum:lubricant\",Amount:256000}}]}}"
        },
        "O": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"immersivepetroleum:oil\",Amount:256000}}]}}"
        },
        "P": {
          "item": "mekanism:ultimate_fluid_tank"
        },
        "Q": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"industrialforegoing:ether_gas\",Amount:256000}}]}}"
        },
        "R": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"industrialforegoing:pink_slime\",Amount:256000}}]}}"
        },
        "S": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"emendatusenigmatica:molten_iesnium\",Amount:256000}}]}}"
        },
        "T": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"immersivepetroleum:gasoline\",Amount:256000}}]}}"
        },
        "U": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"thermal:glowstone\",Amount:256000}}]}}"
        },
        "V": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"immersivepetroleum:diesel\",Amount:256000}}]}}"
        },
        "W": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"thermal:ender\",Amount:256000}}]}}"
        },
        "X": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_fluid_tank",
          "count": 1,
          "nbt": "{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:\"immersivepetroleum:diesel_sulfur\",Amount:256000}}]}}"
        }
      },
      "result": {
        "item": "mekanism:creative_fluid_tank"
      }
    }
    )
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBABBBA",
        "BCDEFGDCB",
        "BDHFIFJDB",
        "BKFLMLFNB",
        "AFIOPQIFA",
        "BRFLSLFTB",
        "BDUFIFVDB",
        "BCDWFXDCB",
        "ABBBABBBA"
      ],
      "key": {
        "A": {
          "item": "avaritia:ultimate_stew"
        },
        "B": {
          "item": "extendedcrafting:the_ultimate_ingot"
        },
        "C": {
          "item": "kubejs:ultimate_rune"
        },
        "D": {
          "item": "kubejs:omniscient_lens"
        },
        "E": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:lithium\",amount:8192000L}}]}}"
        },
        "F": {
          "item": "kubejs:novaextended-extremecircuit-layer0"
        },
        "G": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:oxygen\",amount:8192000L}}]}}"
        },
        "H": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:liquid_osmium\",amount:8192000L}}]}}"
        },
        "I": {
          "item": "mekanismmatter:trinium_ingot"
        },
        "J": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:uranium_hexafluoride\",amount:8192000L}}]}}"
        },
        "K": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:hydrogen_chloride\",amount:8192000L}}]}}"
        },
        "L": {
          "item": "kubejs:creative_catalyst"
        },
        "M": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:polonium\",amount:8192000L}}]}}"
        },
        "N": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:uranium_oxide\",amount:8192000L}}]}}"
        },
        "O": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:plutonium\",amount:8192000L}}]}}"
        },
        "P": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:antimatter\",amount:8192000L}}]}}"
        },
        "Q": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:nuclear_waste\",amount:8192000L}}]}}"
        },
        "R": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:hydrogen\",amount:8192000L}}]}}"
        },
        "S": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanismgenerators:fusion_fuel\",amount:8192000L}}]}}"
        },
        "T": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:brine\",amount:8192000L}}]}}"
        },
        "U": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:fissile_fuel\",amount:8192000L}}]}}"
        },
        "V": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:chlorine\",amount:8192000L}}]}}"
        },
        "W": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:hydrofluoric_acid\",amount:8192000L}}]}}"
        },
        "X": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_chemical_tank",
          "count": 1,
          "nbt": "{mekData:{GasTanks:[{Tank:0b,stored:{gasName:\"mekanism:ethene\",amount:8192000L}}]}}"
        }
      },
      "result": {
        "item": "mekanism:creative_chemical_tank"
      }
    }
    )
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "       ",
        " AAAAA ",
        " ABCBA ",
        " ACDCA ",
        " ABCBA ",
        " AAAAA ",
        "       "
      ],
      "key": {
        "A": {
          "item": "mythicbotany:alfsteel_block"
        },
        "B": {
          "item": "botania:terrasteel_block"
        },
        "C": {
          "item": "kubejs:ultimate_rune"
        },
        "D": {
          "type": "forge:nbt",
          "item": "botania:mana_tablet",
          "count": 1,
          "nbt": "{mana:500000}"
        }
      },
      "result": {
        "type": "forge:nbt",
          "item": "botania:mana_tablet",
          "count": 1,
          "nbt": "{mana:500000,creative:1b}"
      }
    }
    )
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "       ",
        "       ",
        "  ABA  ",
        "  BCB  ",
        "  ABA  ",
        "       ",
        "       "
      ],
      "key": {
        "A": {
          "type": "forge:nbt",
          "item": "tanknull:tank_7",
          "count": 1,
          "nbt": "{fluidinv:{}}"
        },
        "B": {
          "item": "dankstorage:dank_7"
        },
        "C": {
          "item": "storagedrawers:upgrade_template"
        }
      },
      "result": {
        "item": "storagedrawers:creative_storage_upgrade"
      }
    }
    )
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBABBBA",
        "BCDEFEDCB",
        "BDEFGFEDB",
        "BEFHIHFEB",
        "AFGIIIGFA",
        "BEFHIHFEB",
        "BDEFGFEDB",
        "BCDEFEDCB",
        "ABBBABBBA"
      ],
      "key": {
        "A": {
          "item": "avaritia:ultimate_stew"
        },
        "B": {
          "item": "extendedcrafting:the_ultimate_ingot"
        },
        "C": {
          "item": "kubejs:ultimate_rune"
        },
        "D": {
          "item": "kubejs:omniscient_lens"
        },
        "E": {
          "item": "extrastorage:disk_16384k"
        },
        "F": {
          "item": "kubejs:novaextended-extremecircuit-layer0"
        },
        "G": {
          "item": "mekanismmatter:trinium_ingot"
        },
        "H": {
          "item": "kubejs:creative_catalyst"
        },
        "I": {
          "item": "storagedrawers:creative_storage_upgrade"
        }
      },
      "result": {
        "item": "storagedrawers:creative_vending_upgrade"
      }
    }
    )
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "         ",
        "         ",
        "         ",
        "   ABA   ",
        "   CDC   ",
        "   CCC   ",
        "         ",
        "         ",
        "         "
      ],
      "key": {
        "A": {
          "item": "kubejs:novaextended-ark_circuit-layer0"
        },
        "B": {
          "item": "thermal:enderium_glass"
        },
        "C": {
          "item": "mekanismmatter:trinium_reactor_casing"
        },
        "D": {
          "item": "industrialforegoing:machine_frame_supreme"
        }
      },
      "result": {
        "item": "mekanismmatter:naquadah_reactor_controller"
      }
    }
    )
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "         ",
        "         ",
        "  ABCBA  ",
        "  BDEDB  ",
        "  CEFEC  ",
        "  BDEDB  ",
        "  ABCBA  ",
        "         ",
        "         "
      ],
      "key": {
        "A": {
          "item": "kubejs:high_steel_ingot"
        },
        "B": {
          "item": "avaritia:cosmic_meatballs"
        },
        "C": {
          "item": "kubejs:novaextended-ark_circuit-layer0"
        },
        "D": {
          "item": "mekanismmatter:universal_matter"
        },
        "E": {
          "item": "minecraft:nether_star"
        },
        "F": {
          "item": "industrialforegoing:machine_frame_supreme"
        }
      },
      "result": {
        "item": "industrialforegoing:mycelial_reactor"
      }
    }
    )
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBABBBA",
        "BCDEFGDCB",
        "BDEFHFGDB",
        "BEFIJIFGB",
        "AFHKLMHFA",
        "BGFINIFEB",
        "BDGFHFEDB",
        "BCDGFEDCB",
        "ABBBABBBA"
      ],
      "key": {
        "A": {
          "item": "avaritia:ultimate_stew"
        },
        "B": {
          "item": "extendedcrafting:the_ultimate_ingot"
        },
        "C": {
          "item": "kubejs:ultimate_rune"
        },
        "D": {
          "item": "kubejs:omniscient_lens"
        },
        "E": {
          "item": "psi:ivory_psimetal"
        },
        "F": {
          "item": "kubejs:novaextended-extremecircuit-layer0"
        },
        "G": {
          "item": "psi:ebony_psimetal"
        },
        "H": {
          "item": "mekanismmatter:trinium_ingot"
        },
        "I": {
          "item": "kubejs:creative_catalyst"
        },
        "J": {
          "item": "psi:cad_assembly_psimetal"
        },
        "K": {
          "item": "psi:cad_assembly_ivory_psimetal"
        },
        "L": {
          "item": "psi:cad_assembler"
        },
        "M": {
          "item": "psi:cad_assembly_ebony_psimetal"
        },
        "N": {
          "item": "psi:cad_assembly_gold"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "psi:cad",
        "count": 1,
        "nbt": "{componentCORE:{id:\"psi:cad_core_hyperclocked\",Count:1b},componentASSEMBLY:{id:\"psi:cad_assembly_creative\",Count:1b},componentSOCKET:{id:\"psi:cad_socket_transmissive\",Count:1b},componentBATTERY:{id:\"psi:cad_battery_ultradense\",Count:1b}}"}
    }
    )
  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "type": "forge:nbt",
          "item": "psi:cad",
          "count": 1,
          "nbt": "{componentCORE:{id:\"psi:cad_core_hyperclocked\",Count:1b},componentASSEMBLY:{id:\"psi:cad_assembly_creative\",Count:1b},componentSOCKET:{id:\"psi:cad_socket_transmissive\",Count:1b},componentBATTERY:{id:\"psi:cad_battery_ultradense\",Count:1b}}"
        },
        {
          "item": "ars_nouveau:creative_mana_jar"
        },
        {
          "item": "botania:creative_pool"
        },
        {
          "item": "create:creative_motor"
        },
        {
          "item": "create:creative_blaze_cake"
        },
        {
          "item": "mekanism:creative_energy_cube"
        },
        {
          "item": "mekanism:creative_fluid_tank"
        },
        {
          "item": "mekanism:creative_chemical_tank"
        },
        {
          "item": "pneumaticcraft:creative_compressor"
        },
        {
          "item": "storagedrawers:creative_storage_upgrade"
        },
        {
          "item": "storagedrawers:creative_storage_upgrade"
        },
        {
          "item": "pneumaticcraft:creative_compressed_iron_block"
        }
      ],
      "result": {
        "item": "avaritia:akashic_record"
      }
    }
    )
});