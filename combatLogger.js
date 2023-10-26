export class combatLogger{
    static htmlelement = document.querySelector(".combat-log-container")
    
    static async Log(text){
        this.htmlelement.innerHTML = ""
        let log = document.createElement("p")
        log.innerText = text
        this.htmlelement.appendChild(log)
        await this.sleep(1000)
    }
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}