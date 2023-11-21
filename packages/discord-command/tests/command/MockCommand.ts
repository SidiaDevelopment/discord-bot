import {DiscordCommand, IDiscordCommandConfig, IDiscordCommandData} from "../../src"
import {ApplicationCommandOptionType} from "discord-api-types/v10"

export const MOCK_COMMAND_NAME = "mock"
export const MOCK_COMMAND_SUBNAME = "test"
export const MOCK_COMMAND_SUBGROUPNAME = "command"

interface IParameterMockCommandData extends IDiscordCommandData {
    test: string
}

const parameterCommandConfig: IDiscordCommandConfig<IParameterMockCommandData> = {
    command: MOCK_COMMAND_NAME,
    subCommand: MOCK_COMMAND_SUBNAME,
    subCommandGroup: MOCK_COMMAND_SUBGROUPNAME,
    description: "Test commands",
    options: [
        {
            name: "test",
            type: ApplicationCommandOptionType.String,
            description: "Text"
        },
        {
            name: "test",
            type: ApplicationCommandOptionType.Integer,
            description: "Text"
        },
        {
            name: "test",
            type: ApplicationCommandOptionType.Boolean,
            description: "Text"
        },
        {
            name: "test",
            type: ApplicationCommandOptionType.User,
            description: "Text"
        },
        {
            name: "test",
            type: ApplicationCommandOptionType.Channel,
            description: "Text"
        },
        {
            name: "test",
            type: ApplicationCommandOptionType.Role,
            description: "Text"
        },
        {
            name: "test",
            type: ApplicationCommandOptionType.Mentionable,
            description: "Text"
        },
        {
            name: "test",
            type: ApplicationCommandOptionType.Number,
            description: "Text"
        },
    ]
}

export class ParameterMockCommand extends DiscordCommand<IParameterMockCommandData> {
    config = parameterCommandConfig
    public handle = async (data: IParameterMockCommandData): Promise<void> => {
    }
}

interface IMockCommandData extends IDiscordCommandData {
}

const commandConfig: IDiscordCommandConfig<IMockCommandData> = {
    command: MOCK_COMMAND_NAME,
    subCommand: MOCK_COMMAND_SUBNAME,
    subCommandGroup: MOCK_COMMAND_SUBGROUPNAME,
    description: "Test commands",
}

export class MockCommand extends DiscordCommand<IMockCommandData> {
    config = commandConfig
    public handle = async (data: IMockCommandData): Promise<void> => {
    }
}


const commandConfig2: IDiscordCommandConfig<IMockCommandData> = {
    command: MOCK_COMMAND_NAME,
    description: "Test commands",
}

export class MockCommand2 extends DiscordCommand<IMockCommandData> {
    config = commandConfig2
    public handle = async (data: IMockCommandData): Promise<void> => {
    }
}

export class ErrorMockCommand extends DiscordCommand<IMockCommandData> {
    public handle = async (data: IMockCommandData): Promise<void> => {
    }
}
