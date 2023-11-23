import { combatLogger } from "./combatLogger.js"
import { getTypeEffectiveness } from "./typechart.js"
import { PokemonSelected, assignDefaultButtons, setup} from "./script.js"
import { statusCondition, category } from "./enum.js"
import { rngCheck } from "./moveslogic.js"

export class Game{
    constructor(player, boss){
        this.player = player
        this.boss = boss
        this._playerActive = player.party[0]
        this._bossActive = boss.party[0]
        this.turnNumber = 0
    }

    
    async useAction(user,target,move){
        await combatLogger.Log(`${user.name} used ${move.name}`)
        let outcome = await user.Attack(user,move,target)
        let dmg = undefined
        let flinch = false
        let recoil = false
        if(typeof outcome == "undefined") return
        if(typeof outcome == "number"){
            dmg = outcome
        }
        if(typeof outcome == "object"){
            dmg = outcome[0]
            if(outcome.length>1) flinch = outcome[1]
            if(outcome.length>2) recoil = outcome[2]
        }
        if(typeof outcome == "string"){
            if(outcome == "lightscreen"){
                if(user==this.playerActive) this.player.lightscreen = 5
                else this.boss.lightscreen = 5
            }
        }
        if(dmg==-1){
            await combatLogger.Log(`It missed!`)
            
        }
        if(dmg==0){
            await combatLogger.Log(`It doesn't affect ${target.name}`)
        }
        if(dmg>0){
            const effectiveness = getTypeEffectiveness(move.type,target.type)
            let alive = await this.handleDamage(target,dmg)
            if(target==this.playerActive&&this.player.lightscreen>0&&move.category==category.Special){
                dmg = dmg * 0.5
            }
            else if(target==this.bossActive&&this.player.lightscreen>0&&move.category==category.Special){
                dmg = dmg * 0.5
            }
            if(user.critsuccess) await combatLogger.Log("Critical hit!")
            if(effectiveness>1){
                await combatLogger.Log("It's super effective!")
                
            }
            else if(effectiveness<1){
                await combatLogger.Log("It's not very effective")
                
            }
            if(!alive){
                await combatLogger.Log(`${target.name} has fainted!`)
                await this.switchPokemon()
            }
            if(alive&&recoil){
                await combatLogger.Log(`${user.name} is damaged by recoil!`)
                await this.handleDamage(user,dmg*recoil)
            }
            if(alive&&flinch&&!target.movedThisTurn){
                await combatLogger.Log(`${target.name} flinched!`)
                if(target==this.playerActive) this.player.skipturn = true
                else this.boss.skipturn = true
            }
        }
    }

    async handleDamage(target,dmg){
        for (let i = 0; i < dmg; i++) {
            if(target.hp-1>-1){
                target.hp -= 1
                await combatLogger.sleep(10)
            }            
            else{
                target.hp = 0
                await combatLogger.sleep(5)
                return 0
            }
        }
        return 1
    }

    async switchPokemon(){
        if(this.playerActive.hp == 0){
            let pokemonleft = 0
            this.player.party.forEach(p=>{
                if(p.hp>0) pokemonleft++
            })
            if(pokemonleft==0){
                await this.GameOver(this.boss,this.player)
                return
            }
            PokemonSelected()
            this.player.skipturn = true
        }
        else{
            let pokemonleft = 0
            this.boss.party.forEach(p=>{
                if(p.hp>0) pokemonleft++
            })
            if(pokemonleft==0){
                await this.GameOver(this.player,this.boss)
                return
            }
            this.boss.party.forEach(p=>{
                if(p.hp>0){
                    this.bossActive.recharge = false
                    this.bossActive = p
                    return
                }
            })
            this.boss.skipturn = true
            await combatLogger.Log(`Opponent switched to ${this.bossActive.name}`)
        }
        if(document.querySelector(".battle-menu-back")) document.querySelector(".battle-menu-back").remove()
    }
    
    async GameOver(winner,loser){
        if(loser==this.boss){
            this.bossActive.imgelement.style.display = "none"
            await combatLogger.Log("Opponent is out of useable Pokémon")
            await combatLogger.Log("Player has won the match!")
        }
        else{
            this.playerActive.imgelement.style.display = "none"
            await combatLogger.Log("Player is out of useable Pokémon")
            await combatLogger.Log("Opponent has won the match!")
        } 
        document.querySelector("body").innerHTML = ""
        setup()
        throw "Match Over"

    }

