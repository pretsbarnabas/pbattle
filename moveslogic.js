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
        await combatLogger.sleep(1000)
        target.imgelement.classList.remove("flicker-2")
    }
    damage = Math.round(damage)
    return damage
}

async function ModifyStatStage(target, statstage, amount){
    if(statstage[0] == stage.accuracy[0] || statstage[0] == stage.evasion[0]){
        if(amount>0){
            if(target[statstage[0]][0] == 9) {
                await combatLogger.Log(`${target.name}'s ${statstage[1]} won't go any higher!`)
            }
            if(target[statstage[0]][1] > 3){
                if(target[statstage[0]][1] - amount < 3){
                    target[statstage[0]][0] += 3-(target[statstage[0]][1]-amount)
                    target[statstage[0]][1] = 3
                    target.imgelement.classList.add("buff_anim")
                    await combatLogger.sleep(1200)
                    target.imgelement.classList.remove("buff_anim")
                    switch (amount) {
                        case 1:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} rose!`)
                            break;
                        case 2:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} rose sharply!`)
                            break;
                        case 3:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} rose drastically!`)
                        default:
                            break;
                    }
                    return
                }
                target[statstage[0]][1] -= amount
                target.imgelement.classList.add("buff_anim")
                await combatLogger.sleep(1200)
                target.imgelement.classList.remove("buff_anim")
                switch (amount) {
                    case 1:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} rose!`)
                        break;
                    case 2:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} rose sharply!`)
                        break;
                    case 3:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} rose drastically!`)
                    default:
                        break;
                }
            }
            else{
                if(target[statstage[0]][0]+amount > 9){
                    target[statstage[0]][0] = 9
                    target.imgelement.classList.add("buff_anim")
                    await combatLogger.sleep(1200)
                    target.imgelement.classList.remove("buff_anim")
                    switch (amount) {
                        case 1:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} rose!`)
                            break;
                        case 2:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} rose sharply!`)
                            break;
                        case 3:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} rose drastically!`)
                        default:
                            break;
                    }
                    return
                }
                target[statstage[0]][0]+= amount
                target.imgelement.classList.add("buff_anim")
                await combatLogger.sleep(1200)
                target.imgelement.classList.remove("buff_anim")
                switch (amount) {
                    case 1:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} rose!`)
                        break;
                    case 2:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} rose sharply!`)
                        break;
                    case 3:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} rose drastically!`)
                    default:
                        break;
                }
            }
        }
        else{
            if(target[statstage[0]][1] == 9){
                await combatLogger.Log(`${target.name}'s ${statstage[1]} won't go any lower!`)
            }
            if(target[statstage[0]][0] > 3){
                if(target[statstage[0]][0] - amount*-1 < 3){
                    target[statstage[0]][1] += 3-(target[statstage[0]][1]-amount*-1)
                    target[statstage[0]][0] = 3
                    target.classList.add("debuff_anim")
                    await combatLogger.sleep(1200)
                    target.classList.remove("debuff_anim")
                    switch (amount*-1) {
                        case 1:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} fell!`)
                            break;
                        case 2:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} harshly fell!`)
                            break;
                        case 3:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} severely fell!`)
                        default:
                            break;
                    }
                    return
                }
                target[statstage[0]][0] -= amount*-1
                target.classList.add("debuff_anim")
                await combatLogger.sleep(1200)
                target.classList.remove("debuff_anim")
                switch (amount*-1) {
                    case 1:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} fell!`)
                        break;
                    case 2:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} harshly fell!`)
                        break;
                    case 3:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} severely fell!`)
                    default:
                        break;
                }
            }
            else{
                if(target[statstage[0]][1]+amount*-1 > 9){
                    target[statstage[0]][1] = 9
                    target.classList.add("debuff_anim")
                    await combatLogger.sleep(1200)
                    target.classList.remove("debuff_anim")
                    switch (amount*-1) {
                        case 1:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} fell!`)
                            break;
                        case 2:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} harshly fell!`)
                            break;
                        case 3:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} severely fell!`)
                        default:
                            break;
                    }
                    return
                }
                target[statstage[0]][1]+= amount*-1
                target.classList.add("debuff_anim")
                await combatLogger.sleep(1200)
                target.classList.remove("debuff_anim")
                switch (amount*-1) {
                    case 1:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} fell!`)
                        break;
                    case 2:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} harshly fell!`)
                        break;
                    case 3:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} severely fell!`)
                    default:
                        break;
                }
            }
        }
    }
    else{
        if(amount>0){
            if(target[statstage[0]][0] == 8){
                await combatLogger.Log(`${target.name}'s ${statstage[1]} won't go any higher!`)
            }
            if(target[statstage[0]][1] > 2){
                if(target[statstage[0]][1] - amount < 2){
                    target[statstage[0]][0] += 2-(target[statstage[0]][1]-amount)
                    target[statstage[0]][1] = 2
                    target.imgelement.classList.add("buff_anim")
                    await combatLogger.sleep(1200)
                    target.imgelement.classList.remove("buff_anim")
                    switch (amount) {
                        case 1:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} rose!`)
                            break;
                        case 2:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} rose sharply!`)
                            break;
                        case 3:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} rose drastically!`)
                        default:
                            break;
                    }
                    return
                }
                target[statstage[0]][1] -= amount
                target.imgelement.classList.add("buff_anim")
                await combatLogger.sleep(1200)
                target.imgelement.classList.remove("buff_anim")
                switch (amount) {
                    case 1:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} rose!`)
                        break;
                    case 2:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} rose sharply!`)
                        break;
                    case 3:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} rose drastically!`)
                    default:
                        break;
                }
            }
            else{
                if(target[statstage[0]][0]+amount > 8){
                    target[statstage[0]][0] = 8
                    target.imgelement.classList.add("buff_anim")
                    await combatLogger.sleep(1200)
                    target.imgelement.classList.remove("buff_anim")
                    switch (amount) {
                        case 1:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} rose!`)
                            break;
                        case 2:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} rose sharply!`)
                            break;
                        case 3:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} rose drastically!`)
                        default:
                            break;
                    }
                    return
                }
                target[statstage[0]][0]+= amount
                target.imgelement.classList.add("buff_anim")
                await combatLogger.sleep(1200)
                target.imgelement.classList.remove("buff_anim")
                switch (amount) {
                    case 1:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} rose!`)
                        break;
                    case 2:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} rose sharply!`)
                        break;
                    case 3:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} rose drastically!`)
                    default:
                        break;
                }
            }
        }
        else{
            if(target[statstage[0]][1] == 8){
                await combatLogger.Log(`${target.name}'s ${statstage[1]} won't go any lower!`)
            }
            if(target[statstage[0]][0] > 2){
                if(target[statstage[0]][0] - amount*-1 < 2){
                    target[statstage[0]][1] += 2-(target[statstage[0]][1]-amount*-1)
                    target[statstage[0]][0] = 2
                    target.imgelement.classList.add("debuff_anim")
                    await combatLogger.sleep(1200)
                    target.imgelement.classList.remove("debuff_anim")
                    switch (amount*-1) {
                        case 1:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} fell!`)
                            break;
                        case 2:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} harshly fell!`)
                            break;
                        case 3:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} severely fell!`)
                        default:
                            break;
                    }
                    return
                }
                target[statstage[0]][0] -= amount*-1
                target.imgelement.classList.add("debuff_anim")
                await combatLogger.sleep(1200)
                target.imgelement.classList.remove("debuff_anim")
                switch (amount*-1) {
                    case 1:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} fell!`)
                        break;
                    case 2:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} harshly fell!`)
                        break;
                    case 3:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} severely fell!`)
                    default:
                        break;
                }
            }
            else{
                if(target[statstage[0]][1]+amount*-1 > 8){
                    target[statstage[0]][1] = 8
                    target.imgelement.classList.add("debuff_anim")
                    await combatLogger.sleep(1200)
                    target.imgelement.classList.remove("debuff_anim")
                    switch (amount*-1) {
                        case 1:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} fell!`)
                            break;
                        case 2:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} harshly fell!`)
                            break;
                        case 3:
                            await combatLogger.Log(`${target.name}'s ${statstage[1]} severely fell!`)
                        default:
                            break;
                    }
                    return
                }
                target[statstage[0]][1]+= amount*-1
                target.imgelement.classList.add("debuff_anim")
                await combatLogger.sleep(1200)
                target.imgelement.classList.remove("debuff_anim")
                switch (amount*-1) {
                    case 1:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} fell!`)
                        break;
                    case 2:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} harshly fell!`)
                        break;
                    case 3:
                        await combatLogger.Log(`${target.name}'s ${statstage[1]} severely fell!`)
                    default:
                        break;
                }
            }
        }
    }
}

