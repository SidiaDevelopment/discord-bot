import "@sidia/config"
import "@sidia/logging"

import {Core} from "@sidia/core"
import {DiscordModule} from "@sidia/discord"
import {DatabaseModule} from "@sidia/database"
import {DiscordCommandModule} from "@sidia/discord-command"
import {PingModule} from "./modules/ping/PingModule"
import {config} from "./config"

const core = new Core()
core.create({
    modules: [
        PingModule,
        DiscordModule,
        DiscordCommandModule,
        DatabaseModule
    ],
    config: config
}).then(core.start)
