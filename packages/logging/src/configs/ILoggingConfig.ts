import {Ctor} from "@sidia/core"
import {LogLevel} from "../logger/LogLevel"
import {ILogger} from "../logger/ILogger"

export interface ILoggingConfig {
    projectName: string,
    logging: {
        logLevel: LogLevel,
        logger?: Ctor<ILogger>[]
    }
}

declare module "@sidia/core/types" {
    export interface IConfig extends ILoggingConfig {}
}
