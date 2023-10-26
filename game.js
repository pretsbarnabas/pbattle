import { combatLogger } from "./combatLogger.js"
import { getTypeEffectiveness } from "./typechart.js"

export class Game{
    constructor(player, boss){
        this.player = player
        this.boss = boss
        this.playerActive = player.party[0]
        this.bossActive = boss.party[0]
        this.playerTurn = true
    }

    async Turn(move){
        if(this.playerActive.speed >= this.bossActive.speed){
            combatLogger.Log(`${this.playerActive.name} used ${move.name}`)
            await combatLogger.sleep(1000)
            let dmg = await this.playerActive.Attack(this.playerActive, move, this.bossActive)
            if(dmg==-1){
                await combatLogger.Log(`It missed!`)
                
            }
            if(dmg>0){
                this.bossActive.hp -= dmg
                document.querySelectorAll(".battle-status-hp")[0].textContent = this.bossActive.hp
                const effectiveness = getTypeEffectiveness(move.type,this.bossActive.type)
                if(effectiveness>1){
                    await combatLogger.Log("It's super effective!")
                    
                }
                else if(effectiveness<1){
                    await combatLogger.Log("It's not very effective")
                    
                }
            }
            const bossmovenum = Math.floor(Math.random()*4)
            await combatLogger.Log(`${this.bossActive.name} used ${this.bossActive.moveset[0].name}`)
            dmg = this.bossActive.Attack(this.bossActive,this.bossActive.moveset[0],this.playerActive)
            if(dmg==-1){
                await combatLogger.Log(`It missed!`)
            }
            if(dmg>0){
                this.playerActive.hp -= dmg
                document.querySelectorAll(".battle-status-hp")[1].textContent = this.playerActive.hp
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
            combatLogger.Log(`${this.bossActive.name} used ${this.bossActive.moveset[bossmovenum].name}`)

            await combatLogger.sleep(2000)
            let dmg = this.bossActive.Attack(this.bossActive,this.bossActive.moveset[bossmovenum],this.playerActive)
            if(dmg==-1){
                combatLogger.Log(`It missed!`)
                await combatLogger.sleep(1000)
            }
            if(dmg>0){
                this.playerActive.hp -= dmg
                document.querySelectorAll(".battle-status-hp")[1].textContent = this.playerActive.hp
                const effectiveness = getTypeEffectiveness(this.bossActive.moveset[bossmovenum].type,this.playerActive.type)
                if(effectiveness>1){
                    combatLogger.Log("It's super effective!")
                    await combatLogger.sleep(1000)
                }
                else if(effectiveness<1){
                    combatLogger.Log("It's not very effective")
                    await combatLogger.sleep(1000)
                }
            }
            combatLogger.Log(`${this.playerActive.name} used ${move.name}`)
            await combatLogger.sleep(2000)
            dmg = this.playerActive.Attack(this.playerActive, move, this.bossActive)
            if(dmg==-1){
                combatLogger.Log(`It missed!`)
                await combatLogger.sleep(1000)
            }
            if(dmg>0){
                this.bossActive.hp -= dmg
                document.querySelectorAll(".battle-status-hp")[0].textContent = this.bossActive.hp
                const effectiveness = getTypeEffectiveness(move.type,this.bossActive.type)
                if(effectiveness>1){
                    combatLogger.Log("It's super effective!")
                    await combatLogger.sleep(1000)
                }
                else if(effectiveness<1){
                    combatLogger.Log("It's not very effective")
                    await combatLogger.sleep(1000)
                }
            }
        }

    }
}