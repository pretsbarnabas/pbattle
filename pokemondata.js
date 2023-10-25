import { Pokemon } from "./pokemon.js"
import {moves} from "./movesdata.js"
import {type} from "./enum.js"

export const pokemon = {
    Altaria: new Pokemon("Altaria",[type.Dragon,type.Flying],[moves.DragonBreath,moves.Moonblast,moves.DragonDance,moves.CottonGuard],[135,75,95,75,110,85],"https://archives.bulbagarden.net/media/upload/a/a3/Spr_5b_334_s.png","https://archives.bulbagarden.net/media/upload/f/f9/Spr_b_5b_334_s.png")
}