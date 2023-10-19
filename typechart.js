import {type} from "./enum.js"

export function getTypeEffectiveness(moveType, targetType){
    let effectiveness = 1
    for (let i = 0; i < targetType.length; i++) {
        switch (targetType[i]) {
            case type.Normal:
                switch (moveType) {
                    case type.Rock:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Ghost:
                        effectiveness = effectiveness*0
                        break;
                    case type.Steel:
                        effectiveness = effectiveness*0.5
                        break;
                    default:
                        break;
                }
                break;
            case type.Fire:
                switch (moveType) {
                    case type.Fire:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Water:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Grass:
                        effectiveness = effectiveness*2
                        break;
                    case type.Ice:
                        effectiveness = effectiveness*2
                        break;
                    case type.Rock:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Bug:
                        effectiveness = effectiveness*2
                        break;
                    case type.Dragon:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Steel:
                        effectiveness = effectiveness*2
                        break;
                
                    default:
                        break;
                }
            case type.Water:
                switch (moveType) {
                    case type.Fire:
                        effectiveness = effectiveness*2
                        break;
                    case type.Water:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Grass:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Ground:
                        effectiveness = effectiveness*2
                        break;
                    case type.Rock:
                        effectiveness = effectiveness*2
                        break;
                    case type.Dragon:
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case type.Grass:
                switch (moveType) {
                    case type.Fire:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Water:
                        effectiveness = effectiveness*2
                        break;
                    case type.Grass:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Poison:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Ground:
                        effectiveness = effectiveness*2
                        break;
                    case type.Flying:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Bug:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Rock:
                        effectiveness = effectiveness*2
                        break;
                    case type.Dragon:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Steel:
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case type.Electric:
                switch (moveType) {
                    case type.Water:
                        effectiveness = effectiveness*2
                        break;
                    case type.Grass:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Electric:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Ground:
                        effectiveness = effectiveness*0
                        break;
                    case type.Flying:
                        effectiveness = effectiveness*2
                        break;
                    case type.Dragon:
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case type.Ice:
                switch (moveType) {
                    case type.Fire:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Water:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Grass:
                        effectiveness = effectiveness*2
                        break;
                    case type.Ice:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Ground:
                        effectiveness = effectiveness*2
                        break;
                    case type.Flying:
                        effectiveness = effectiveness*2
                        break;
                    case type.Dragon:
                        effectiveness = effectiveness*2
                        break;
                    case type.Steel:
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case type.Fighting:
                switch (moveType) {
                    case type.Normal:
                        effectiveness = effectiveness*2
                        break;
                    case type.Ice:
                        effectiveness = effectiveness*2
                        break;
                    case type.Poison:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Flying:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Psychic:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Bug:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Rock:
                        effectiveness = effectiveness*2
                        break;
                    case type.Ghost:
                        effectiveness = effectiveness*0
                        break;
                    case type.Dark:
                        effectiveness = effectiveness*2
                        break;
                    case type.Steel:
                        effectiveness = effectiveness*2
                        break;
                    case type.Fairy:
                        effectiveness = effectiveness*0.5
                        break;
                    default:
                        break;
                }
                break;
            case type.Poison:
                switch (moveType) {
                    case type.Grass:
                        effectiveness = effectiveness*2
                        break;
                    case type.Poison:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Ground:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Rock:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Ghost:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Steel:
                        effectiveness = effectiveness*0
                        break;
                    case type.Fairy:
                        effectiveness = effectiveness*2
                        break;
                
                    default:
                        break;
                }
                break;
            case type.Ground:
                switch (moveType) {
                    case type.Fire:
                        effectiveness = effectiveness*2
                        break;
                    case type.Grass:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Electric:
                        effectiveness = effectiveness*2
                        break;
                    case type.Poison:
                        effectiveness = effectiveness*2
                        break;
                    case type.Flying:
                        effectiveness = effectiveness*0
                        break;
                    case type.Bug:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Rock:
                        effectiveness = effectiveness*2
                        break;
                    case type.Steel:
                        effectiveness = effectiveness*2
                        break;
                
                    default:
                        break;
                }
                break;
            case type.Flying:
                switch (moveType) {
                    case type.Grass:
                        effectiveness = effectiveness*2
                        break;
                    case type.Electric:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Fighting:
                        effectiveness = effectiveness*2
                        break;
                    case type.Bug:
                        effectiveness = effectiveness*2
                        break;
                    case type.Rock:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Steel:
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case type.Psychic:
                switch (moveType) {
                    case type.Fighting:
                        effectiveness = effectiveness*2
                        break;
                    case type.Poison:
                        effectiveness = effectiveness*2
                        break;
                    case type.Psychic:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Dark:
                        effectiveness = effectiveness*2
                        break;
                    case type.Steel:
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case type.Bug:
                switch (moveType) {
                    case type.Fire:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Grass:
                        effectiveness = effectiveness*2
                        break;
                    case type.Fighting:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Poison:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Flying:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Psychic:
                        effectiveness = effectiveness*2
                        break;
                    case type.Ghost:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Dark:
                        effectiveness = effectiveness*2
                        break;
                    case type.Steel:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Fairy:
                        effectiveness = effectiveness*0.5
                        break;
                    default:
                        break;
                }
                break;
            case type.Rock:
                switch (moveType) {
                    case type.Fire:
                        effectiveness = effectiveness*2
                        break;
                    case type.Ice:
                        effectiveness = effectiveness*2
                        break;
                    case type.Fighting:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Ground:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Bug:
                        effectiveness = effectiveness*2
                        break;
                    case type.Flying:
                        effectiveness = effectiveness*2
                        break;
                    case type.Steel:
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case type.Ghost:
                switch (moveType) {
                    case type.Normal:
                        effectiveness = effectiveness*0
                        break;
                    case type.Psychic:
                        effectiveness = effectiveness*2
                        break;
                    case type.Ghost:
                        effectiveness = effectiveness*2
                        break;
                    case type.Dark:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Steel:
                        effectiveness = effectiveness*0.5
                        break;

                    default:
                        break;
                }
                break;
            case type.Dragon:
                switch (moveType) {
                    case type.Dragon:
                        effectiveness = effectiveness*2
                        break;
                    case type.Steel:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Fairy:
                        effectiveness = effectiveness*0
                        break;
                    default:
                        break;
                }
                break;
            case type.Dark:
                switch (moveType) {
                    case type.Fighting:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Psychic:
                        effectiveness = effectiveness*2
                        break;
                    case type.Ghost:
                        effectiveness = effectiveness*2
                        break;
                    case type.Dragon:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Fairy:
                        effectiveness = effectiveness*0.5
                        break;
                
                    default:
                        break;
                }
                break;
            case type.Steel:
                switch (moveType) {
                    case type.Fire:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Water:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Electric:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Rock:
                        effectiveness = effectiveness*2
                        break;
                    case type.Ice:
                        effectiveness = effectiveness*2
                        break;
                    case type.Steel:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Fairy:
                        effectiveness = effectiveness*2
                        break;
                
                    default:
                        break;
                }
                break;
            case type.Fairy:
                switch (moveType) {
                    case type.Fire:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Fighting:
                        effectiveness = effectiveness*2
                        break;
                    case type.Poison:
                        effectiveness = effectiveness*0.5
                        break;
                    case type.Dragon:
                        effectiveness = effectiveness*2
                        break;
                    case type.Dark:
                        effectiveness = effectiveness*2
                        break;
                    case type.Steel:
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