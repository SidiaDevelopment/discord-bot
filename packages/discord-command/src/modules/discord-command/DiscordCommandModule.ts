import {IModule} from "@sidia/core/types"
import {DiscordCommandService} from "./services/DiscordCommandService"
import {DiscordUpdateCommandsService} from "./services/DiscordUpdateCommandsService"
import {IModuleDiscordConfig} from "../../discord-command/DiscordCommand"
import {UpdateCommandsCommand} from "./commands/discord/UpdateCommandsCommand"

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
}
