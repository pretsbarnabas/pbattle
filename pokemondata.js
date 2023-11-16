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
        Houndoom: new Pokemon("Houndoom",[type.Dark,type.Fire],[moves.Crunch,moves.ScaryFace,moves.Reversal,moves.Snarl],[135,95,55,115,85,100],"https://archives.bulbagarden.net/media/upload/6/6b/Spr_5b_229_f.png","https://archives.bulbagarden.net/media/upload/c/c2/Spr_b_5b_229_f.png"),
        Tauros: new Pokemon("Tauros",[type.Normal],[moves.HornAttack,moves.Endeavor,moves.IcyWind,moves.CloseCombat],[135,105,100,45,75,115],"https://archives.bulbagarden.net/media/upload/8/80/Spr_5b_128.png","https://archives.bulbagarden.net/media/upload/9/9b/Spr_b_5b_128.png"),
        Swellow: new Pokemon("Swellow",[type.Normal,type.Flying],[moves.Endeavor,moves.WorkUp,moves.Peck,moves.Reversal],[120,90,65,80,55,125],"sprites/front/swellow.png","sprites/back/swellow.png"),
        Rhydon: new Pokemon("Rhydon",[type.Ground,type.Rock],[moves.ScaryFace,moves.Earthquake,moves.CockPolish,moves.PoisonJab],[165,135,125,50,50,45],"sprites/front/rhydon.png","sprites/back/rhydon.png"),
    
    }
}

export function generateBoss(){
    bossPokemon = {
        Altaria: new Pokemon("Altaria",[type.Dragon,type.Flying],[moves.DragonBreath,moves.Moonblast,moves.DragonDance,moves.CottonGuard],[135,75,95,75,110,85],"sprites/front/altaria.png","sprites/back/altaria.png"),
        Typhlosion: new Pokemon("Typhlosion",[type.Fire],[moves.Flamethrower,moves.Thunderpunch,moves.WilloWisp,moves.Smokescreen],[138,89,83,114,90,105],"sprites/front/typhlosion.png","sprites/back/typhlosion.png"),
        Marowak: new Pokemon("Marowak",[type.Ground],[moves.Bonemerang,moves.AncientPower,moves.Leer,moves.DoubleTeam],[120,85,115,55,85,50],"sprites/front/marowak.png","sprites/back/marowak.png"),
       }
}