import {Config, defaultConfig} from "@sidia/config"
import {IDiscordConfig} from "./IDiscordConfig"
import {PartialRecursive} from "@sidia/core"
import {GatewayIntentBits} from "discord.js"

@defaultConfig
export class DiscordConfig extends Config<IDiscordConfig> {
    data: PartialRecursive<IDiscordConfig> = {
        discord: {
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildModeration,
                GatewayIntentBits.GuildEmojisAndStickers,
                GatewayIntentBits.GuildIntegrations,
                GatewayIntentBits.GuildWebhooks,
                GatewayIntentBits.GuildInvites,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.GuildMessageTyping,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.DirectMessageReactions,
                GatewayIntentBits.DirectMessageTyping,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildScheduledEvents,
            ]
        }
    }
}
