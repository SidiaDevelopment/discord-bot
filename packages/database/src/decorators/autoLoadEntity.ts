import {IDiscordCommand} from "../IDiscordCommand"
import {DiscordCommand} from "../DiscordCommand"
import {Ctor} from "@sidia/core"
import {IDiscordCommandData} from "../IDiscordCommandData"
import {DiscordCommandController} from "../DiscordCommandController"

export const command = <T extends IDiscordCommandData>(data: IDiscordCommand<T>) => {
    return (ctor: Ctor<DiscordCommand<T>>): void => {
        const instance = new ctor()
        instance.config = data
        DiscordCommandController.addCommand(instance)
    }
}
