export class combatLogger{
    static htmlelement = document.querySelector(".combat-log-container")
    
    static Log(text){
        this.htmlelement.innerHTML = ""
        let log = document.createElement("p")
        log.innerText = text
        this.htmlelement.appendChild(log)
    }
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}