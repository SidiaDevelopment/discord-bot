import {Config, defaultConfig} from "@sidia/config"
import {IDiscordCommandConfig} from "./IDiscordCommandConfig"
import {PartialRecursive} from "@sidia/core"

@defaultConfig
export class DiscordCommandConfig extends Config<IDiscordCommandConfig> {
    data: PartialRecursive<IDiscordCommandConfig> = {
        discordCommands: {
            updateCommandsOnStart: true
        }
    }
}
