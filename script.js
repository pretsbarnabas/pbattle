import { combatLogger } from "./combatLogger.js"
import {Game} from "./game.js"
import {Player} from "./player.js"
import {pokemon,bossPokemon, generatePokemon, generateBoss} from "./pokemondata.js"


let game
let party
let bossparty
setup()

export function setup(){
    let menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-container")
    for (let i = 0; i < 3; i++) {
        let menuButton = document.createElement("div")
        menuButton.classList.add("menu-button")
        if(i==0)menuButton.innerText = "Start"
        else if(i==1)menuButton.innerText = "Party"
        else if(i==2)menuButton.innerText = "Other"       
        menuContainer.appendChild(menuButton) 
    }
    document.querySelector("body").appendChild(menuContainer)
    document.querySelector(".menu-button:nth-child(1)").addEventListener("click", start_battle)
    generatePokemon()
    generateBoss()
    party = [pokemon.Altaria, pokemon.Swellow, pokemon.Houndoom,pokemon.Rhydon,pokemon.Tauros,pokemon.Typhlosion]
    bossparty = [bossPokemon.Marowak,bossPokemon.Rhydon,bossPokemon.Altaria]
}

function start_battle(){
    let player = new Player(party)
    let boss = new Player(bossparty)
    game = new Game(player,boss)
    createBattleScreenElements()
    destroyMenuItems()
}

function destroyMenuItems(){
    document.querySelector(".menu-container").remove()

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
        let imgdiv = document.createElement("div")
        let img = document.createElement("img")
        img.classList.add("battle-pokemon-img")
        imgdiv.classList.add("battle-pokemon-container")
        imgdiv.appendChild(img)
        document.querySelector(".battle-main-container").appendChild(imgdiv)

    }
    for (let i = 0; i < 2; i++) {
        let battlestatuscontainer = document.createElement("div")
        battlestatuscontainer.classList.add("battle-status-container")
        let battlestatusname = document.createElement("div")
        battlestatusname.classList.add("battle-status-name")
        let battlestatuslvl = document.createElement("div")
        battlestatuslvl.classList.add("battle-status-lvl")
        battlestatuslvl.innerText = "Lv.50"
        let battlestatushp = document.createElement("div")
        battlestatushp.classList.add("battle-status-hp")
        let battlestatusailment = document.createElement("div")
        battlestatusailment.classList.add("battle-status-ailment")
        battlestatuscontainer.appendChild(battlestatusname)
        battlestatuscontainer.appendChild(battlestatuslvl)
        battlestatuscontainer.appendChild(battlestatushp)
        battlestatuscontainer.appendChild(battlestatusailment)
        document.querySelector(".battle-main-container").appendChild(battlestatuscontainer)
    }
    let combatlogger=document.createElement("div")
    combatlogger.classList.add("combat-log-container")
    document.querySelector("body").appendChild(combatlogger)
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

export function assignDefaultButtons(){
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
        battleButtonsElement[i].addEventListener("click",async function(){
            game.playerActive.selectedmove = game.playerActive.moveset[i]
            await game.Turn("action")
        })
    }
}

export function PokemonSelected(){
    removeBattleButtons()
    createBackArrowElement()
    const pokemonSelectElement = document.createElement("div")
    pokemonSelectElement.classList.add("pokemon-select-menu")
    let index = 0
    game.player.party.forEach(p=>{
        let pokemonImgElement = document.createElement("img")
        pokemonImgElement.src = p.spritefront
        pokemonImgElement.dataset.id = index++
        if(p==game.playerActive)pokemonImgElement.style.backgroundColor = "blue"
        if(p.hp==0)pokemonImgElement.style.backgroundColor = "red"
        pokemonImgElement.addEventListener("click",async function(){
            if(game.player.party[pokemonImgElement.dataset.id].hp == 0) return
            if(game.player.party[pokemonImgElement.dataset.id] == game.playerActive) return
            document.querySelector(".pokemon-select-menu").remove()
            if(game.playerActive.hp == 0){
                game.playerActive = game.player.party[pokemonImgElement.dataset.id]
                await combatLogger.Log(`Player switched to ${game.playerActive.name}`)
                await combatLogger.Log("What will you do now?")
                assignDefaultButtons()
                return
            }
            game.playerActive = game.player.party[pokemonImgElement.dataset.id]
            await game.Turn("switch")
        })
        pokemonSelectElement.appendChild(pokemonImgElement)
    })
    document.querySelector(".battle-menu-container").appendChild(pokemonSelectElement)
}

function PackSelected(){

}