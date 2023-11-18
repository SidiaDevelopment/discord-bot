import {injectService, Service} from "@sidia/service"
import {PingService} from "./PingService"

export class PongService extends Service {

    @injectService
    public pingService!: PingService

    public init = async (): Promise<void> => {

    }
}
