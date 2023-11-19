export class Move{
    constructor(name,type, category, power, accuracy, pp, action,priority = false){
        this.name = name
        this.type = type
        this.category = category
        this.power = power 
        this.accuracy = accuracy
        this.pp = pp
        this.Action = action
        this.priority = priority
    }
}