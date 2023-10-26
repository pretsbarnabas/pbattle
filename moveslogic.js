import { combatLogger } from "./combatLogger.js"
import { getTypeEffectiveness } from "./typechart.js"
import {stage, category,type,statusCondition} from "./enum.js"


function CalculateDamage(user,move,target){
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

function setStatusCondition(target,status){
    if(target.statusCondition == statusCondition.normal){
        target.statusCondition = statusCondition[status]
    }
}

export async function DragonDance(user,target){
    ModifyStatStage(target,stage.attack,1)
    ModifyStatStage(target,stage.speed, 1)
    combatLogger.Log(`It's Attack rose sharply! `)
    await combatLogger.sleep(1000)
    combatLogger.Log(`It's Speed rose sharply! `)
    await combatLogger.sleep(1000)
}

export function Tackle(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    combatLogger.Log(CalculateDamage(user,this,target))
    return CalculateDamage(user,this,target)
}

export function Moonblast(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    if(rngCheck(30)){
        ModifyStatStage(target,stage.spattack,-1)
    }   
    return CalculateDamage(user,this,target)
}

export function DragonBreath(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    if(rngCheck(30)){
        if(!target.type.includes(type.Electric)){
            setStatusCondition(target,statusCondition.paralysis)
        }
    }
    return CalculateDamage(user,this,target)
}

export function CottonGuard(user,target){
    ModifyStatStage(target,stage.defense,3)
}