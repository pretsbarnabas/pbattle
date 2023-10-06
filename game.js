export class Game{
    constructor(player, boss, combatLogger){
        this.player = player
        this.boss = boss
        this.playerActive = player.party[0]
        this.bossActive = boss.party[0]
        this.playerTurn = true
        this.combatLogger = combatLogger
    }

    Turn(){
        if(this.playerActive.speed >= this.bossActive.speed){
            this.combatLogger.Log(`${this.bossActive.hp}`)
            let dmg = this.playerActive.Attack(this.playerActive.moveset[0], this.bossActive)
            this.combatLogger.Log(`${this.playerActive.name} used ${this.playerActive.moveset[0].name} on ${this.bossActive.name}, it dealt ${dmg} damage!`)
            this.combatLogger.Log(`${this.bossActive.hp}`)
            }

    }
}