import {Logger} from "./logger/Logger"
import {LogLevel} from "./logger/LogLevel"
import {useContext} from "@sidia/core"
import {ConfigContext} from "@sidia/config"
import moment from "moment"
import chalk from "chalk"

export class ConsoleLogger extends Logger {
    private logLevel: LogLevel = LogLevel.NeverLog
    private projectName: string = ""

    public init = async (): Promise<void> => {
        const {projectName, logging: {logLevel}} = useContext(ConfigContext)

        this.logLevel = logLevel
        this.projectName = projectName

        this.log("@sidia/logging", LogLevel.Debug, "Started @sidia/core")

    }

    public filter = async (logLevel: LogLevel): Promise<boolean> => {
        return logLevel >= this.logLevel
    }

    public log = async (module: string, logLevel: LogLevel, ...messages: any[]): Promise<void> => {
        if (!(await this.filter(logLevel))) return

        const logName = this.projectName
        const date = moment().format("HH:mm:ss")
        const logLevelText = chalk.red(`[${LogLevel[logLevel]}]`)
        const dateText = chalk.cyanBright(date)
        const nameText = chalk.green(logName)
        const moduleName = chalk.yellow(`<${module}>`)

        console.log(`${dateText} - ${logLevelText} ${nameText} ${moduleName}:`, ...messages)
    }
}
