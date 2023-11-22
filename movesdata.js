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
    AncientPower: new Move("Ancient Power",type.Rock,category.Special,60,100,5,movelogic.AncientPower),
    Leer: new Move("Leer",type.Normal,category.Status,0,100,30,movelogic.Leer),
    DoubleTeam: new Move("Double Team",type.Normal,category.Status,0,0,15,movelogic.DoubleTeam),
    Crunch: new Move("Crunch",type.Dark,category.Physical,80,100,15,movelogic.Crunch),
    ScaryFace: new Move("Scary Face",type.Normal,category.Status,0,100,10,movelogic.ScaryFace),
    Reversal: new Move("Reversal",type.Fighting,category.Physical,20,100,15,movelogic.Reversal),
    Snarl: new Move("Snarl",type.Dark,category.Special,55,95,15,movelogic.Snarl),
    HornAttack: new Move("Horn Attack",type.Normal,category.Physical,65,100,25,movelogic.HornAttack),
    Endeavor: new Move("Endeavor",type.Normal,category.Physical,0,100,5,movelogic.Endeavor),
    IcyWind: new Move("Icy Wind",type.Ice,category.Special,55,95,15,movelogic.IcyWind),
    CloseCombat: new Move("Close Combat",type.Fighting,category.Physical,120,100,5,movelogic.CloseCombat),
    WorkUp: new Move("Work Up",type.Normal,category.Status,0,100,30,movelogic.WorkUp),
    Peck: new Move("Peck",type.Flying,category.Physical,35,100,35,movelogic.Peck),
    Earthquake: new Move("Earthquake",type.Ground,category.Physical,100,100,10,movelogic.Earthquake),
    CockPolish: new Move("Rock Polish",type.Rock,category.Status,0,100,20,movelogic.CockPolish),
    PoisonJab: new Move("Poison Jab",type.Poison,category.Physical,80,100,20,movelogic.PoisonJab),
    Flamethrower: new Move("Flamethrower",type.Fire,category.Special,90,100,15,movelogic.Flamethrower),
    Thunderpunch: new Move("Thunderpunch",type.Electric,category.Physical,75,100,15,movelogic.ThunderPunch),
    WilloWisp: new Move("Will-o-Wisp",type.Fire,category.Status,0,85,15,movelogic.WilloWisp),
    Smokescreen: new Move("Smokescreen",type.Normal,category.Status,0,100,20,movelogic.Smokescreen),
    FocusBlast: new Move("Focus Blast",type.Fighting,category.Special,120,70,5,movelogic.FocusBlast),
    BugBuzz: new Move("Bug Buzz",type.Bug,category.Special,90,100,10,movelogic.BugBuzz),
    MeFirst: new Move("Me First",type.Normal,category.Status,0,0,20,movelogic.MeFirst),
    EnergyBall: new Move("Energy Ball",type.Bug,category.Special,90,100,10,movelogic.EnergyBall),
    StoneEdge: new Move("Stone Edge",type.Rock,category.Physical,100,80,5,movelogic.StoneEdge),
    Megahorn:  new Move("Megahorn",type.Bug,category.Physical,120,85,10,movelogic.MegaHorn),
    HeadCharge: new Move("Head Charge",type.Normal,category.Physical,120,100,15,movelogic.HeadCharge),
    NightSlash: new Move("Night Slash",type.Dark,category.Physical,70,100,15,movelogic.NightSlash),
    Payback: new Move("Payback",type.Dark,category.Physical,50,100,10,movelogic.Payback),
    Superpower: new Move("Superpower",type.Fighting,category.Physical,120,100,5,movelogic.Superpower),
    Outrage: new Move("Outrage",type.Dragon,category.Physical,120,100,10,movelogic.Outrage),
    Blizzard: new Move("Blizzard",type.Ice,category.Special,110,70,5,movelogic.Blizzard),
    FlashCannon: new Move("Flash Cannon",type.Steel,category.Special,80,100,10,movelogic.FlashCannon),
    LightScreen: new Move("Light Screen",type.Psychic,category.Status,0,0,30,movelogic.LightScreen),
    AcidArmor: new Move("Acid Armor",type.Poison,category.Status,0,0,20,movelogic.AcidArmor),
    GigaImpact: new Move("Giga Impact",type.Normal,category.Physical,150,90,5,movelogic.GigaImpact),
    AerialAce: new Move("Aerial Ace",type.Flying,category.Physical,60,100,20,movelogic.AerialAce),
    IronHead: new Move("Iron Head",type.Steel,category.Physical,80,100,15,movelogic.IronHead),
    XScissor: new Move("X-Scissor",type.Bug,category.Physical,80,100,15,movelogic.XScissor),
    HyperBeam: new Move("Hyper Beam",type.Normal,category.Special,150,90,5,movelogic.HyperBeam),
    QuiverDance: new Move("Quiver Dance",type.Bug,category.Status,0,0,20,movelogic.QuiverDance),
    Overheat: new Move("Overheat",type.Fire,category.Special,130,90,5,movelogic.Overheat),
    FireBlast: new Move("Fire Blast",type.Fire,category.Special,110,85,5,movelogic.FireBlast),
    DragonPulse: new Move("Dragon Pulse",type.Dragon,category.Special,85,100,10,movelogic.DragonPulse),
    Surf: new Move("Surf",type.Water,category.Special,90,100,15,movelogic.Surf),
    Acrobatics: new Move("Acrobatics",type.Flying,category.Physical,110,100,15,movelogic.Acrobatics),
    DragonClaw: new Move("Dragon Claw",type.Dragon,category.Physical,80,100,15,movelogic.DragonClaw),
    DoubleEdge: new Move("Double-Edge",type.Normal,category.Physical,120,100,15,movelogic.DoubleEdge),
    Autotomize: new Move("Autotomize",type.Steel,category.Status,0,0,15,movelogic.Autotomize),
    HydroPump: new Move("Hydro Pump",type.Water,category.Special,110,80,5,movelogic.HydroPump),
    Thunder: new Move("Thunder",type.Electric,category.Special,110,70,10,movelogic.Thunder),
    Sing: new Move("Sing",type.Normal,category.Status,0,0,15,movelogic.Sing),
    Guillotine: new Move("Guillotine",type.Normal,category.Physical,100,30,5,movelogic.Guillotine),
    AerialAce: new Move("Aerial Ace",type.Flying,category.Physical,60,100,20,movelogic.AerialAce),
    SuckerPunch: new Move("Sucker Punch",type.Dark,category.Physical,70,100,5,movelogic.SuckerPunch,1),
    ShadowBall: new Move("Shadow Ball",type.Ghost,category.Special,80,100,15,movelogic.ShadowBall),
    WildCharge: new Move("Wild Charge",type.Electric,category.Physical,90,100,15,movelogic.WildCharge),
    Bulldoze: new Move("Bulldoze",type.Ground,category.Physical,60,100,20,movelogic.Bulldoze),
    BraveBird: new Move("Brave Bird",type.Flying,category.Physical,120,100,15,movelogic.BraveBird),
    CrushClaw: new Move("Crush Claw",type.Normal,category.Physical,75,95,10,movelogic.CrushClaw),
    ShadowClaw: new Move("Shadow Claw",type.Ghost,category.Physical,70,100,15,movelogic.ShadowClaw),
    ExtremeSpeed: new Move("Extreme Speed",type.Normal,category.Physical,80,100,5,movelogic.ExtremeSpeed,2),
    AuraSphere: new Move("Aura Sphere",type.Fighting,category.Special,80,100,20,movelogic.AuraSphere),
    DragonRush: new Move("Dragon Rush",type.Dragon,category.Physical,100,75,10,movelogic.DragonRush)
}