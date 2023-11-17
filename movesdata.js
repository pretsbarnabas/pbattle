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
    Reversal: new Move("Reversal",type.Fighting,category.Physical,20,100,15,movelogic.Reversal),
    Snarl: new Move("Snarl",type.Dark,category.Special,55,95,15,movelogic.Snarl),
    HornAttack: new Move("HornAttack",type.Normal,category.Physical,65,100,25,movelogic.HornAttack),
    Endeavor: new Move("Endeavor",type.Normal,category.Physical,0,100,5,movelogic.Endeavor),
    IcyWind: new Move("IcyWind",type.Ice,category.Special,55,95,15,movelogic.IcyWind),
    CloseCombat: new Move("CloseCombat",type.Fighting,category.Physical,120,100,5,movelogic.CloseCombat),
    WorkUp: new Move("WorkUp",type.Normal,category.Status,0,100,30,movelogic.WorkUp),
    Peck: new Move("Peck",type.Flying,category.Physical,35,100,35,movelogic.Peck),
    Earthquake: new Move("Earthquake",type.Grass,category.Physical,100,100,10,movelogic.Earthquake),
    CockPolish: new Move("CockPolish",type.Rock,category.Status,0,100,20,movelogic.CockPolish),
    PoisonJab: new Move("PoisonJab",type.Poison,category.Physical,80,100,20,movelogic.PoisonJab),
    AcidSpray: new Move("AcidSpray",type.Poison,category.Special,40,100,20,movelogic.AcidSpray),
    PainSplit: new Move("PainSplit",type.Normal,category.Status,0,100,20,movelogic.PainSplit),
    GunkShot: new Move("GunkShot",type.Poison,category.Physical,120,80,5,movelogic.GunkShot),
    BodySlam: new Move("BodySlam",type.Normal,category.Physical,85,100,15,movelogic.BodySlam),
    
}