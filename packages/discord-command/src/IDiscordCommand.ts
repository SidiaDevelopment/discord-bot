import {IDiscordCommandData} from "./IDiscordCommandData"
import {IDiscordCommandOption} from "./IDiscordCommandOption"
import {Localization} from "@sidia/i18n"

export interface IDiscordCommand<T extends IDiscordCommandData> {
    command: string
    subCommand?: string
    subCommandGroup?: string
    description: Localization
    options?: IDiscordCommandOption<T>[]
}
