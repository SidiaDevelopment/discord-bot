import {IDiscordCommandConfig} from "../IDiscordCommandConfig"
import {DiscordCommand} from "../DiscordCommand"
import {Ctor} from "@sidia/core"
import {IDiscordCommandData} from "../IDiscordCommandData"
import {DiscordCommandController} from "../DiscordCommandController"

export const command = <T extends IDiscordCommandData>(data: IDiscordCommandConfig<T>) => {
    return (ctor: Ctor<DiscordCommand<T>>): void => {
        const instance = new ctor()
        instance.config = data
        DiscordCommandController.addCommand(instance)
    }
}