function HitCheck(user,target,accuracy){
    let combinedStatStages = (user[stage.accuracy[0]][0]-user[stage.accuracy[0]][1]) - (target[stage.evasion[0]][0]-target[stage.evasion[0]][1])
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
        await ModifyStatStage(user,stage.attack,1)
        await ModifyStatStage(user,stage.speed, 1)
}

export async function Tackle(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    return await CalculateDamage(user,this,target)
}

export async function Moonblast(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = await CalculateDamage(user,this,target)
    if(rngCheck(30)){
        await ModifyStatStage(target,stage.spattack,-1)
    }   
    return damage
}

export async function DragonBreath(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = await CalculateDamage(user,this,target)
    if(rngCheck(30)){
        if(!target.type.includes(type.Electric)){
            await setStatusCondition(target,statusCondition.paralysis)
        }
    }

    return damage
}

export async function CottonGuard(user,target){
    await ModifyStatStage(user,stage.defense,3)
}

export async function Bonemerang(user,target) {
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    damage += await CalculateDamage(user,this,target)
    return damage
}

export async function AncientPower(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = await CalculateDamage(user,this,target)
    if(rngCheck(10)){
        await ModifyStatStage(user,stage.attack,1)
        await ModifyStatStage(user,stage.defense,1)
        await ModifyStatStage(user,stage.spattack,1)
        await ModifyStatStage(user,stage.spdefense,1)
        await ModifyStatStage(user,stage.speed,1)
    }

    return damage
}

export async function Leer(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    console.log(target.defenseStage)
    await ModifyStatStage(target,stage.defense,-1)
    console.log(target.defenseStage)

}

export async function DoubleTeam(user,target){
    await ModifyStatStage(user,stage.evasion,1)
}