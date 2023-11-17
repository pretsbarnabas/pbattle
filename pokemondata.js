import { Pokemon } from "./pokemon.js"
import {moves} from "./movesdata.js"
import {type} from "./enum.js"

export const pokemon = {
    Altaria: new Pokemon("Altaria",[type.Dragon,type.Flying],[moves.DragonBreath,moves.Moonblast,moves.DragonDance,moves.CottonGuard],[135,75,95,75,110,85],"https://archives.bulbagarden.net/media/upload/a/a3/Spr_5b_334_s.png","https://archives.bulbagarden.net/media/upload/f/f9/Spr_b_5b_334_s.png"),
    Typhlosion: new Pokemon("Typhlosion",[type.Fire],[moves.DragonBreath,moves.Moonblast,moves.DragonDance,moves.CottonGuard],[138,89,83,114,90,105],"https://archives.bulbagarden.net/media/upload/0/01/Spr_5b_157.png","https://archives.bulbagarden.net/media/upload/a/a1/Spr_b_5b_157.png"),
    Marowak: new Pokemon("Marowak",[type.Ground],[moves.Bonemerang,moves.AncientPower,moves.Leer,moves.DoubleTeam],[120,85,115,55,85,50],"https://archives.bulbagarden.net/media/upload/f/f4/Spr_5b_105.png","https://archives.bulbagarden.net/media/upload/1/10/Spr_b_5b_105.png"),
    Houndoom: new Pokemon("Houndoom",[type.Dark,type.Fire],[moves.Crunch,moves.ScaryFace,moves.Reversal,moves.Snarl],[135,95,55,115,85,100],"https://archives.bulbagarden.net/media/upload/6/6b/Spr_5b_229_f.png","https://archives.bulbagarden.net/media/upload/c/c2/Spr_b_5b_229_f.png"),
    Tauros: new Pokemon("Tauros",[type.Normal],[moves.HornAttack,moves.Endeavor,moves.IcyWind,moves.CloseCombat],[135,105,100,45,75,115],"https://archives.bulbagarden.net/media/upload/8/80/Spr_5b_128.png","https://archives.bulbagarden.net/media/upload/9/9b/Spr_b_5b_128.png"),
    Swellow: new Pokemon("Swellow",[type.Normal,type.Flying],[moves.Endeavor,moves.WorkUp,moves.Peck,moves.Reversal],[120,90,65,80,55,125],"sprites/front/swellow","sprites/back/swellow"),
    Rhydon: new Pokemon("Rhydon",[type.Ground,type.Rock],[moves.ScaryFace,moves.Earthquake,moves.CockPolish,moves.PoisonJab],[165,135,125,50,50,45],"sprites/front/rhydon","sprites/back/rhydon"),
    Gulpin: new Pokemon("Gulpin",[type.Poison],[moves.AcidSpray,moves.PainSplit,moves.GunkShot,moves.BodySlam],[130,48,58,48,58,45],"sprites/front/gulpin","sprites/back/gulpin"),
    Glalie: new Pokemon("Glalie",[type.Ice],[moves.IceFang,moves.BodySlam,moves.Snowscape,moves.Crunch],[140,85,85,85,85,85],"sprites/front/glalie","sprites/back/glalie"),
    
}