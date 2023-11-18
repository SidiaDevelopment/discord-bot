import {addContextData, Context, Core, createContext, onEvent} from "@sidia/core"
import {ILoggingContext} from "./ILoggingContext"
import {ICoreCreateOptions} from "@sidia/core/types"
import {LogBroadcaster} from "../logger/LogBroadcaster"

export class LoggingContext extends Context<ILoggingContext> {
    @onEvent(Core.onCreate)
    public async addContextData(_options: ICoreCreateOptions): Promise<void> {
        const instance = new LogBroadcaster()
        await instance.init()

        addContextData(LoggingContext, {
            logger: instance
        })
    }
}

createContext(new LoggingContext())
