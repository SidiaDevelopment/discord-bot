import {DiscordCommandModule} from "../src"

describe("Discord Command Module", () => {
    it("should create a valid discord module", () => {
        const module = new DiscordCommandModule()

        expect(module).toBeInstanceOf(DiscordCommandModule)
    })
})
