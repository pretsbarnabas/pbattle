export class combatLogger{
    constructor(){
        this.htmlelement = document.querySelector(".combat-log-container")
    }

    Log(text){
        let log = document.createElement("p")
        log.innerText = text
        this.htmlelement.appendChild(log)
    }
}