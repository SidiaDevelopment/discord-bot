import {LogLevel} from "./LogLevel"
import {ILogger} from "./ILogger"

export abstract class Logger implements ILogger {
    public abstract init(): Promise<void>
    public abstract filter(logLevel: LogLevel): Promise<boolean>
    public abstract log(module: string, logLevel: LogLevel, ...messages: any[]): Promise<void>

    public debug = (module: string, ...messages: any[]): Promise<void> => this.log(module, LogLevel.Debug, messages)
    public warn = (module: string, ...messages: any[]): Promise<void> => this.log(module, LogLevel.Warning, messages)
    public error = (module: string, ...messages: any[]): Promise<void> => this.log(module, LogLevel.Error, messages)
}
