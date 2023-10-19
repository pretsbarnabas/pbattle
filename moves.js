import { combatLogger } from "./combatLogger.js"
import { getTypeEffectiveness } from "./typechart.js"
import {type, category} from "./enum.js"

let combatlogger = new combatLogger()

function CalculateDamage(user,move,target){
    let damage
    if(move.category == category.Physical){
        if(user.type.includes(move.type)){
            damage = ((22*move.power*((user.attack*user.attackStage[0]/user.attackStage[1])/(target.defense*user.defenseStage[0]/user.defenseStage[1])))/50 + 2)*(Math.floor(Math.random()*101)/100+0.001)*1.5*getTypeEffectiveness(move.type,target.type)
        }
        else{
            damage = ((22*move.power*((user.attack*user.attackStage[0]/user.attackStage[1])/(target.defense*user.defenseStage[0]/user.defenseStage[1])))/50 + 2)*(Math.floor(Math.random()*101)/100+0.001)*getTypeEffectiveness(move.type,target.type)
        }
        if(damage<0) damage = 1
        damage = Math.round(damage) 
    }
    else if(move.category == category.Special){
        if(user.type.includes(move.type)){
            damage = ((22*move.power*((user.spattack*user.spattackStage[0]/user.spattackStage[1])/(target.spdefense*user.spdefenseStage[0]/user.spdefenseStage[1])))/50 + 2)*(Math.floor(Math.random()*101)/100+0.001)*1.5*getTypeEffectiveness(move.type,target.type)
        }
        else{
            damage = ((22*move.power*((user.spattack*user.spattackStage[0]/user.spattackStage[1])/(target.spdefense*user.spdefenseStage[0]/user.spdefenseStage[1])))/50 + 2)*(Math.floor(Math.random()*101)/100+0.001)*getTypeEffectiveness(move.type,target.type)
        }
        if(damage<0) damage = 1
        damage = Math.round(damage)
    }
    return damage
}

function ModifyStatStage(target, stage, amount){
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

export function DragonDance(user,target){
    console.log(user.attackStage)
    ModifyStatStage(target,"attackStage", -1)
    console.log(user.attackStage)
    combatlogger.Log("beepboop")
}

export function Tackle(user,target){
    combatlogger.Log(CalculateDamage(user,this,target))
    return CalculateDamage(user,this,target)
}