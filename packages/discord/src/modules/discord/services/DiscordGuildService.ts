import {injectService, Service} from "@sidia/service"
import {DiscordEventService} from "./DiscordEventService"
import {Events, Guild, GuildManager, Snowflake} from "discord.js"
import {onEvent} from "@sidia/core"
import {DiscordService} from "./DiscordService"

export class DiscordGuildService extends Service {
    @injectService
    protected discordEventService!: DiscordEventService

    @injectService
    protected discordService!: DiscordService

    private integrityCache: Snowflake[] = []

    constructor() {
        super()
    }

    public init = async (): Promise<void> => {
        this.discordEventService.subscribe(Events.GuildCreate, this.onGuildJoin)
        DiscordService.onClientReady.addListener(this.startupIntegrityCheck.bind(this))
    }

    public onGuildJoin = async (guild: Guild): Promise<void> => {

    }

    public async startupIntegrityCheck(guilds: GuildManager): Promise<void> {
        console.log(this)
        for (let cacheElement of guilds.cache) {
            await this.integrityCheck(...cacheElement)
        }
    }

    public async integrityCheck(id: Snowflake, guild: Guild): Promise<void> {
        if (this.integrityCache.includes(id)) return

        this.integrityCache.push(id)
    }
}
