export class Player{
    constructor(party){
        this.party = party
        this.items = "undefined"
    }

    Attack(pokemon,move,target){
        console.log(`${pokemon.name} used ${move.name}`)        
        console.log(`${target.name} lost ${move.power - target.defense}`)        
    }
}