import {
    ChatInputCommandInteraction,
    Client, Collection,
    CommandInteraction,
    Guild, IntentsBitField, TextBasedChannel, TextChannel,
    User
} from "discord.js"

export class MockDiscord {
    private client!: Client
    private user!: User
    private guild!: Guild
    private channel!: TextBasedChannel
    public interaction!: CommandInteraction
    public chatInputCommandInteraction!: ChatInputCommandInteraction

    constructor() {
        this.mockClient()
        this.mockUser()
        this.mockChannel()
        this.mockGuild()
        this.mockUser()
        this.mockInteraction()
        this.mockCommandInteraction()
    }

    public getInteraction(): CommandInteraction {
        return this.interaction
    }

    public getChatInputCommandInteraction(): ChatInputCommandInteraction {
        return this.chatInputCommandInteraction
    }

    public getUser(): User {
        return this.user
    }

    private mockClient(): void {
        this.client = new Client({intents: [], rest: {handlerSweepInterval: 0, hashSweepInterval: 0}})
        this.client.login = jest.fn(() => Promise.resolve("LOGIN_TOKEN"))
        this.client.options = {
            makeCache: jest.fn<Collection<string, any>, [], any>(() => new Collection<string, any>),
            intents: new IntentsBitField()
        }
    }

    private mockUser(): void {
        this.user = Reflect.construct(User, [
                this.client, {
                    id: "user-id",
                    username: "USERNAME",
                    discriminator: "user#0000",
                    avatar: "user avatar url",
                    bot: false,
                }
            ]
        )
    }

    private mockGuild(): void {
        this.guild = Reflect.construct(Guild, [
                this.client, {
                    id: "user-id",
                }
            ]
        )
    }

    private mockChannel(): void {
        this.channel = Reflect.construct(TextChannel, [
                this.guild,
                {
                    id: "user-id",
                },
                this.client
            ]
        )
    }

    private mockInteraction(): void {
        this.interaction = Reflect.construct(CommandInteraction, [
                this.client,
                {
                    data: {id: "1"},
                    id: BigInt(1),
                    user: this.user,
                }
            ]
        )
        this.interaction.reply = jest.fn()
        this.interaction.isCommand = jest.fn(() => true)
    }

    private mockCommandInteraction(): void {
        this.chatInputCommandInteraction = Reflect.construct(ChatInputCommandInteraction, [
                this.client,
                {
                    data: {id: "1"},
                    id: BigInt(1),
                    user: this.user,
                }
            ]
        )
        this.chatInputCommandInteraction.reply = jest.fn()
        this.chatInputCommandInteraction.isCommand = jest.fn(() => true)
        this.chatInputCommandInteraction.isChatInputCommand = jest.fn(() => true)
        jest.spyOn(this.chatInputCommandInteraction, "guild", "get").mockReturnValue(this.guild)
        jest.spyOn(this.chatInputCommandInteraction, "channel", "get").mockReturnValue(this.channel)
    }
}
