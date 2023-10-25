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
            let dmg = this.playerActive.Attack(this.playerActive, move, this.bossActive)
            if(dmg){
                this.bossActive.hp -= dmg
            }
            dmg = this.bossActive.Attack(this.bossActive,this.bossActive.moveset[Math.floor(Math.random()*4)],this.playerActive)
            if(dmg){
                this.playerActive.hp -= dmg
            }
        }
        else{
            let dmg = this.bossActive.Attack(this.bossActive,this.bossActive.moveset[Math.floor(Math.random()*4)],this.playerActive)
            if(dmg){
                this.bossActive.hp -= dmg
            }
            dmg = this.playerActive.Attack(this.playerActive, move, this.bossActive)
            if(dmg){
                this.playerActive.hp -= dmg
            }
        }

    }
}