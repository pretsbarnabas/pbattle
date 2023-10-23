import { combatLogger } from "./combatLogger.js"

export class Game{
    constructor(player, boss){
        this.player = player
        this.boss = boss
        this.playerActive = player.party[0]
        this.bossActive = boss.party[0]
        this.playerTurn = true
    }

    Turn(move){
        if(this.playerActive.speed >= this.bossActive.speed){
            combatLogger.Log(`${this.playerActive.name} used ${move.name}`)
            let dmg = this.playerActive.Attack(this.playerActive, move, this.bossActive)
            if(dmg){
                this.bossActive.hp -= dmg
            }
            return
        }
        else{

        }

    }
}