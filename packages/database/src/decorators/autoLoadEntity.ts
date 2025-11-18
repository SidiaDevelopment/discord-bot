import {Ctor} from "@sidia/core"
import {DatabaseService} from "../modules/database/services/DatabaseService"

export const autoLoadEntity = () => {
    return (ctor: Ctor<any>): void => {
        // DatabaseService.entities.push(ctor)
    }
}
