import {IModule} from "@sidia/core/types"
import {DatabaseService} from "./services/DatabaseService"

export class DatabaseModule implements IModule {
    name: string = "database"
    services = [
        DatabaseService
    ]
}
