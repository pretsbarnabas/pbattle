import { combatLogger } from "./combatLogger.js"
import { getTypeEffectiveness } from "./typechart.js"
import {stage, category,type,statusCondition} from "./enum.js"


async function CalculateDamage(user,move,target){
    let damage
    if(move.category == category.Physical){
        if(user.type.includes(move.type)){
            damage = ((22*move.power*((user.attack*user.attackStage[0]/user.attackStage[1])/(target.defense*(target.defenseStage[0]/target.defenseStage[1]))))/50 + 2)*((Math.floor(Math.random()*26)+85)/100)*1.5*getTypeEffectiveness(move.type,target.type)
        }
        else{
            damage = ((22*move.power*((user.attack*user.attackStage[0]/user.attackStage[1])/(target.defense*(target.defenseStage[0]/target.defenseStage[1]))))/50 + 2)*((Math.floor(Math.random()*26)+85)/100)*getTypeEffectiveness(move.type,target.type)
        }
        if(damage<0) damage = 1
        damage = Math.round(damage) 
    }
    else if(move.category == category.Special){
        if(user.type.includes(move.type)){
            damage = ((22*move.power*((user.spattack*user.spattackStage[0]/user.spattackStage[1])/(target.spdefense*(target.spdefenseStage[0]/target.spdefenseStage[1]))))/50 + 2)*((Math.floor(Math.random()*26)+85)/100)*1.5*getTypeEffectiveness(move.type,target.type)
        }
        else{
            damage = ((22*move.power*((user.spattack*user.spattackStage[0]/user.spattackStage[1])/(target.spdefense*(target.spdefenseStage[0]/target.spdefenseStage[1]))))/50 + 2)*((Math.floor(Math.random()*26)+85)/100)*getTypeEffectiveness(move.type,target.type)
        }
        if(damage<0) damage = 1
    }
    if(Math.floor(Math.random()*24) == 23){
        console.log("bap")
        damage = damage * 1.5
        if(move.category == category.Physical){
            if(target.defenseStage[0]>target.defenseStage[1]){
                damage = damage * (target.defenseStage[0]/target.defenseStage[1])
            }
            if(user.attackStage[0]<user.attackStage[1]){
                damage = damage * (user.attackStage[1]/user.attackStage[0])
            }
        }
        else{
            if(target.spdefenseStage[0]>target.spdefenseStage[1]){
                damage = damage * (target.spdefenseStage[0]/target.spdefenseStage[1])
            }   
            if(user.spattackStage[0]<user.spattackStage[1]){
                damage = damage * (user.spattackStage[1]/user.spattackStage[0])
            }
        }
    } 
    if(damage>0){
        target.imgelement.classList.add("flicker-2")
        await combatLogger.sleep(2000)
        target.imgelement.classList.remove("flicker-2")
    }
    damage = Math.round(damage)
    return damage
}

function ModifyStatStage(target, stage, amount){
    if(stage == stage.accuracy || stage == stage.evasion){
        if(amount>0){
            if(target[stage][0] == 9) return
            if(target[stage][1] > 3){
                if(target[stage][1] - amount < 3){
                    target[stage][0] += 3-(target[stage][1]-amount)
                    target[stage][1] = 3
                    return
                }
                target[stage][1] -= amount
            }
            else{
                if(target[stage][0]+amount > 9){
                    target[stage][0] = 9
                    return
                }
                target[stage][0]+= amount
            }
        }
        else{
            if(target[stage][1] == 9) return
            if(target[stage][0] > 3){
                if(target[stage][0] - amount*-1 < 3){
                    target[stage][1] += 3-(target[stage][1]-amount*-1)
                    target[stage][0] = 3
                    return
                }
                target[stage][0] -= amount*-1
            }
            else{
                if(target[stage][1]+amount*-1 > 9){
                    target[stage][1] = 9
                    return
                }
                target[stage][1]+= amount*-1
            }
        }
    }
    else{
        if(amount>0){
            if(target[stage][0] == 8) return
            if(target[stage][1] > 2){
                if(target[stage][1] - amount < 2){
                    target[stage][0] += 2-(target[stage][1]-amount)
                    target[stage][1] = 2
                    return
                }
                target[stage][1] -= amount
            }
            else{
                if(target[stage][0]+amount > 8){
                    target[stage][0] = 8
                    return
                }
                target[stage][0]+= amount
            }
        }
        else{
            if(target[stage][1] == 8) return
            if(target[stage][0] > 2){
                if(target[stage][0] - amount*-1 < 2){
                    target[stage][1] += 2-(target[stage][1]-amount*-1)
                    target[stage][0] = 2
                    return
                }
                target[stage][0] -= amount*-1
            }
            else{
                if(target[stage][1]+amount*-1 > 8){
                    target[stage][1] = 8
                    return
                }
                target[stage][1]+= amount*-1
            }
        }
    }
}

