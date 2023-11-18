import {IDiscordCommandData} from "../../../../discord-command/IDiscordCommandData"
import {command} from "../../../../discord-command/decorators/command"
import {DiscordCommand} from "../../../../discord-command/DiscordCommand"
import {IDiscordCommandConfig} from "../../../../discord-command/IDiscordCommandConfig"
import {ApplicationCommandOptionType} from "discord-api-types/v10"

export interface ICommandData extends IDiscordCommandData {
    text: string
}

const commandConfig: IDiscordCommandConfig<ICommandData> = {
    command: "commands",
    subCommand: "update",
    description: "Update all commands",
    options: [
        {
            name: "text",
            type: ApplicationCommandOptionType.String,
            description: "Text"
        }
    ]
}

@command(commandConfig)
export class UpdateCommandsCommand extends DiscordCommand<ICommandData> {
    public handle = async ({interaction}: ICommandData): Promise<void> => {
        await interaction.reply("Test")
    }
}
