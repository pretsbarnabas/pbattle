export class combatLogger{

    static async Log(text){
        let htmlelement = document.querySelector(".combat-log-container")
        htmlelement.innerHTML = ""
        for (let i = 0; i < text.length; i++) {
            if(text[i]==' '){
                htmlelement.innerText+="\xa0"
            }    
            htmlelement.innerText += text[i]
            await this.sleep(10)
        }
        await this.sleep(1000)
    }
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}