import { getTypeEffectiveness } from "./typechart.js"

function CalculateDamage(move,target){
    let damage
    if(move.category == "Physical"){
        if(this.type.includes(move.type)){
            damage = ((22*move.power*((this.attack*this.attackStage[0]/this.attackStage[1])/(target.defense*this.defenseStage[0]/this.defenseStage[1])))/50 + 2)*(Math.floor(Math.random()*101)/100)*1.5*getTypeEffectiveness(move.type,target.type)
        }
        else{
            damage = ((22*move.power*((this.attack*this.attackStage[0]/this.attackStage[1])/(target.defense*this.defenseStage[0]/this.defenseStage[1])))/50 + 2)*(Math.floor(Math.random()*101)/100)*getTypeEffectiveness(move.type,target.type)
        }
        if(damage<0) damage = 1
        damage = Math.round(damage) 
    }
    else if(move.category == "Special"){
        if(this.type.includes(move.type)){
            damage = ((22*move.power*((this.spattack*this.spattackStage[0]/this.spattackStage[1])/(target.spdefense*this.spdefenseStage[0]/this.spdefenseStage[1])))/50 + 2)*(Math.floor(Math.random()*101)/100)*1.5*getTypeEffectiveness(move.type,target.type)
        }
        else{
            damage = ((22*move.power*((this.spattack*this.spattackStage[0]/this.spattackStage[1])/(target.spdefense*this.spdefenseStage[0]/this.spdefenseStage[1])))/50 + 2)*(Math.floor(Math.random()*101)/100)*getTypeEffectiveness(move.type,target.type)
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

export function DragonDance(user){
    console.log(user.attackStage)
    ModifyStatStage(user,"attackStage", -1)
    console.log(user.attackStage)
}