import {ILogger} from "./ILogger"
import {LogLevel} from "./LogLevel"
import {Ctor, useContext} from "@sidia/core"
import {ConfigContext} from "@sidia/config"

export class LogBroadcaster implements ILogger {
    private loggers: ILogger[] = []

    public init = async (): Promise<void> => {
        const {logging: {logger}} = useContext(ConfigContext)

        if (!logger) return

        for (const loggerElement of logger) {
            await this.addLogger(loggerElement)
        }

    }

    public addLogger = async (loggerElement: Ctor<ILogger>) => {
        const instance = new loggerElement()
        await instance.init()

        this.loggers.push(instance)
    }

    public filter = async (_: LogLevel): Promise<boolean> => {
        return true
    }

    public log = async (module: string, logLevel: LogLevel, ...messages: any[]): Promise<void> => {
        for (const logger of this.loggers) {
            logger.log(module, logLevel, ...messages)
        }
    }

}
