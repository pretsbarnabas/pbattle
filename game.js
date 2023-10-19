export class Game{
    constructor(player, boss, combatLogger){
        this.player = player
        this.boss = boss
        this.playerActive = player.party[0]
        this.bossActive = boss.party[0]
        this.playerTurn = true
        this.combatLogger = combatLogger
    }

    Turn(move){
        if(this.playerActive.speed >= this.bossActive.speed){
            this.combatLogger.Log(`${this.playerActive.name} used ${move.name}`)
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