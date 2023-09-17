export function getTypeEffectiveness(moveType, targetType){
    let effectiveness = 1
    for (let i = 0; i < targetType.length; i++) {
        switch (targetType[i]) {
            case "Normal":
                switch (moveType) {
                    case "Rock":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Ghost":
                        effectiveness = effectiveness*0
                        break;
                    case "Steel":
                        effectiveness = effectiveness*0.5
                        break;
                    default:
                        break;
                }
                break;
            case "Fire":
                switch (moveType) {
                    case "Fire":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Water":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Grass":
                        effectiveness = effectiveness*2
                        break;
                    case "Ice":
                        effectiveness = effectiveness*2
                        break;
                    case "Rock":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Bug":
                        effectiveness = effectiveness*2
                        break;
                    case "Dragon":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Steel":
                        effectiveness = effectiveness*2
                        break;
                
                    default:
                        break;
                }
            case "Water":
                switch (moveType) {
                    case "Fire":
                        effectiveness = effectiveness*2
                        break;
                    case "Water":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Grass":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Ground":
                        effectiveness = effectiveness*2
                        break;
                    case "Rock":
                        effectiveness = effectiveness*2
                        break;
                    case "Dragon":
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case "Grass":
                switch (moveType) {
                    case "Fire":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Water":
                        effectiveness = effectiveness*2
                        break;
                    case "Grass":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Poison":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Ground":
                        effectiveness = effectiveness*2
                        break;
                    case "Flying":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Bug":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Rock":
                        effectiveness = effectiveness*2
                        break;
                    case "Dragon":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Steel":
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case "Electric":
                switch (moveType) {
                    case "Water":
                        effectiveness = effectiveness*2
                        break;
                    case "Grass":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Electric":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Ground":
                        effectiveness = effectiveness*0
                        break;
                    case "Flying":
                        effectiveness = effectiveness*2
                        break;
                    case "Dragon":
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case "Ice":
                switch (moveType) {
                    case "Fire":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Water":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Grass":
                        effectiveness = effectiveness*2
                        break;
                    case "Ice":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Ground":
                        effectiveness = effectiveness*2
                        break;
                    case "Flying":
                        effectiveness = effectiveness*2
                        break;
                    case "Dragon":
                        effectiveness = effectiveness*2
                        break;
                    case "Steel":
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case "Fighting":
                switch (moveType) {
                    case "Normal":
                        effectiveness = effectiveness*2
                        break;
                    case "Ice":
                        effectiveness = effectiveness*2
                        break;
                    case "Poison":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Flying":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Psychic":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Bug":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Rock":
                        effectiveness = effectiveness*2
                        break;
                    case "Ghost":
                        effectiveness = effectiveness*0
                        break;
                    case "Dark":
                        effectiveness = effectiveness*2
                        break;
                    case "Steel":
                        effectiveness = effectiveness*2
                        break;
                    case "Fairy":
                        effectiveness = effectiveness*0.5
                        break;
                    default:
                        break;
                }
                break;
            case "Poison":
                switch (moveType) {
                    case "Grass":
                        effectiveness = effectiveness*2
                        break;
                    case "Poison":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Ground":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Rock":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Ghost":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Steel":
                        effectiveness = effectiveness*0
                        break;
                    case "Fairy":
                        effectiveness = effectiveness*2
                        break;
                
                    default:
                        break;
                }
                break;
            case "Ground":
                switch (moveType) {
                    case "Fire":
                        effectiveness = effectiveness*2
                        break;
                    case "Grass":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Electric":
                        effectiveness = effectiveness*2
                        break;
                    case "Poison":
                        effectiveness = effectiveness*2
                        break;
                    case "Flying":
                        effectiveness = effectiveness*0
                        break;
                    case "Bug":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Rock":
                        effectiveness = effectiveness*2
                        break;
                    case "Steel":
                        effectiveness = effectiveness*2
                        break;
                
                    default:
                        break;
                }
                break;
            case "Flying":
                switch (moveType) {
                    case "Grass":
                        effectiveness = effectiveness*2
                        break;
                    case "Electric":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Fighting":
                        effectiveness = effectiveness*2
                        break;
                    case "Bug":
                        effectiveness = effectiveness*2
                        break;
                    case "Rock":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Steel":
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case "Psychic":
                switch (moveType) {
                    case "Fighting":
                        effectiveness = effectiveness*2
                        break;
                    case "Poison":
                        effectiveness = effectiveness*2
                        break;
                    case "Psychic":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Dark":
                        effectiveness = effectiveness*2
                        break;
                    case "Steel":
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case "Bug":
                switch (moveType) {
                    case "Fire":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Grass":
                        effectiveness = effectiveness*2
                        break;
                    case "Fighting":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Poison":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Flying":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Psychic":
                        effectiveness = effectiveness*2
                        break;
                    case "Ghost":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Dark":
                        effectiveness = effectiveness*2
                        break;
                    case "Steel":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Fairy":
                        effectiveness = effectiveness*0.5
                        break;
                    default:
                        break;
                }
                break;
            case "Rock":
                switch (moveType) {
                    case "Fire":
                        effectiveness = effectiveness*2
                        break;
                    case "Ice":
                        effectiveness = effectiveness*2
                        break;
                    case "Fighting":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Ground":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Bug":
                        effectiveness = effectiveness*2
                        break;
                    case "Flying":
                        effectiveness = effectiveness*2
                        break;
                    case "Steel":
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case "Ghost":
                switch (moveType) {
                    case "Normal":
                        effectiveness = effectiveness*0
                        break;
                    case "Psychic":
                        effectiveness = effectiveness*2
                        break;
                    case "Ghost":
                        effectiveness = effectiveness*2
                        break;
                    case "Dark":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Steel":
                        effectiveness = effectiveness*0.5
                        break;

                    default:
                        break;
                }
                break;
            case "Dragon":
                switch (moveType) {
                    case "Dragon":
                        effectiveness = effectiveness*2
                        break;
                    case "Steel":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Fairy":
                        effectiveness = effectiveness*0
                        break;
                    default:
                        break;
                }
                break;
            case "Dark":
                switch (moveType) {
                    case "Fighting":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Psychic":
                        effectiveness = effectiveness*2
                        break;
                    case "Ghost":
                        effectiveness = effectiveness*2
                        break;
                    case "Dragon":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Fairy":
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case "Steel":
                switch (moveType) {
                    case "Fire":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Water":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Electric":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Rock":
                        effectiveness = effectiveness*2
                        break;
                    case "Ice":
                        effectiveness = effectiveness*2
                        break;
                    case "Steel":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Fairy":
                        effectiveness = effectiveness*2
                        break;
                
                    default:
                        break;
                }
                break;
            case "Fairy":
                switch (moveType) {
                    case "Fire":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Fighting":
                        effectiveness = effectiveness*2
                        break;
                    case "Poison":
                        effectiveness = effectiveness*0.5
                        break;
                    case "Dragon":
                        effectiveness = effectiveness*2
                        break;
                    case "Dark":
                        effectiveness = effectiveness*2
                        break;
                    case "Steel":
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        
    }
    return effectiveness
}