function HitCheck(user,target,accuracy){
    let combinedStatStages = (user[stage.accuracy][0]-user[stage.accuracy][1]) - (target[stage.accuracy][0]-target[stage.accuracy][1])
    if(combinedStatStages>6){
        combinedStatStages = 6
    }
    else if(combinedStatStages<-6){
        combinedStatStages = -6
    }
    if(combinedStatStages>0){
        return Math.floor(Math.random()*101) <= (accuracy *(combinedStatStages/3))
    }
    else if(combinedStatStages<0){
        return Math.floor(Math.random()*101) <= (accuracy * (3/(combinedStatStages*-1)))
    }
    return Math.floor(Math.random()*101) <= accuracy
}

function rngCheck(chance){
    return Math.floor(Math.random()*101) <= chance
}

async function setStatusCondition(target,status){
    if(target.statusCondition == statusCondition.normal){
        target.statusCondition = status
        await combatLogger.Log(`${target.name} got ${status}`)
    }
}

export async function DragonDance(user,target){
    ModifyStatStage(user,stage.attack,1)
    if(target[stage.attack][0]==8){
        await combatLogger.Log(`${user.name}'s attack won't go higher!`)
    }
    else{
        ModifyStatStage(target,stage.attack,1)
        await combatLogger.Log(`${user.name}'s attack rose!`)
    }
    if(target[stage.speed][0]==8){
        await combatLogger.Log(`${user.name}'s speed won't go higher!`)
    }
    else{
        ModifyStatStage(target,stage.speed, 1)
        await combatLogger.Log(`${user.name}'s speed rose!`)
    }




}

export function Tackle(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    return CalculateDamage(user,this,target)
}

export function Moonblast(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = CalculateDamage(user,this,target)
    if(rngCheck(30)){
        ModifyStatStage(target,stage.spattack,-1)
    }   
    return damage
}

export async function DragonBreath(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = CalculateDamage(user,this,target)
    if(rngCheck(30)){
        if(!target.type.includes(type.Electric)){
            await setStatusCondition(target,statusCondition.paralysis)
        }
    }

    return damage
}

export async function CottonGuard(user,target){
    if(target[stage.defense][0]==8){
        await combatLogger.Log(`${user.name}'s defense won't go higher!`)
        return
    }
    ModifyStatStage(target,stage.defense,3)
    await combatLogger.Log(`${user.name}'s defense rose drastically!`)
}

export function Bonemerang(user,target) {
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = CalculateDamage(user,this,target)
    damage += CalculateDamage(user,this,target)
    return damage
}

export async function AncientPower(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = CalculateDamage(user,this,target)
    if(rngCheck(10)){
        ModifyStatStage(user,stage.attack,1)
        await combatLogger.Log(`${user.name}'s attack rose!`)
        ModifyStatStage(user,stage.defense,1)
        await combatLogger.Log(`${user.name}'s defense rose!`)
        ModifyStatStage(user,stage.spattack,1)
        await combatLogger.Log(`${user.name}'s special attack rose!`)
        ModifyStatStage(user,stage.spdefense,1)
        await combatLogger.Log(`${user.name}'s special defense rose!`)
        ModifyStatStage(user,stage.speed,1)
        await combatLogger.Log(`${user.name}'s speed rose!`)
    }

    return damage
}

export async function Leer(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    await ModifyStatStage(target,stage.defense,-1)
}

export async function DoubleTeam(user,target){
    await ModifyStatStage(user,stage.evasion,1)
}

export async function Crunch(user,target){
    const damage = CalculateDamage(user,this,target)
    if(rngCheck(20)){
        await ModifyStatStage(target,stage.defense,1)
    }
    
    return damage
}

export async function ScaryFace(user,target){
    await ModifyStatStage(target,stage.speed,-2)
}

export function Reversal(user,target){
    const hpPercentage = (user.hp / user.maxhp)*100
    const damage = CalculateDamage(user,this,target)
    if(hpPercentage > 70){
        return damage
    }
    else if(hpPercentage > 35.1){
        return damage * 2
    }
    else if(hpPercentage > 20.1){
        return damage * 4
    }
    else if(hpPercentage > 10.1){
        return damage * 5
    }
    else if(hpPercentage > 4.1){
        return damage * 7.5
    }
    else if(hpPercentage > 0){
        return damage * 10
    }
}

export async function Snarl(user,target){
    const damage = CalculateDamage(user,this,target)
    await ModifyStatStage(target,stage.spattack,-1)
    return damage
}

export function HornAttack(user,target){
    const damage = CalculateDamage(user,this,target)
    return damage
}

export function Endeavor(user,target){
    if(user.hp < target.hp){
        target.hp = user.hp
    }
}

export async function IcyWind(user,target){
    const damage = CalculateDamage(user,this,target)
    await ModifyStatStage(target,stage.speed,-1)
    return damage
}

export async function CloseCombat(user,target){
    const damage = CalculateDamage(user,this,target)
    await ModifyStatStage(user,stage.defense,-1)
    await ModifyStatStage(user,stage.spdefense,-1)
}