export interface IDiscordCommandConfig {
    discordCommands?: {
        updateCommandsOnStart: boolean
    }
}

declare module "@sidia/core/types" {
    export interface IConfig extends IDiscordCommandConfig {}
}
