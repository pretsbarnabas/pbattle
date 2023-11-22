import { combatLogger } from "./combatLogger.js"
import {Game} from "./game.js"
import {Player} from "./player.js"
import {pokemon,bossPokemon, generatePokemon, generateBoss} from "./pokemondata.js"
import { type } from "./enum.js"


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
    document.querySelector(".menu-button:nth-child(2)").addEventListener("click", PartyOnclick)
    generatePokemon()
    generateBoss()
    party = []
    bossparty = [bossPokemon.Typhlosion,bossPokemon.Rhydon,bossPokemon.Altaria]
}

function start_battle(){
    console.log(party.length)
    if(party.length<1){
        if(document.querySelector(".errormessage")) return
        let errormessage = document.createElement("p")
        errormessage.classList.add("errormessage")
        errormessage.textContent = "Choose atleast 1 party member"
        document.querySelector("body").appendChild(errormessage)
        return
    }
    let player = new Player(party)
    let boss = new Player(bossparty)
    game = new Game(player,boss)
    destroyMenuItems()
    createBattleScreenElements()
    createBackground()
}

function createBackground(){
    let bg = document.createElement("img")
    bg.classList.add("bgimg")
    let random = Math.floor((Math.random()*4))
    console.log(random)
    let body = document.querySelector("body")
    switch (random) {
        case 0:
            bg.src = "bg1.jpg"
            body.style.backgroundColor = "rgb(0,57,114)"
            break;
        case 1:
            bg.src = "bg2.jpg"
            body.style.backgroundColor = "rgb(255,149,117)"
            break;
        case 2:
            bg.src = "bg3.jpg"
            body.style.backgroundColor = "rgb(16,14,31)"
            break;
        case 3:
            bg.src = "bg4.jpg"
            body.style.backgroundColor = "rgb(128,177,255)"
            break;
        case 4:
            bg.src = "tilted.png"
            break;
        default:
            break;
    }
    document.querySelector("body").appendChild(bg)
}

function destroyMenuItems(){
    document.querySelector("body").innerHTML = ""

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
        if(i==0)battlestatuscontainer.style.left = "10%"
        if(i==0) battlestatuscontainer.style.top = "10%"
        if(i==1)battlestatuscontainer.style.left = "75%"
        if(i==1)battlestatuscontainer.style.top = "65%"
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
        battleButtonsElement[i].style.backgroundColor = ColorPicker(game.playerActive.moveset[i].type)
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
                game.playerActive.recharge = false
                game.playerActive = game.player.party[pokemonImgElement.dataset.id]
                await combatLogger.Log(`Player switched to ${game.playerActive.name}`)
                await combatLogger.Log("What will you do now?")
                assignDefaultButtons()
                return
            }
            game.playerActive.recharge = false
            game.playerActive = game.player.party[pokemonImgElement.dataset.id]
            await game.Turn("switch")
        })
        pokemonSelectElement.appendChild(pokemonImgElement)
    })
    document.querySelector(".battle-menu-container").appendChild(pokemonSelectElement)
}

function PackSelected(){

}

