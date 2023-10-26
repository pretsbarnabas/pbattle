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
        this.statusCondition = "NRM"
        this.spritefront = spritefront
        this.spriteback = spriteback
    }

    Attack(user,move,target){
        return move.Action(user,target)
    }


}