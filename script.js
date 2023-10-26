import {Game} from "./game.js"
import {Player} from "./player.js"
import {pokemon} from "./pokemondata.js"


let game
let party
let bossparty
setup()
start_battle()

function setup(){
    document.querySelector(".menu-button:nth-child(1)").addEventListener("click", start_battle)
    party = [pokemon.Altaria]
    bossparty = [pokemon.Typhlosion]
}

function start_battle(){
    let player = new Player(party)
    let boss = new Player(bossparty)
    game = new Game(player,boss)
    toggleMenuItems()
    createBattleScreenElements()
}

function toggleMenuItems(){
    document.querySelector(".menu-container").style.display = "none"
    document.querySelector(".combat-log-container").style.display = "block"
}

function createBattleScreenElements(){
    let battleMainContainer = document.createElement("div")
    battleMainContainer.classList.add("battle-main-container")
    document.querySelector("body").append(battleMainContainer)
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
    for (let i = 0; i < 2; i++) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.classList.add("battle-pokemon-img")
        if(i==0) img.src = `${game.playerActive.spriteback}`
        else img.src = `${game.bossActive.spritefront}`
        div.classList.add("battle-pokemon-container")
        div.appendChild(img)
        document.querySelector(".battle-main-container").appendChild(div)
        
    }
    game.updateElements()

}