import {IConfig} from "@sidia/core/types"
import {LogLevel} from "@sidia/logging"

export const config: IConfig = {
    projectName: "",
    discord: {
        key: "",
    },
    discordCommands: {
        updateCommandsOnStart: true
    },
    logging: {
        logLevel: LogLevel.Development
    }
}
