import "@sidia/config"
import "@sidia/logging"

import {Core} from "@sidia/core"
import {DiscordModule} from "@sidia/discord"
import {PingModule} from "./modules/ping/PingModule"
import {DiscordCommandModule} from "@sidia/discord-command"
import {config} from "./config"

const core = new Core()
core.create({
    modules: [
        PingModule,
        DiscordModule,
        DiscordCommandModule
    ],
    config: config
}).then(core.start)
