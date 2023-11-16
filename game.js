import { combatLogger } from "./combatLogger.js"
import { getTypeEffectiveness } from "./typechart.js"

export class Game{
    constructor(player, boss){
        this.player = player
        this.boss = boss
        this._playerActive = player.party[0]
        this._bossActive = boss.party[0]

    }

    
    async Turn(move){
        if(this.playerActive.speed >= this.bossActive.speed){
            await combatLogger.Log(`${this.playerActive.name} used ${move.name}`)
            let dmg = await this.playerActive.Attack(this.playerActive, move, this.bossActive)
            if(dmg==-1){
                await combatLogger.Log(`It missed!`)
                
            }
            if(dmg>0){
                this.bossActive.hp -= dmg
                const effectiveness = getTypeEffectiveness(move.type,this.bossActive.type)
                if(effectiveness>1){
                    await combatLogger.Log("It's super effective!")
                    
                }
                else if(effectiveness<1){
                    await combatLogger.Log("It's not very effective")
                    
                }
            }
            const bossmovenum = Math.floor(Math.random()*4)
            await combatLogger.Log(`${this.bossActive.name} used ${this.bossActive.moveset[bossmovenum].name}`)
            dmg = await this.bossActive.Attack(this.bossActive,this.bossActive.moveset[0],this.playerActive)
            if(dmg==-1){
                await combatLogger.Log(`It missed!`)
            }
            if(dmg>0){
                this.playerActive.hp -= dmg
                const effectiveness = getTypeEffectiveness(this.bossActive.moveset[bossmovenum].type,this.playerActive.type)
                if(effectiveness>1){
                    await combatLogger.Log("It's super effective!")
                    
                }
                else if(effectiveness<1){
                    await combatLogger.Log("It's not very effective")
                    
                }
            }
        }
        else{
            const bossmovenum = Math.floor(Math.random()*4)
            await combatLogger.Log(`${this.bossActive.name} used ${this.bossActive.moveset[bossmovenum].name}`)
            let dmg = await this.bossActive.Attack(this.bossActive,this.bossActive.moveset[0],this.playerActive)
            if(dmg==-1){
                await combatLogger.Log(`It missed!`)
                
            }
            if(dmg>0){
                this.bossActive.hp -= dmg
                const effectiveness = getTypeEffectiveness(this.bossActive.moveset[bossmovenum].type,this.playerActive.type)
                if(effectiveness>1){
                    await combatLogger.Log("It's super effective!")
                    
                }
                else if(effectiveness<1){
                    await combatLogger.Log("It's not very effective")
                    
                }
            }
            await combatLogger.Log(`${this.playerActive.name} used ${move.name}`)
            dmg = await this.playerActive.Attack(this.playerActive, move, this.bossActive)
            if(dmg==-1){
                await combatLogger.Log(`It missed!`)
            }
            if(dmg>0){
                this.playerActive.hp -= dmg
                const effectiveness = getTypeEffectiveness(move.type,this.bossActive.type)
                if(effectiveness>1){
                    await combatLogger.Log("It's super effective!")
                    
                }
                else if(effectiveness<1){
                    await combatLogger.Log("It's not very effective")
                    
                }
            }
        }
        combatLogger.Log("What will you do now?")
    }
    updateElements(){
        this.playerActive.imgelement = document.querySelectorAll(".battle-pokemon-img")[0]
        this.bossActive.imgelement = document.querySelectorAll(".battle-pokemon-img")[1]
        this.bossActive.battlestatuselement = document.querySelectorAll(".battle-status-container")[0]
        this.playerActive.battlestatuselement = document.querySelectorAll(".battle-status-container")[1]
        document.querySelectorAll(".battle-status-hp")[0].textContent = this.bossActive.hp
        document.querySelectorAll(".battle-status-hp")[1].textContent = this.playerActive.hp
        document.querySelectorAll(".battle-status-name")[0].textContent = this.playerActive.name
        document.querySelectorAll(".battle-status-name")[1].textContent = this.bossActive.name
        document.querySelectorAll(".battle-status-ailment")[0].textContent = this.playerActive.statusCondition
        document.querySelectorAll(".battle-status-ailment")[1].textContent = this.bossActive.statusCondition
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