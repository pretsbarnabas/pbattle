import {Move} from "./move.js"
import * as movelogic from "./moveslogic.js"
import {type,category} from "./enum.js"

export const moves = {
    DragonDance: new Move("Dragon Dance",type.Dragon,category.Status,0,100,20,movelogic.DragonDance),
    Moonblast: new Move("Moonblast",type.Fairy,category.Physical,95,100,15,movelogic.Moonblast),
    DragonBreath: new Move("Dragon Breath",type.Dragon,category.Special,60,100,20,movelogic.DragonBreath),
    CottonGuard: new Move("Cotton Guard",type.Grass,category.Status,0,100,10,movelogic.CottonGuard)
}