import {type} from "./enum.js"

export function getTypeEffectiveness(moveType, targetType){
    let effectiveness = 1
    for (let i = 0; i < targetType.length; i++) {
        console.log(moveType==type.Water)
        console.log(moveType)
        console.log(targetType[i])
        switch (moveType) {
            case type.Normal:
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                break;
            case type.Water:
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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
                switch (targetType[i]) {
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