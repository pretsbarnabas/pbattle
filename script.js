import {Game} from "./game.js"
import {Pokemon} from "./pokemon.js"
import {Move} from "./move.js"
import {Player} from "./player.js"
import { combatLogger } from "./combatLogger.js"


let game
let party
main()

function main(){
    document.querySelector(".menu-button:nth-child(1)").addEventListener("click", start_battle)
    party = [
        new Pokemon("Bulbasaur", ["Grass", "Poison"], [new Move("Leech Seed", "Grass","Physical",45,100,25), new Move("Tackle","Normal","Physical",40,100,35)], [45,49,49,65,65,45]),
        new Pokemon("Ivysaur", ["Grass", "Poison"], [new Move("Leech Seed", "Grass","Physical",45,100,25), new Move("Tackle","Normal","Physical",40,100,35)], [45,49,49,65,65,45])
    ]
}

function start_battle(){
    toggle_menu_items()
    let player = new Player(party)
    let boss = new Player(party)
    game = new Game(player,boss, new combatLogger())
    console.log(game.player.party[0].name)
    game.Turn()
    // game.playerActive.Attack(game.playerActive.moveset[0],game.bossActive)
}

function toggle_menu_items(){
    document.querySelector(".menu-container").style.display = "none"
    document.querySelector(".combat-log-container").style.display = "block"
}

function backgroundzoom(){
    const background = document.getElementById("bg")
    
}