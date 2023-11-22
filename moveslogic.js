import { combatLogger } from "./combatLogger.js"
import { getTypeEffectiveness } from "./typechart.js"
import {stage, category,type,statusCondition} from "./enum.js"


async function CalculateDamage(user,move,target,critratio = 4){
    let damage
    user.critsuccess = false
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
    if(rngCheck(critratio)){
        console.log("bap")
        user.critsuccess = true
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
                return
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
                return
            }
            if(target[statstage[0]][0] > 3){
                if(target[statstage[0]][0] - amount*-1 < 3){
                    target[statstage[0]][1] += 3-(target[statstage[0]][1]-amount*-1)
                    target[statstage[0]][0] = 3
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
                if(target[statstage[0]][1]+amount*-1 > 9){
                    target[statstage[0]][1] = 9
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
    else{
        if(amount>0){
            if(target[statstage[0]][0] == 8){
                await combatLogger.Log(`${target.name}'s ${statstage[1]} won't go any higher!`)
                return
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
                return
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

export function rngCheck(chance){
    return Math.floor(Math.random()*101) <= chance
}

export async function setStatusCondition(target,status){
    let unaffected = false
    if(target.type.includes(type.Fire)&&status == statusCondition.burn) unaffected = true
    if(target.type.includes(type.Poison)&&status == statusCondition.poison) unaffected = true
    if(target.type.includes(type.Electric)&&status == statusCondition.paralysis) unaffected = true
    if(target.type.includes(type.Ice)&&status == statusCondition.freeze) unaffected = true
    if(unaffected){
        await combatLogger.Log(`${target.name} is unaffected!`)
        return
    }
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
        await setStatusCondition(target,statusCondition.paralysis)
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
    await ModifyStatStage(target,stage.defense,-1)
}

export async function DoubleTeam(user,target){
    await ModifyStatStage(user,stage.evasion,1)
}

export async function Crunch(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = await CalculateDamage(user,this,target)
    let flinch = false
    if(rngCheck(20)){
        await ModifyStatStage(target,stage.defense,-1)
        flinch = true
    }
    
    return [damage,flinch]
}

export async function ScaryFace(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    await ModifyStatStage(target,stage.speed,-2)
}

export async function Reversal(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    const hpPercentage = (user.hp / user.maxhp)*100
    const damage = await CalculateDamage(user,this,target)
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
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = await CalculateDamage(user,this,target)
    await ModifyStatStage(target,stage.spattack,-1)
    return damage
}

export async function HornAttack(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = await CalculateDamage(user,this,target)
    return damage
}

export async function Endeavor(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    if(user.hp < target.hp){
        target.hp = user.hp
        await combatLogger.Log(`${target.name}'s hp was set to ${user.name}'s hp!`)
    }
}

export async function IcyWind(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = await CalculateDamage(user,this,target)
    await ModifyStatStage(target,stage.speed,-1)
    return damage
}

export async function CloseCombat(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = await CalculateDamage(user,this,target)
    await ModifyStatStage(user,stage.defense,-1)
    await ModifyStatStage(user,stage.spdefense,-1)
    return damage
}

export async function WorkUp(user,target){
    await ModifyStatStage(user,stage.attack,1)
    await ModifyStatStage(user,stage.spattack,1)
}

export async function Peck(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = await CalculateDamage(user,this,target)
    return damage
}

export async function Earthquake(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = await CalculateDamage(user,this,target)
    return damage
}
export async function CockPolish(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    await ModifyStatStage(user,stage.speed,2)
}

export async function PoisonJab(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    const damage = await CalculateDamage(user,this,target)
    if(rngCheck(30)){
        await setStatusCondition(target,statusCondition.poison)
    }
    return damage
}

export async function Flamethrower(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    if(rngCheck(10)){
        await setStatusCondition(target,statusCondition.burn)
    }
    return await CalculateDamage(user,this,target)
}

export async function ThunderPunch(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    if(rngCheck(10)){
        await setStatusCondition(target,statusCondition.paralysis)
    }
    return await CalculateDamage(user,this,target)
}

export async function WilloWisp(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    await setStatusCondition(target,statusCondition.burn)
}

export async function Smokescreen(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    await ModifyStatStage(target,stage.accuracy,-1)
}

export async function FocusBlast(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    if(rngCheck(10)){
        await ModifyStatStage(target,stage.spdefense,-1)
    }
    return damage
}

export async function BugBuzz(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    if(rngCheck(10)){
        await ModifyStatStage(target,stage.spdefense,-1)
    }
    return damage
}

export async function MeFirst(user,target){
    if(!HitCheck(user,target,target.selectedmove.accuracy)) return -1
    if(target.selectedmove.power<1) return -1
    let damage = await target.selectedmove.Action(user,target)*1.5
    return damage
}

export async function EnergyBall(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    if(rngCheck(10)){
        await ModifyStatStage(target,stage.spdefense,-1)
    }
    return damage
}

export async function HeadCharge(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    return [damage,0,(1/4)]
}

export async function MegaHorn(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    return await CalculateDamage(user,this,target)
}

export async function StoneEdge(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    return await CalculateDamage(user,this,target,12)
}

export async function Payback(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    if(target.movedThisTurn){
        damage = damage*1.5
    }
    return damage
}

export async function Outrage(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    if(rngCheck(30)){
        await setStatusCondition(user,statusCondition.confusion)
    }
    return damage
}

export async function Superpower(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    await ModifyStatStage(user,stage.attack,-1)
    await ModifyStatStage(user,stage.defense,-1)
    return damage
}

export async function NightSlash(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target,12)
    return damage
} 

export async function LightScreen(user,target){
    return "lightscreen"
}

export async function Blizzard(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    if(rngCheck(10)){
        await setStatusCondition(target,statusCondition.freeze)
    }
    return damage
}

export async function FlashCannon(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    if(rngCheck(10)){
        await ModifyStatStage(target,stage.spdefense,-1)
    }
    return damage
}

export async function AcidArmor(user,target){
    await ModifyStatStage(user,stage.defense,2)
}

export async function XScissor(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    return await CalculateDamage(user,this,target)
}

export async function IronHead(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    let flinch = false
    if(rngCheck(30)&&target.movedThisTurn){
        flinch = true
    }
    return [damage,flinch]
}

export async function AerialAce(user,target){
    let damage = await CalculateDamage(user,this,target)
    return damage
}

export async function GigaImpact(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    user.recharge = true
    return damage
}

export async function Overheat(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    await ModifyStatStage(user,stage.spattack,-2)
    return damage
}

export async function QuiverDance(user,target){
    await ModifyStatStage(user,stage.spattack,1)
    await ModifyStatStage(user,stage.spdefense,1)
    await ModifyStatStage(user,stage.speed,1)
}

export async function HyperBeam(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    user.recharge = true
    return damage
}

export async function FireBlast(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    if(rngCheck(10)){
        await setStatusCondition(target,statusCondition.burn)
    }
    return damage
}


export async function DragonPulse(user,target) {
    if(!HitCheck(user,target,this.accuracy)) return -1
    return await CalculateDamage(user,this,target)
}

export async function Surf(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    return await CalculateDamage(user,this,target)
}

export async function Acrobatics(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    return await CalculateDamage(user,this,target)
}

export async function DragonClaw(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    return await CalculateDamage(user,this,target)
}

export async function DoubleEdge(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    return [damage,0,(1/3)]
}

export async function Autotomize(user,target){
    await ModifyStatStage(user,stage.speed,2)
}

export async function HydroPump(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    return await CalculateDamage(user,this,target)
}

export async function Thunder(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage =  await CalculateDamage(user,this,target)
    if(rngCheck(30)){
        await setStatusCondition(target,statusCondition.paralysis)
    }
    return damage
}

export async function Sing(user,target){
    await setStatusCondition(target,statusCondition.sleep)
}

export async function Guillotine(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    return target.hp
}

export async function AerialAce(user,target){
    return await CalculateDamage(user,this,target)
}

export async function SuckerPunch(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    if(!target.selectedmove.power) return -1
    return await CalculateDamage(user,this,target)
}

export async function ShadowBall(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    if(rngCheck(20)){
        await ModifyStatStage(target,stage.spdefense,-1)
    }
    return damage
}

export async function WildCharge(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    return [damage,0,(1/4)]
}

export async function WildCharge(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    await ModifyStatStage(target,stage.speed,-1)
    return damage
}

export async function BraveBird(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    return [damage,0,(1/3)]
}

export async function CrushClaw(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    if(rngCheck(50)){
        await ModifyStatStage(target,stage.defense,-1)
    }
    return damage
}

export async function ShadowClaw(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target,12)
    return damage
}

export async function ExtremeSpeed(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    return damage

}

export async function AuraSphere(user,target){
    return await CalculateDamage(user,this,target)
}

export async function DragonRush(user,target){
    if(!HitCheck(user,target,this.accuracy)) return -1
    let damage = await CalculateDamage(user,this,target)
    let flinch = false
    if(rngCheck(20)){
        flinch = true
    }
    return [damage,flinch]
}