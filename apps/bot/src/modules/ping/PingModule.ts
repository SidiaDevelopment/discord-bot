import {IModule} from "@sidia/core/types"
import {PingService} from "./services/PingService"
import {PongService} from "./services/PongService"

export class PingModule implements IModule {
    public name: string = "ping"
    public services = [PingService, PongService]
}
