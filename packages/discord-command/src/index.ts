import "@sidia/core"
import "@sidia/service"

// Module
import "./modules/discord-command/configs/DiscordCommandConfig"
export * from "./modules/discord-command/DiscordCommandModule"
export * from "./modules/discord-command/services/DiscordCommandService"
export * from "./modules/discord-command/services/DiscordUpdateCommandsService"

export * from "./discord-command/DiscordCommand"
export * from "./discord-command/DiscordCommandController"
export * from "./discord-command/IDiscordCommandOption"
export * from "./discord-command/IDiscordCommandData"
export * from "./discord-command/IDiscordCommandConfig"
export * from "./discord-command/IDiscordCommandControllerData"
