import {Game} from "./game.js"
import {Player} from "./player.js"
import {pokemon} from "./pokemondata.js"


let game
let party
let bossparty
setup()


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
function PartyOnclick(){
    console.log();
    const menucontainer = document.getElementById("menu");
    menucontainer.style.top = "50%";
    menucontainer.style.left = "5%";
    let partycontainer = document.createElement('div');
    partycontainer.classList.add('partycontainer');
    document.body.appendChild(partycontainer)
    let partyelement = document.createElement('div');
    partyelement.classList.add('partyelement');
    partycontainer.appendChild(partyelement);
    let partytitle = document.createElement('h1');
    partytitle.classList.add('sectionTitle');
    partytitle.innerHTML += "Party"
    partyelement.appendChild(partytitle);
    let pokemoncard = document.createElement('div');
    pokemoncard.classList.add('pokemoncard');
    partyelement.appendChild(pokemoncard);
    // let cardimg = document.createElement('img');
    // cardimg.classList.add('pokemonimg');
    // cardimg.src = "https://archives.bulbagarden.net/media/upload/d/dc/Spr_5b_003_f.png"
    // pokemoncard.appendChild(cardimg);
    // let cardName = document.createElement('h1');
    // cardName.classList.add('pokemonname');    
    // pokemonName.innerHTML += //clicked pokemonname;
    // pokemoncard.appendChild(cardName);
    let partyelement2 = document.createElement('div');
    partyelement2.classList.add('partyelement');
    partycontainer.appendChild(partyelement2);
    let Boxtitle = document.createElement('h1');
    Boxtitle.classList.add('sectionTitle');
    Boxtitle.innerHTML += "Box"
    partyelement2.appendChild(Boxtitle);
    let pokemonbox = document.createElement('div');
    pokemonbox.classList.add('availablePokemons');
    partyelement2.appendChild(pokemonbox)
    Object.values(pokemon).forEach(element => {
        let pokemoninBox = document.createElement('div')
        pokemoninBox.classList.add('pokemonInBox')
        pokemonbox.appendChild(pokemoninBox);
        let pokemoninBoxImg = document.createElement('img');
        pokemoninBoxImg.classList.add('pokemonInBoxImg');
        pokemoninBoxImg.src = element.spritefront
        pokemoninBox.appendChild(pokemoninBoxImg)
    });
    
    let partyelement3 = document.createElement('div');
    partyelement3.classList.add('partyelement');
    partycontainer.appendChild(partyelement3);
    let Statstitle = document.createElement('h1');
    Statstitle.classList.add('sectionTitle');
    Statstitle.innerHTML += "Stats";






    
    
//     let partytable = document.createElement()
}

const partyBtn = document.getElementById("partyButton")

partyBtn.addEventListener("click",()=>{PartyOnclick()})

