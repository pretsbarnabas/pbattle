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
        this.attackStage = [3,3]
        this.spattackStage = [3,3]
        this.defenseStage = [3,3]
        this.spdefenseStage = [3,3]
        this.accuracyStage = [3,3]
        this.evasionStage = [3,3]
    }

    Attack(move,target){
        move.Action(target)
    }


}