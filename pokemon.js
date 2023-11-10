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
    }

    Attack(user,move,target){
        return move.Action(user,target)
    }

    get statusCondition(){
        return this._statusCondition
    }
    set statusCondition(value){
        this._statusCondition = value
        this.battlestatuselement.children[3].textContent = this._statusCondition
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