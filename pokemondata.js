import { Pokemon } from "./pokemon.js"
import {moves} from "./movesdata.js"
import {type} from "./enum.js"

export let pokemon
export let bossPokemon

export function generatePokemon(){
    pokemon = {
        Altaria: new Pokemon("Altaria",[type.Dragon,type.Flying],[moves.DragonBreath,moves.Moonblast,moves.DragonDance,moves.CottonGuard],[135,75,95,75,110,85],"sprites/front/altaria.png","sprites/back/altaria.png"),
        Typhlosion: new Pokemon("Typhlosion",[type.Fire],[moves.Flamethrower,moves.Thunderpunch,moves.WilloWisp,moves.Smokescreen],[138,89,83,114,90,105],"sprites/front/typhlosion.png","sprites/back/typhlosion.png"),
        Marowak: new Pokemon("Marowak",[type.Ground],[moves.Bonemerang,moves.AncientPower,moves.Leer,moves.DoubleTeam],[120,85,115,55,85,50],"sprites/front/marowak.png","sprites/back/marowak.png"),
        Houndoom: new Pokemon("Houndoom",[type.Dark,type.Fire],[moves.Crunch,moves.ScaryFace,moves.Reversal,moves.Snarl],[135,95,55,115,85,100],"sprites/front/houndoom.png","sprites/back/houndoom.png"),
        Tauros: new Pokemon("Tauros",[type.Normal],[moves.HornAttack,moves.Endeavor,moves.IcyWind,moves.CloseCombat],[135,105,100,45,75,115],"sprites/front/tauros.png","sprites/back/tauros.png"),
        Swellow: new Pokemon("Swellow",[type.Normal,type.Flying],[moves.Endeavor,moves.WorkUp,moves.Peck,moves.Reversal],[120,90,65,80,55,125],"sprites/front/swellow.png","sprites/back/swellow.png"),
        Rhydon: new Pokemon("Rhydon",[type.Ground,type.Rock],[moves.ScaryFace,moves.Earthquake,moves.CockPolish,moves.PoisonJab],[165,135,125,50,50,45],"sprites/front/rhydon.png","sprites/back/rhydon.png"),
        Accelgor: new Pokemon("Accelgor",[type.Bug],[moves.FocusBlast,moves.BugBuzz,moves.MeFirst,moves.EnergyBall],[140,75,45,105,65,145],"sprites/front/accelgor.png","sprites/back/accelgor.png"),
        Bouffalant: new Pokemon("Bouffalant",[type.Normal],[moves.HeadCharge,moves.Megahorn,moves.Earthquake,moves.StoneEdge],[155,115,100,45,100,60],"sprites/front/bouffalant.png","sprites/back/bouffalant.png"),
        Druddigon: new Pokemon("Druddigon",[type.Dragon],[moves.Outrage,moves.Superpower,moves.NightSlash,moves.Payback],[137,125,95,65,95,53],"sprites/front/druddigon.png","sprites/back/druddigon.png"),
        Vanilluxe: new Pokemon("Vanilluxe",[type.Ice],[moves.Blizzard,moves.FlashCannon,moves.LightScreen,moves.AcidArmor],[131,100,90,115,100,84],"sprites/front/vanilluxe.png","sprites/back/vanilluxe.png"),
        Escavalier: new Pokemon("Escavalier",[type.Bug,type.Steel],[moves.XScissor,moves.IronHead,moves.AerialAce,moves.GigaImpact],[130,140,110,65,110,25],"sprites/front/escavalier.png","sprites/back/escavalier.png"),
        Volcarona: new Pokemon("Volcarona",[type.Bug,type.Fire],[moves.Overheat,moves.QuiverDance,moves.BugBuzz,moves.HyperBeam],[145,65,70,140,110,105],"sprites/front/volcarona.png","sprites/back/volcarona.png"),
        Hydreigon: new Pokemon("Hydreigon",[type.Dark,type.Dragon],[moves.FireBlast,moves.FocusBlast,moves.DragonPulse,moves.Surf],[152,110,95,130,95,103],"sprites/front/hydreigon.png","sprites/back/hydreigon.png"),
        Archeops: new Pokemon("Archeops",[type.Rock,type.Flying],[moves.Acrobatics,moves.StoneEdge,moves.DragonClaw,moves.Endeavor],[135,145,70,117,70,115],"sprites/front/archeops.png","sprites/back/archeops.png"),
        Aggron: new Pokemon("Aggron",[type.Steel,type.Rock],[moves.Earthquake,moves.DoubleEdge,moves.StoneEdge,moves.Autotomize],[130,115,185,65,65,55],"sprites/front/aggron.png","sprites/back/aggron.png"),
        Lapras: new Pokemon("Lapras",[type.Water,type.Ice],[moves.HydroPump,moves.Blizzard,moves.Thunder,moves.Sing],[190,90,85,90,100,65],"sprites/front/lapras.png","sprites/back/lapras.png"),
        Haxorus: new Pokemon("Haxorus",[type.Dragon],[moves.Earthquake,moves.Guillotine,moves.Outrage,moves.DragonDance],[136,152,95,65,75,103],"sprites/front/haxorus.png","sprites/back/haxorus.png")
    }
}

export function generateBoss(){
    bossPokemon = {
        Altaria: new Pokemon("Altaria",[type.Dragon,type.Flying],[moves.DragonBreath,moves.Moonblast,moves.DragonDance,moves.CottonGuard],[135,75,95,75,110,85],"sprites/front/altaria.png","sprites/back/altaria.png"),
        Typhlosion: new Pokemon("Typhlosion",[type.Fire],[moves.Flamethrower,moves.Thunderpunch,moves.WilloWisp,moves.Smokescreen],[138,89,83,114,90,105],"sprites/front/typhlosion.png","sprites/back/typhlosion.png"),
        Marowak: new Pokemon("Marowak",[type.Ground],[moves.Bonemerang,moves.AncientPower,moves.Leer,moves.DoubleTeam],[120,85,115,55,85,50],"sprites/front/marowak.png","sprites/back/marowak.png"),
        Tauros: new Pokemon("Tauros",[type.Normal],[moves.HornAttack,moves.Endeavor,moves.IcyWind,moves.CloseCombat],[135,105,100,45,75,115],"https://archives.bulbagarden.net/media/upload/8/80/Spr_5b_128.png","https://archives.bulbagarden.net/media/upload/9/9b/Spr_b_5b_128.png"),
        Swellow: new Pokemon("Swellow",[type.Normal,type.Flying],[moves.Endeavor,moves.WorkUp,moves.Peck,moves.Reversal],[120,90,65,80,55,125],"sprites/front/swellow.png","sprites/back/swellow.png"),
        Rhydon: new Pokemon("Rhydon",[type.Ground,type.Rock],[moves.ScaryFace,moves.Earthquake,moves.CockPolish,moves.PoisonJab],[165,135,125,50,50,45],"sprites/front/rhydon.png","sprites/back/rhydon.png"),
          
    }
}