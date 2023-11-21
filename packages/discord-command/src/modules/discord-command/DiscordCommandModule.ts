import {IModule} from "@sidia/core/types"
import {DiscordCommandService} from "./services/DiscordCommandService"
import {DiscordUpdateCommandsService} from "./services/DiscordUpdateCommandsService"
import {UpdateCommandsCommand} from "./commands/discord/UpdateCommandsCommand"
import {IModuleDiscordConfig} from "../../DiscordCommand"
import {DiscordCommandLocalizations} from "./DiscordCommandDeclaration"

export class DiscordCommandModule implements IModule {
    public name: string = "discord-command"
    public services = [
        DiscordCommandService,
        DiscordUpdateCommandsService
    ]
    public discord?: IModuleDiscordConfig = {
        tag: "DiscordCommands",
        discordCommands: [
            UpdateCommandsCommand
        ]
    }
    public localizations = DiscordCommandLocalizations
}
