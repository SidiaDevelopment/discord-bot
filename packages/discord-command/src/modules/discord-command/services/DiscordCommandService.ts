import {Interaction} from "discord.js"
import {useContext} from "@sidia/core"
import {LoggingContext, LogLevel} from "@sidia/logging"
import {injectService, Service} from "@sidia/service"
import {DiscordEventService} from "@sidia/discord"
import {DiscordCommandController} from "../../../discord-command/DiscordCommandController"

export class DiscordCommandService extends Service {
    @injectService
    private discordEventService!: DiscordEventService

    public init = async (): Promise<void> => {
        this.discordEventService.subscribe("interactionCreate", this.onInteraction)
    }

    private onInteraction(interaction: Interaction) {
        if (!interaction.isChatInputCommand()) return
        if (interaction.user.bot) return

        const commandName = interaction.commandName
        const subCommand = interaction.options.getSubcommand(false)
        const subCommandGroup = interaction.options.getSubcommandGroup(false)

        const {logger} = useContext(LoggingContext)

        const instance = DiscordCommandController.getCommand(commandName, subCommand, subCommandGroup)
        if (!instance) {
            logger.log(
                "@sidia/discord-command",
                LogLevel.Error,
                `Could not find command for chain: ${DiscordCommandController.getUniqueIdentifier(commandName, subCommand, subCommandGroup)}`
            )
        }

        logger.log(
            "@sidia/discord-command",
            LogLevel.Debug,
            `Executing command for chain: ${DiscordCommandController.getUniqueIdentifier(commandName, subCommand, subCommandGroup)}`
        )
        instance?.execute(interaction)
    }
}
