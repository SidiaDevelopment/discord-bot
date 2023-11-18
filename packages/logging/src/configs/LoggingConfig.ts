import {Config, defaultConfig} from "@sidia/config"
import {PartialRecursive} from "@sidia/core"
import {ILoggingConfig} from "./ILoggingConfig"
import {LogLevel} from "../logger/LogLevel"
import {ConsoleLogger} from "../ConsoleLogger"

@defaultConfig
export class LoggingConfig extends Config<ILoggingConfig> {
    data: PartialRecursive<ILoggingConfig> = {
        logging: {
            logLevel: LogLevel.Error,
            logger: [ConsoleLogger]
        }
    }
}
