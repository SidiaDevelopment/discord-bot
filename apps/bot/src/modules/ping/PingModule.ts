import {IModule} from "@sidia/core/types"
import {IModuleDiscordConfig} from "@sidia/discord-command"
import {PingCommand} from "./commands/PingCommand"
import {PingLocalizations} from "./PingDeclaration"

export class PingModule implements IModule {
    public name = "ping"
    public discord: IModuleDiscordConfig = {
        tag: "ping",
        discordCommands: [PingCommand]
    }
    public localizations = PingLocalizations
}
