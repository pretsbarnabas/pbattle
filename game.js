import { combatLogger } from "./combatLogger.js"
import { getTypeEffectiveness } from "./typechart.js"
import { PokemonSelected, assignDefaultButtons } from "./script.js"

export class Game{
    constructor(player, boss){
        this.player = player
        this.boss = boss
        this._playerActive = player.party[0]
        this._bossActive = boss.party[0]

    }

    
    async useAction(user,target,move){
        await combatLogger.Log(`${user.name} used ${move.name}`)
        let dmg = await user.Attack(user, move, target)
        if(dmg==-1){
            await combatLogger.Log(`It missed!`)
            
        }
        if(dmg==0){
            await combatLogger.Log(`It doesn't affect ${target.name}`)
        }
        if(dmg>0){
            const effectiveness = getTypeEffectiveness(move.type,target.type)
            if(effectiveness>1){
                await combatLogger.Log("It's super effective!")
                
            }
            else if(effectiveness<1){
                await combatLogger.Log("It's not very effective")
                
            }
            await this.handleDamage(target,dmg)
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
                await combatLogger.Log(`${target.name} has fainted!`)
                await this.switchPokemon()
                await combatLogger.sleep(5)
                return
            }
        }
    }

    async switchPokemon(){
        if(this.playerActive.hp == 0){
            PokemonSelected()
            this.player.skipturn = true
        }
        else{
            this.boss.skipturn = true
            this.boss.party.forEach(p=>{
                if(p.hp>0){
                    this.bossActive = p
                    return
                }
            })
            await combatLogger.Log(`Opponent switched to ${this.bossActive.name}`)
        }
        if(document.querySelector(".battle-menu-back")) document.querySelector(".battle-menu-back").remove()
    }

    async useItem(user,item){

    }

    destroyBattleMenu(){
        let battlemenu = document.querySelector(".battle-menu-container")
        battlemenu.innerHTML = ""
    }

    async Turn(playerTurnOption){
        // let bossTurnOption = this.boss.chooseAction()

        this.destroyBattleMenu()
        let bossTurnOption = "action"
        this.bossActive.selectedmove = this.bossActive.moveset[Math.floor(Math.random()*4)]
        switch (playerTurnOption) {
            case "action":
                switch (bossTurnOption) {
                    case "action":
                        if(this.playerActive.speed>=this.bossActive.speed){
                            if(!this.player.skipturn) await this.useAction(this.playerActive,this.bossActive,this.playerActive.selectedmove)
                            if(!this.boss.skipturn) await this.useAction(this.bossActive,this.playerActive,this.bossActive.selectedmove)
                            else{
                                this.player.skipturn = false
                                this.boss.skipturn = false
                                return
                            }

                        }
                        else{
                            if(!this.boss.skipturn) await this.useAction(this.bossActive,this.playerActive,this.bossActive.selectedmove)
                            if(!this.player.skipturn) await this.useAction(this.playerActive,this.bossActive,this.playerActive.selectedmove)
                            else{
                                this.player.skipturn = false
                                this.boss.skipturn = false
                            }
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
                        if(!this.boss.skipturn) await this.useAction(this.bossActive,this.playerActive,this.bossActive.selectedmove)
                        else{
                            this.player.skipturn = false
                            this.boss.skipturn = false
                            return
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
    }
}