    async handleStatusConditions(turnstatus, pokemon, player){
        if(pokemon.hp==0) return
        let alive = true
        if(turnstatus=="start"){
            switch (pokemon.statusCondition) {
                case statusCondition.paralysis:
                    pokemon.speed = pokemon.basespeed *0.25
                    if(rngCheck(25)){
                        player.skipturn = true
                        await combatLogger.Log(`${pokemon.name} is fully paralyzed!`)
                    }
                    break;
                case statusCondition.freeze:
                    if(rngCheck(20)){
                        await combatLogger.Log(`${pokemon.name} thawed out!`)
                        pokemon.statusCondition = statusCondition.normal
                    }
                    else{
                        await combatLogger.Log(`${pokemon.name} is fully frozen!`)
                        player.skipturn = true
                    }
                    break;
                case statusCondition.sleep:
                    if(rngCheck(33)){
                        await combatLogger.Log(`${pokemon.name} has woken up!`)
                        pokemon.statusCondition = statusCondition.normal
                    }
                    else{
                        await combatLogger.Log(`${pokemon.name} is fast asleep...`)
                        player.skipturn = true
                    }
                    break;
                case statusCondition.confusion:
                    if(rngCheck(30)){
                        await combatLogger.Log(`${pokemon.name} is no longer confused!`)
                        pokemon.statusCondition = statusCondition.normal
                    }
                    else{
                        await combatLogger.Log(`${pokemon.name} is confused...`)
                        if(rngCheck(50)){
                            await combatLogger.Log(`${pokemon.name} hurt itself in it's confusion!`)
                            alive = await this.handleDamage(pokemon,(pokemon.basehp*(1/8)))
                            player.skipturn = true
                        }
                    }
                default:
                    break;
            }
        }
        else{
            switch (pokemon.statusCondition) {
                case statusCondition.burn:
                    pokemon.attack = pokemon.baseattack * 0.5
                    await combatLogger.Log(`${pokemon.name} is hurt by the burn!`)
                    alive = await this.handleDamage(pokemon,(pokemon.basehp*(1/8)))
                    break;
                case statusCondition.poison:
                    await combatLogger.Log(`${pokemon.name} is hurt by the poison!`)
                    alive = await this.handleDamage(pokemon,(pokemon.basehp*(1/8)))
                    break;
                default:
                    break;
            }
        }
        if(!alive){
            await combatLogger.Log(`${pokemon.name} has fainted!`)
            await this.switchPokemon()
        }
    }

    async useItem(user,item){

    }

    destroyBattleMenu(){
        let battlemenu = document.querySelector(".battle-menu-container")
        battlemenu.innerHTML = ""
    }

    async rechargeCheck(){
        if(this.playerActive.recharge){
            await combatLogger.Log(`${this.playerActive.name} has to recharge!`)
            this.playerActive.recharge = false
            this.player.skipturn = true
        }
        if(this.bossActive.recharge){
            await combatLogger.Log(`${this.bossActive.name} has to recharge!`)
            this.bossActive.recharge = false
            this.boss.skipturn = true
        }
    }

