import { statusCondition } from "./enum.js"
export class Pokemon{
    constructor(name, type, moveset, stats,spritefront,spriteback){
        this.name = name
        this.type = type
        this.moveset = moveset
        this.hp = stats[0]
        this.attack = stats[1]
        this.defense = stats[2]
        this.spattack = stats[3]
        this.spdefense = stats[4]
        this.speed = stats[5]
        this.attackStage = [2,2]
        this.spattackStage = [2,2]
        this.defenseStage = [2,2]
        this.spdefenseStage = [2,2]
        this.speedStage = [2,2]
        this.accuracyStage = [3,3]
        this.evasionStage = [3,3]
        this._statusCondition = "NRM"
        this.spritefront = spritefront
        this.spriteback = spriteback
        this.imgelement = undefined
        this.battlestatuselement = undefined
        this.selectedmove = this.moveset[0]
        this.maxhp = stats[0]
        this.basespeed = stats[5]
        this.baseattack = stats[1]
        this.basehp = this.maxhp
        this.critsuccess = false
        this.recharge = false
        this.movedThisTurn = false
    }

    Attack(user,move,target){
        return move.Action(user,target)
    }

    get statusCondition(){
        return this._statusCondition
    }
    set statusCondition(value){
        this._statusCondition = value
        let element = this.battlestatuselement.children[3]
        element.textContent = this._statusCondition
        switch (value) {
            case statusCondition.burn:
                element.style.backgroundColor = "rgb(255,156,84)"
                break;
            case statusCondition.freeze:
                element.style.backgroundColor = "rgb(116,206,192)"
                break;
            case statusCondition.confusion:
                element.style.backgroundColor = "rgb(249,113,118)"
                break;
            case statusCondition.normal:
                element.style.backgroundColor = "none"
                break;
            case statusCondition.paralysis:
                element.style.backgroundColor = "rgb(243,210,59)"
                break;
            case statusCondition.poison:
                element.style.backgroundColor = "rgb(171,106,200)"
                break;   
            case statusCondition.sleep:
                element.style.backgroundColor = "rgb(143,168,221)"
                break;   
            default:
                break;
        }
        if(value == statusCondition.normal) element.textContent = ""
    }

    get hp(){
        return this._hp
    }
    set hp(value){
        this._hp = value
        if(this.battlestatuselement){
            this.battlestatuselement.children[2].textContent = this._hp
        }
    }


}