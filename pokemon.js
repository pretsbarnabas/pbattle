import { getTypeEffectiveness } from "./typechart.js"

export class Pokemon{
    constructor(name, type, moveset, stats){
        this.name = name
        this.type = type
        this.moveset = moveset
        this.hp = stats[0]
        this.attack = stats[1]
        this.defense = stats[2]
        this.spattack = stats[3]
        this.spdefense = stats[4]
        this.speed = stats[5]
    }

    Attack(move,target){
        let damage
        if(move.category == "Physical"){
            if(this.type.includes(move.type)){
                damage = ((22*move.power*(this.attack/target.defense))/50 + 2)*(Math.floor(Math.random()*101)/100)*1.5*getTypeEffectiveness(move.type,target.type)
            }
            else{
                damage = ((22*move.power*(this.attack/target.defense))/50 + 2)*(Math.floor(Math.random()*101)/100)*getTypeEffectiveness(move.type,target.type)
            }
            if(damage<0) damage = 1
            damage = Math.round(damage) 
            target.hp = target.hp - damage
        }
        else if(move.category == "Special"){
            if(this.type.includes(move.type)){
                damage = ((22*move.power*(this.spattack/target.spdefense))/50 + 2)*(Math.floor(Math.random()*101)/100)*1.5*getTypeEffectiveness(move.type,target.type)
            }
            else{
                damage = ((22*move.power*(this.spattack/target.spdefense))/50 + 2)*(Math.floor(Math.random()*101)/100)*getTypeEffectiveness(move.type,target.type)
            }
            if(damage<0) damage = 1
            damage = Math.round(damage)
            target.hp = target.hp - damage
        }
        else{

        }
        return damage
    }
}