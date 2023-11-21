import {DiscordCommandController} from "../src"
import {
    ErrorMockCommand,
    MOCK_COMMAND_NAME, MOCK_COMMAND_SUBGROUPNAME, MOCK_COMMAND_SUBNAME,
    MockCommand,
    MockCommand2
} from "./command/MockCommand"
import {ConsoleLogger, LogBroadcaster, LoggingContext} from "@sidia/logging"
import {addContextData, createContext} from "@sidia/core"

describe("Command controller", () => {
    it("should add a command", () => {
        const mockCommand = new MockCommand()
        DiscordCommandController.addCommand(mockCommand)

        expect(DiscordCommandController.getAllCommands().length).toBeGreaterThan(0)
    })

    it("should add a command without sub commands or groups", () => {
        const mockCommand = new MockCommand2()
        DiscordCommandController.addCommand(mockCommand)

        expect(DiscordCommandController.getAllCommands().length).toBeGreaterThan(0)
    })


    it("should throw and error on invalid command creation", async () => {
        const broadcaster = new LogBroadcaster()
        await broadcaster.addLogger(ConsoleLogger)
        createContext(new LoggingContext())
        addContextData(LoggingContext, {
            logger: broadcaster
        })
        const spy = jest.spyOn(broadcaster, "log")

        const mockCommand = new ErrorMockCommand()
        DiscordCommandController.addCommand(mockCommand)

        expect(spy).toHaveBeenCalledTimes(1)
    })

    it("should find the right command by predicate", () => {
        const mockCommand = new MockCommand()
        DiscordCommandController.addCommand(mockCommand)

        const foundCommand = DiscordCommandController.getByPredicate(e => e.command == MOCK_COMMAND_NAME)
        expect(foundCommand?.instance).toBe(mockCommand)
    })

    it("should not find the right command by wrong predicate", () => {
        const mockCommand = new MockCommand()
        DiscordCommandController.addCommand(mockCommand)

        const foundCommand = DiscordCommandController.getByPredicate(e => e.command == "mock-nonexist")
        expect(foundCommand).toBe(null)
    })

    it("should find the right command by explicit values", () => {
        const mockCommand = new MockCommand()
        DiscordCommandController.addCommand(mockCommand)

        const foundCommand = DiscordCommandController.getCommand(MOCK_COMMAND_NAME, MOCK_COMMAND_SUBNAME, MOCK_COMMAND_SUBGROUPNAME)
        expect(foundCommand?.instance).toBe(mockCommand)
    })
})
