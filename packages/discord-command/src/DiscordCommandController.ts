import {useContext} from "@sidia/core"
import {LoggingContext, LogLevel} from "@sidia/logging"
import {IDiscordCommandControllerData} from "./IDiscordCommandControllerData"
import {DiscordCommand} from "./DiscordCommand"

export class DiscordCommandController {
    private static commands: Record<string, IDiscordCommandControllerData> = {}

    public static addCommand(command: DiscordCommand<any>): void {
        if (!command.config) {
            const {logger} = useContext(LoggingContext)
            logger.log("@sidia/discord-command", LogLevel.Error, `Missing @command decorator on command ${command.constructor.name}`)
            return
        }

        const identifier = DiscordCommandController.getUniqueIdentifier(
            command.config.command,
            command.config.subCommand ?? null,
            command.config.subCommandGroup ?? null
        )

        DiscordCommandController.commands[identifier] = {
            instance: command,
            command: command.config.command,
            subCommand: command.config.subCommand ?? null,
            subCommandGroup: command.config.subCommandGroup ?? null
        }
    }

    public static getUniqueIdentifier(command: string, subCommand: string | null, subCommandGroup: string | null): string {
        let id = command
        if (subCommandGroup != null) id = `${id}_${subCommandGroup}`
        if (subCommand != null) id = `${id}_${subCommand}`

        return id
    }

    public static getAllCommands(): IDiscordCommandControllerData[] {
        const commands = []
        for (const commandsKey in DiscordCommandController.commands) {
            const command = DiscordCommandController.commands[commandsKey]

            commands.push(command)
        }

        return commands
    }

    public static getCommand(command: string, subCommand: string | null, subCommandGroup: string | null): IDiscordCommandControllerData | null {
        const predicate = (element: IDiscordCommandControllerData) =>
            element.command == command && element.subCommand == subCommand && element.subCommandGroup == subCommandGroup
        return DiscordCommandController.getByPredicate(predicate)
    }

    public static getByPredicate(predicate: (element: IDiscordCommandControllerData) => boolean): IDiscordCommandControllerData | null {
        return Object.values(DiscordCommandController.commands).find(predicate) ?? null
    }
}
