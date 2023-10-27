import {Move} from "./move.js"
import * as movelogic from "./moveslogic.js"
import {type,category} from "./enum.js"

export const moves = {
    DragonDance: new Move("Dragon Dance",type.Dragon,category.Status,0,100,20,movelogic.DragonDance),
    Moonblast: new Move("Moonblast",type.Fairy,category.Special,95,100,15,movelogic.Moonblast),
    DragonBreath: new Move("Dragon Breath",type.Dragon,category.Special,60,100,20,movelogic.DragonBreath),
    CottonGuard: new Move("Cotton Guard",type.Grass,category.Status,0,100,10,movelogic.CottonGuard),
    Tackle: new Move("Tackle",type.Normal,category.Physical,40,100,35,movelogic.Tackle),
    Bonemerang: new Move("Bonemerang",type.Ground,category.Physical,50,90,10,movelogic.Bonemerang),
    AncientPower: new Move("AncientPower",type.Rock,category.Special,60,100,5,movelogic.AncientPower),
    Leer: new Move("Leer",type.Normal,category.Status,0,100,30,movelogic.Leer),
    DoubleTeam: new Move("Leer",type.Normal,category.Status,0,0,15,movelogic.DoubleTeam),
    Crunch: new Move("Crunch",type.Dark,category.Physical,80,100,15,movelogic.Crunch),
    ScaryFace: new Move("ScaryFace",type.Normal,category.Status,0,100,10,movelogic.ScaryFace),
    
}