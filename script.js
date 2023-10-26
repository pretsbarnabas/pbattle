import {Game} from "./game.js"
import {Pokemon} from "./pokemon.js"
import {Move} from "./move.js"
import {Player} from "./player.js"


let game
let party
main()

function main(){
    document.querySelector(".menu-button:nth-child(1)").addEventListener("click", start_battle)
    document.querySelector(".menu-button:nth-child(2)").addEventListener("click", ()=>{alert(constantnumber)})
    party = [
        new Pokemon("Bulbasaur", ["Grass", "Poison"], [new Move("Leech Seed", "Grass","Physical",45,100,25), new Move("Tackle","Normal","Physical",40,100,35)], [45,49,65,65,45]),
        new Pokemon("Ivysaur", ["Grass", "Poison"], [new Move("Leech Seed", "Grass","Physical",45,100,25), new Move("Tackle","Normal","Physical",40,100,35)], [45,49,65,65,45])
    ]
}

function start_battle(){
    toggle_menu_items()
    let player = new Player(party)
    let boss = player
    game = new Game(player,boss)
    console.log(game.player.party[0].name)
}

function toggle_menu_items(){
    document.querySelector(".menu-container").style.display = "none"
}

function backgroundzoom(){
    const background = document.getElementById("bg")
    
}
function PartyOnclick(){
    console.log("asj");
    const menucontainer = document.getElementById("menu");
    menucontainer.style.top = "50%";
    menucontainer.style.left = "5%";
}

const partyBtn = document.getElementById("partyButton")

partyBtn.addEventListener("click",PartyOnclick)


