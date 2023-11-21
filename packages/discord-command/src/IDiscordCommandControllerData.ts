import {DiscordCommand} from "./DiscordCommand"

export interface IDiscordCommandControllerData {
    command: string;
    subCommandGroup: string | null;
    subCommand: string | null;
    instance: DiscordCommand<any>;
}
