import {IDiscordCommandData} from "./IDiscordCommandData"
import {IDiscordCommandOption} from "./IDiscordCommandOption"

export interface IDiscordCommandConfig<T extends IDiscordCommandData> {
    command: string
    subCommand?: string
    subCommandGroup?: string
    description: string;
    options?: IDiscordCommandOption<T>[]
}
