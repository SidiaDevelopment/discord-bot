import {LogLevel} from "./LogLevel"

export interface ILogger {
    init(): Promise<void>

    log(module: string, logLevel: LogLevel, ...messages: any[]): Promise<void>
    filter(logLevel: LogLevel): Promise<boolean>
}

