import {MockCommand, ParameterMockCommand} from "./command/MockCommand"
import {MockDiscord} from "./discord/MockDiscord"
import {UpdateCommandsCommand} from "../src/modules/discord-command/commands/discord/UpdateCommandsCommand"

describe("Command", () => {
    const discord = new MockDiscord();

    it("should execute correctly", () => {
        const command = new MockCommand()
        const spy = jest.spyOn(command, "handle")
        command.execute(discord.getChatInputCommandInteraction())
        expect(spy).toHaveBeenCalledTimes(1)
    })

    it("should execute correctly with parameters", () => {
        const command = new ParameterMockCommand()
        const spy = jest.spyOn(command, "handle")
        command.execute(discord.getChatInputCommandInteraction())
        expect(spy).toHaveBeenCalledTimes(1)
    })

    it("should execute correctly with parameters", () => {
        const command = new UpdateCommandsCommand()
        const interaction = discord.getChatInputCommandInteraction()
        const user = discord.getUser()
        command.handle({interaction, text: "asdf", user})
        expect(interaction.reply).toHaveBeenCalledTimes(1)
    })
})
