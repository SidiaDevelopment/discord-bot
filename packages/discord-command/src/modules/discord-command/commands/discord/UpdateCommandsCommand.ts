import {Colors, EmbedBuilder} from "discord.js"
import {translate} from "@sidia/i18n"
import {ApplicationCommandOptionType} from "discord-api-types/v10"
import {IDiscordCommandData} from "../../../../IDiscordCommandData"
import {command} from "../../../../decorators/command"
import {DiscordCommand} from "../../../../DiscordCommand"
import {IDiscordCommand} from "../../../../IDiscordCommand"
import {injectService} from "@sidia/service"
import {DiscordUpdateCommandsService} from "../../services/DiscordUpdateCommandsService"
import * as repl from "repl"

export interface ICommandData extends IDiscordCommandData {
    text: string
}

const commandConfig: IDiscordCommand<ICommandData> = {
    command: "commands",
    subCommand: "update",
    description: "discordCommands.commands.update.description",
    options: [
        {
            name: "text",
            type: ApplicationCommandOptionType.String,
            description: "discordCommands.commands.update.description"
        }
    ]
}

@command(commandConfig)
export class UpdateCommandsCommand extends DiscordCommand<ICommandData> {
    @injectService
    private discordUpdateCommandsService!: DiscordUpdateCommandsService

    public handle = async ({interaction}: ICommandData): Promise<void> => {
        const embed = new EmbedBuilder()
        embed.setTitle(translate("discordCommands.commands.update.reply.title", interaction.locale))
        embed.setDescription(translate("discordCommands.commands.update.reply.contentUpdating", interaction.locale))
        embed.setColor(Colors.Green)
        const reply = await interaction.reply({embeds: [embed], fetchReply: true})
        embed.setDescription(translate("discordCommands.commands.update.reply.content", interaction.locale))

        await this.discordUpdateCommandsService.updateCommands()
        await reply.edit({embeds: [embed]})
    }
}
