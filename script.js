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
                for (let i = 0; i < party.length; i++) {
                    pokemoninParty.addEventListener("mouseover",()=>{
                        Object.entries(pokemon).forEach( entry =>{
                        
                            if(entry[1].name == party[i].name)
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
                }
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
                    if(!party.includes(entry[1]))
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
                                                if(entry[1] == party[index])
                                                    party.splice(index, 1)                                                
                                            }
                                            partyelement.children[index].remove()
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



const partyBtn = document.getElementById("partyButton")

partyBtn.addEventListener("click",()=>{PartyOnclick()})





