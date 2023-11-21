import {IModule} from "@sidia/core/types"
import {DiscordService} from "./services/DiscordService"
import {DiscordEventService} from "./services/DiscordEventService"
import {DiscordConfig} from "./configs/DiscordConfig"

export class DiscordModule implements IModule {
    public name = "discord"
    public services = [
        DiscordService,
        DiscordEventService
    ]
}