function ColorPicker(Type){
    switch (Type) {
        case type.Fire:
            return "rgb(255,156,84)"
        case type.Water:
            return "rgb(77,144,213)"
        case type.Grass:
            return "rgb(99,187,91)"
        case type.Fighting:
            return "rgb(206,64,105)"
        case type.Psychic:
            return "rgb(249,113,118)"
        case type.Poison:
            return "rgb(171,106,200)"
        case type.Ground:
            return "rgb(217,119,70)"
        case type.Fairy:
            return "rgb(236,143,230)"
        case type.Rock:
            return "rgb(199,183,139)"
        case type.Electric:
            return "rgb(243,210,59)"
        case type.Bug:
            return "rgb(144,193,44)"
        case type.Dragon:
            return "rgb(10,109,196)"
        case type.Ghost:
            return "rgb(82,105,172)"
        case type.Dark:
            return "rgb(90,83,102)"
        case type.Flying:
            return "rgb(143,168,221)"
        case type.Normal:
            return "rgb(144,153,161)"
        case type.Ice:
            return "rgb(116,206,192)"
        case type.Steel:
            return "rgb(90,142,161)"
        default:
            break;
    }
}
function LoadParty(){
    let partyelement = document.querySelector('.partyelement')
    Object.entries(pokemon).forEach(entry => {
        party.forEach(element => {
            if(entry[1] == element){
                let pokemoninParty = document.createElement('div')
                pokemoninParty.classList.add('pokemonInBox')
                pokemoninParty.dataset.name = entry[1].name;
                partyelement.appendChild(pokemoninParty);
                let pokemoninPartyImg = document.createElement('img');
                pokemoninPartyImg.classList.add('pokemonInBoxImg');
                pokemoninPartyImg.src = entry[1].spritefront
                pokemoninParty.appendChild(pokemoninPartyImg)
                let availablePokemon = document.querySelector(".availablePokemons").children
                let type = document.querySelector(".type")
                let type2 = document.querySelectorAll(".type")[1]
                let statsPokemonName = document.querySelector(".statsPokemonName")
                let pokemonInStatsImg = document.querySelector(".pokemonInStatsImg")
                let abilityList = document.querySelector(".abilities").children
                    pokemoninParty.addEventListener("mouseover",()=>{
                        Object.entries(pokemon).forEach( entry =>{
                        
                            if(entry[1].name == element.name)
                            {
                                type.classList = `type ${entry[1].type[0]}`
                                type.innerHTML = `${entry[1].type[0]}`
                                type2.innerHTML = ` `
                                type2.classList = ' '
                                if(entry[1].type[1] != undefined){
                                    type2.classList = `type ${entry[1].type[1]}`
                                    type2.innerHTML = `${entry[1].type[1]}`
                                }
                            
                                statsPokemonName.innerHTML = entry[1].name;
                                pokemonInStatsImg.src = entry[1].spritefront; 
                                for (let i = 0; i < abilityList.length; i++) {

                                    abilityList[i].children[0].innerHTML = entry[1].moveset[i].name
                                    abilityList[i].children[1].innerHTML = entry[1].moveset[i].type
                                }
                            }
                        })
                    })
                
            pokemoninParty.addEventListener("click", ()=> {
               for (let index = 0; index < partyelement.children.length; index++) {
                   if(partyelement.children[index].dataset.name == pokemoninParty.dataset.name){
                        let nameofpokemon = partyelement.children[index].dataset.name
                        Object.entries(pokemon).forEach( entry =>{
                            if(entry[1].name == nameofpokemon){
                            party.splice(entry[1],1)
                            partyelement.children[index].remove()
                        }
                        })
                    }
                }
            })
        }
    });
})
}
function PartyOnclick(){
    console.log();
    const menucontainer = document.querySelector(".menu-container");
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

    Object.entries(pokemon).forEach(element => {
        let pokemoninBox = document.createElement('div')
        pokemoninBox.classList.add('pokemonInBox')
        pokemoninBox.dataset.name = element[1].name;
        pokemoninBox.dataset.type1 = element[1].type[0];
        pokemoninBox.dataset.type2 = element[1].type[1];
       
        pokemoninBox.dataset.move1type = element[1].moveset[0].type;
        pokemoninBox.dataset.move1name = element[1].moveset[0].name;
        pokemoninBox.dataset.move2type = element[1].moveset[1].type;
        pokemoninBox.dataset.move2name = element[1].moveset[1].name;
        pokemoninBox.dataset.move3type = element[1].moveset[2].type;
        pokemoninBox.dataset.move3name = element[1].moveset[2].name;
        pokemoninBox.dataset.move4type = element[1].moveset[3].type;
        pokemoninBox.dataset.move4name = element[1].moveset[3].name;
        pokemonbox.appendChild(pokemoninBox);
        let pokemoninBoxImg = document.createElement('img');
        pokemoninBoxImg.classList.add('pokemonInBoxImg');
        pokemoninBoxImg.src = element[1].spritefront
        pokemoninBox.appendChild(pokemoninBoxImg)
    });
    const partyelement3 = document.createElement('div');
    partyelement3.classList.add('partyelement');
    partyelement3.id = 'Stats';
    partycontainer.appendChild(partyelement3);
    let Statstitle = document.createElement('h1');
    Statstitle.classList.add('sectionTitle');
    Statstitle.innerHTML += "Stats";
    partyelement3.appendChild(Statstitle);
    let statsBox = document.createElement('div');
    statsBox.classList.add('statsBox');
    partyelement3.appendChild(statsBox)
    let statsPokemonName = document.createElement('h1');
    statsPokemonName.classList.add('statsPokemonName');
    statsBox.appendChild(statsPokemonName);
    let pokemonInStatsImg = document.createElement('img')
    pokemonInStatsImg.classList.add('pokemonInStatsImg');
    pokemonInStatsImg.src  = ""
    statsBox.appendChild(pokemonInStatsImg)
    let statsTypeBox = document.createElement('div')
    statsTypeBox.classList.add('statsTypeBox');
    statsBox.appendChild(statsTypeBox)
    let typeBox = document.createElement('div')
    typeBox.classList.add('typeBox');
    statsTypeBox.appendChild(typeBox);
    let type = document.createElement('h1');
    type.classList.add('type')
    typeBox.appendChild(type)
    let typeBox2 = document.createElement('div')
    typeBox2.classList.add('typeBox');
    statsTypeBox.appendChild(typeBox2);
    let type2 = document.createElement('h1');
    type2.classList.add('type')
    typeBox2.appendChild(type2)
    let abilities = document.createElement('div')
    abilities.classList.add('abilities')
    statsBox.appendChild(abilities)
    for (let i = 0; i < 4; i++) {
        let ability = document.createElement('div');
        ability.classList.add('ability');
        abilities.appendChild(ability);
        let abilityName = document.createElement('h1')
        abilityName.classList.add('abilityName')
        ability.appendChild(abilityName)
        let abilityType = document.createElement('h1')
        abilityType.classList.add('abilityType')
        ability.appendChild(abilityType) 
        
    }
    let availablePokemon = document.querySelector(".availablePokemons").children
    let abilityList = document.querySelector(".abilities").children
    LoadParty()
    
    
    
    for (let i = 0; i < availablePokemon.length; i++) {
        availablePokemon[i].addEventListener("mouseover",()=>{
            Object.entries(pokemon).forEach( entry =>{

                if(entry[1].name == availablePokemon[i].dataset.name)
                {
                    type.classList = `type ${entry[1].type[0]}`
                    type.innerHTML = `${entry[1].type[0]}`
                    type2.innerHTML = ` `
                    type2.classList = ' '
                    if(entry[1].type[1] != undefined){
                        type2.classList = `type ${entry[1].type[1]}`
                        type2.innerHTML = `${entry[1].type[1]}`
                    }

                    statsPokemonName.innerHTML = entry[1].name;
                    pokemonInStatsImg.src = entry[1].spritefront; 
                    for (let i = 0; i < abilityList.length; i++) {
                        
                        abilityList[i].children[0].innerHTML = entry[1].moveset[i].name
                        abilityList[i].children[1].innerHTML = entry[1].moveset[i].type
                    }
                    
    
                }
            })
        })
        
        availablePokemon[i].addEventListener("click",()=>{
            Object.entries(pokemon).forEach(entry => {
                if(entry[1].name == availablePokemon[i].dataset.name)
                {
                    if(!party.includes(entry[1])&&party.length<6)
                    {
                        party.push(entry[1])
                        let pokemoninParty = document.createElement('div')
                        pokemoninParty.classList.add('pokemonInBox')
                        pokemoninParty.dataset.name = entry[1].name;
                        partyelement.appendChild(pokemoninParty);
                        let pokemoninPartyImg = document.createElement('img');
                        pokemoninPartyImg.classList.add('pokemonInBoxImg');
                        pokemoninPartyImg.src = entry[1].spritefront
                        pokemoninParty.appendChild(pokemoninPartyImg)

                        pokemoninParty.addEventListener("mouseover",()=>{
                            Object.entries(pokemon).forEach( entry =>{
                            
                                if(entry[1].name == availablePokemon[i].dataset.name)
                                {
                                    type.classList = `type ${entry[1].type[0]}`
                                    type.innerHTML = `${entry[1].type[0]}`
                                    type2.innerHTML = ` `
                                    type2.classList = ' '
                                    if(entry[1].type[1] != undefined){
                                        type2.classList = `type ${entry[1].type[1]}`
                                        type2.innerHTML = `${entry[1].type[1]}`
                                    }
                                
                                    statsPokemonName.innerHTML = entry[1].name;
                                    pokemonInStatsImg.src = entry[1].spritefront; 
                                    for (let i = 0; i < abilityList.length; i++) {

                                        abilityList[i].children[0].innerHTML = entry[1].moveset[i].name
                                        abilityList[i].children[1].innerHTML = entry[1].moveset[i].type
                                    }
                                }
                            })
                        })
                        pokemoninParty.addEventListener("click", ()=> {
                           for (let index = 0; index < partyelement.children.length; index++) {
                               if(partyelement.children[index].dataset.name == pokemoninParty.dataset.name){
                                    let nameofpokemon = partyelement.children[index].dataset.name
                                    Object.entries(pokemon).forEach( entry =>{
                                        if(entry[1].name == nameofpokemon){
                                            for (let index = 0; index < party.length; index++) {
                                                if(entry[1] == party[index]){
                                                    party.splice(index, 1)                                                
                                                    partyelement.children[index+2].remove()
                                                }
                                            }
                                    }
                                    })
                                }
                            }
                        })
                    }     
                }
            })
            console.log(party)
        })
        
    }
       
}



