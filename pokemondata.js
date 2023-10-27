import { Pokemon } from "./pokemon.js"
import {moves} from "./movesdata.js"
import {type} from "./enum.js"

export const pokemon = {
    Altaria: new Pokemon("Altaria",[type.Dragon,type.Flying],[moves.DragonBreath,moves.Moonblast,moves.DragonDance,moves.CottonGuard],[135,75,95,75,110,85],"https://archives.bulbagarden.net/media/upload/a/a3/Spr_5b_334_s.png","https://archives.bulbagarden.net/media/upload/f/f9/Spr_b_5b_334_s.png"),
    Typhlosion: new Pokemon("Typhlosion",[type.Fire],[moves.DragonBreath,moves.Moonblast,moves.DragonDance,moves.CottonGuard],[138,89,83,114,90,105],"https://archives.bulbagarden.net/media/upload/0/01/Spr_5b_157.png","https://archives.bulbagarden.net/media/upload/a/a1/Spr_b_5b_157.png"),
    Marowak: new Pokemon("Marowak",[type.Ground],[moves.Bonemerang,moves.AncientPower,moves.Leer,moves.DoubleTeam],[120,85,115,55,85,50],"https://archives.bulbagarden.net/media/upload/f/f4/Spr_5b_105.png","https://archives.bulbagarden.net/media/upload/1/10/Spr_b_5b_105.png")
}