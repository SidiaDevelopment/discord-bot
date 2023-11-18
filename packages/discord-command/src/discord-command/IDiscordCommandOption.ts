import {IDiscordCommandData} from "./IDiscordCommandData"
import {APIApplicationCommandOptionChoice, ApplicationCommandOptionType} from "discord.js"

export interface IDiscordCommandOption<T extends IDiscordCommandData> {
    name: keyof Omit<T, keyof IDiscordCommandData>
    type: Exclude<ApplicationCommandOptionType, ApplicationCommandOptionType.Subcommand | ApplicationCommandOptionType.SubcommandGroup>
    description: string
    autocomplete?: string // TODO decorator
    required?: true
    catchall?: true
    choices?: APIApplicationCommandOptionChoice[]
    choicesCallback?: () => Promise<APIApplicationCommandOptionChoice[]>
}
