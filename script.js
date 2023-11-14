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
    party = [pokemon.Altaria, pokemon.Marowak]
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
    assignDefaultButtons()
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

function createBattleButtons(num){
    removeBattleButtons()
    for (let i = 0; i < num; i++) {
        let button = document.createElement("button")
        button.classList.add("battle-menu-button")
        document.querySelector(".battle-menu-container").appendChild(button)
    }
}

function assignDefaultButtons(){
    createBattleButtons(2)
    let backarrow = document.querySelector(".battle-menu-back")
    if(backarrow) backarrow.remove()
    let pokemonselectscreen = document.querySelector(".pokemon-select-menu")
    if(pokemonselectscreen) pokemonselectscreen.remove()
    const battleButtonsElement = document.querySelectorAll(".battle-menu-button")
    for (let i = 0; i < 2; i++) {
        switch (i) {
            case 0:
                battleButtonsElement[i].innerText = "Fight"
                battleButtonsElement[i].addEventListener("click",FightSelected)
                break;
            case 1:
                battleButtonsElement[i].innerText = "Pokemon"
                battleButtonsElement[i].addEventListener("click",PokemonSelected)
                break;
            case 2:
                battleButtonsElement[i].innerText = "Pack"
                battleButtonsElement[i].addEventListener("click",PackSelected)
                break;
            case 3:
                battleButtonsElement[i].innerText = "Run"
                break;
            default:
                break;
        }
    }
}

function removeBattleButtons(){
    const battleButtonsElement = document.querySelectorAll(".battle-menu-button")
    battleButtonsElement.forEach(element => {
        element.remove()
    });
}
function createBackArrowElement(){
    let backArrow = document.createElement("button")
    backArrow.classList.add("battle-menu-back")
    backArrow.innerText = "←"
    backArrow.addEventListener("click",()=>{assignDefaultButtons()})
    document.querySelector(".battle-menu-container").appendChild(backArrow)
}

function FightSelected(){
    createBattleButtons(4)
    createBackArrowElement()
    const battleButtonsElement = document.querySelectorAll(".battle-menu-button")
    for (let i = 0; i < 4; i++) {
        battleButtonsElement[i].innerText = `${game.playerActive.moveset[i].name}`
        battleButtonsElement[i].addEventListener("click",()=>{
            game.playerActive.selectedmove = game.playerActive.moveset[i]
            game.Turn("action")    
        })
    }
}

function PokemonSelected(){
    removeBattleButtons()
    createBackArrowElement()
    const pokemonSelectElement = document.createElement("div")
    pokemonSelectElement.classList.add("pokemon-select-menu")
    game.player.party.forEach(p=>{
        let pokemonImgElement = document.createElement("img")
        pokemonImgElement.src = p.spritefront
        pokemonImgElement.dataset.id = p.name
        pokemonImgElement.addEventListener("click",()=>{
            // game.playerActive = game.player.party[this.dataset.id]
            // game.updateElements()
        })
        pokemonSelectElement.appendChild(pokemonImgElement)
    })
    document.querySelector("body").appendChild(pokemonSelectElement)
}

function PackSelected(){

}