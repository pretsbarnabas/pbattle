import {Game} from "./game.js"
import {Pokemon} from "./pokemon.js"
import {Move} from "./move.js"
import {Player} from "./player.js"
import { combatLogger } from "./combatLogger.js"
import {type,category} from "./enum.js"
import * as moves from "./moves.js"

let game
let party
main()
start_battle()

function main(){
    document.querySelector(".menu-button:nth-child(1)").addEventListener("click", start_battle)
    party = [
        new Pokemon("Bulbasaur", [type.Grass, type.Poison], [new Move("Dragon Dance", type.Grass,category.Physical,45,100,25,moves.DragonDance), new Move("Tackle",type.Normal,category.Physical,40,100,35,moves.Tackle)], [45,49,49,65,65,45]),
        new Pokemon("Ivysaur", [type.Grass, type.Poison], [new Move("Leech Seed", type.Grass,category.Physical,45,100,25), new Move("Tackle",type.Normal,category.Physical,40,100,35)], [45,49,49,65,65,45])
    ]
}

function start_battle(){
    let player = new Player(party)
    let boss = new Player(party)
    game = new Game(player,boss, new combatLogger())
    toggle_menu_items()
    createBattleScreenElements()
    console.log(game.player.party[0].name)
    // game.playerActive.Attack(game.playerActive.moveset[0],game.bossActive)
}

function toggle_menu_items(){
    document.querySelector(".menu-container").style.display = "none"
    document.querySelector(".combat-log-container").style.display = "block"
}

function backgroundzoom(){
    const background = document.getElementById("bg")
    
}

function createBattleScreenElements(){
    let battleMenuContainer = document.createElement("div")
    battleMenuContainer.classList.add('battle-menu-container')
    document.querySelector("body").appendChild(battleMenuContainer)
    for (let i = 0; i < 4; i++) {
        let button = document.createElement("button")
        button.innerText = `${game.playerActive.moveset[i].name}`
        button.classList.add("battle-menu-button")
        button.addEventListener("click",()=>{game.Turn(game.playerActive.moveset[i])})
        document.querySelector(".battle-menu-container").appendChild(button)
    }
}