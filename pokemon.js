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
        if(move.category == "Physical"){
            const damage = move.power - target.defense
            if(damage<0) damage = 1
            target.hp = target.hp - damage
        }
        else if(move.category == "Special"){
            const damage = move.power - target.spdefense
            if(damage<0) damage = 1
            target.hp = target.hp - damage
        }
        else{

        }
    }
}