    async Turn(playerTurnOption){
        // let bossTurnOption = this.boss.chooseAction()

        this.destroyBattleMenu()
        let bossTurnOption = "action"
        this.bossActive.selectedmove = this.bossActive.chooseMove(this.turnNumber,this.playerActive)
        this.bossActive.movedThisTurn = false
        this.playerActive.movedThisTurn = false
        await this.rechargeCheck()
        switch (playerTurnOption) {
            case "action":
                switch (bossTurnOption) {
                    case "action":
                        if((this.playerActive.speed*(this.playerActive.speedStage[0]/this.playerActive.speedStage[1])+(this.playerActive.selectedmove.priority*1000))>=(this.bossActive.speed*(this.bossActive.speedStage[0]/this.bossActive.speedStage[1])+(this.bossActive.selectedmove.priority*1000))){
                            await this.handleStatusConditions("start",this.playerActive,this.player)
                            if(!this.player.skipturn){
                                await this.useAction(this.playerActive,this.bossActive,this.playerActive.selectedmove)
                                this.playerActive.movedThisTurn = true
                            }    
                            await this.handleStatusConditions("end",this.playerActive,this.player)
                            await this.handleStatusConditions("start",this.bossActive,this.boss)
                            if(!this.boss.skipturn) {
                                await this.useAction(this.bossActive,this.playerActive,this.bossActive.selectedmove)
                                this.bossActive.movedThisTurn = true
                            }
                            await this.handleStatusConditions("end",this.bossActive,this.boss)

                        }
                        else{
                            await this.handleStatusConditions("start",this.bossActive,this.boss)
                            if(!this.boss.skipturn){
                                await this.useAction(this.bossActive,this.playerActive,this.bossActive.selectedmove)
                                this.bossActive.movedThisTurn = true
                            }
                            await this.handleStatusConditions("end",this.bossActive,this.boss)
                            await this.handleStatusConditions("start",this.playerActive,this.player)
                            if(!this.player.skipturn){
                                await this.useAction(this.playerActive,this.bossActive,this.playerActive.selectedmove)
                                this.playerActive.movedThisTurn = true
                            }
                            await this.handleStatusConditions("end",this.playerActive,this.player)
                        }
                        
                        break;
                    case "switch":
                        break;
                    case "item":
                        break;
                    default:
                        break;
                }
                break;
            case "switch":
                switch (bossTurnOption) {
                    case "action":
                        await combatLogger.Log(`Player switched to ${this.playerActive.name}`)
                        await this.handleStatusConditions("start",this.bossActive,this.boss)
                        if(!this.boss.skipturn){
                            await this.useAction(this.bossActive,this.playerActive,this.bossActive.selectedmove)
                            this.bossActive.movedThisTurn = true
                        }    
                        else{
                            this.player.skipturn = false
                            this.boss.skipturn = false
                        }
                        await this.handleStatusConditions("end",this.bossActive,this.boss)
                        break;
                    case "switch":
                        break;
                    case "item":
                        break;
                    default:
                        break;
                }
                break;
            case "item":
                switch (bossTurnOption) {
                    case "action":
    
                        break;
                    case "switch":
                        break;
                    case "item":
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        this.player.skipturn = false
        this.boss.skipturn = false
        this.player.lightscreen-=1
        this.boss.lightscreen-=1
        this.turnNumber++
        if(document.querySelector(".battle-menu-container").children.length) return
        await combatLogger.Log("What will you do now?")
        assignDefaultButtons()
    }

    updateElements(){
        this.playerActive.imgelement = document.querySelectorAll(".battle-pokemon-img")[0]
        this.bossActive.imgelement = document.querySelectorAll(".battle-pokemon-img")[1]
        this.bossActive.battlestatuselement = document.querySelectorAll(".battle-status-container")[0]
        this.playerActive.battlestatuselement = document.querySelectorAll(".battle-status-container")[1]
        document.querySelectorAll(".battle-status-hp")[1].textContent = this.playerActive.hp
        document.querySelectorAll(".battle-status-hp")[0].textContent = this.bossActive.hp
        document.querySelectorAll(".battle-status-name")[1].textContent = this.playerActive.name
        document.querySelectorAll(".battle-status-name")[0].textContent = this.bossActive.name
        document.querySelectorAll(".battle-status-ailment")[1].textContent = this.playerActive.statusCondition
        document.querySelectorAll(".battle-status-ailment")[0].textContent = this.bossActive.statusCondition
        this.bossActive.statusCondition = this.bossActive.statusCondition
        this.playerActive.statusCondition = this.playerActive.statusCondition 
        this.playerActive.imgelement.src = this.playerActive.spriteback
        this.bossActive.imgelement.src = this.bossActive.spritefront
    }

    get playerActive(){
        return this._playerActive
    }
    set playerActive(value){
        this._playerActive = value
        this.updateElements()
    }
    
    get bossActive(){
        return this._bossActive
    }
    set bossActive(value){
        this._bossActive = value
        this.updateElements()
        this.turnNumber = 0
    }
}