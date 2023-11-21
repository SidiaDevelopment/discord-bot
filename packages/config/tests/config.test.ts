import "@sidia/discord"
import {Context, Contexts, Core} from "@sidia/core"
import {ConfigContext} from "../src"
import {IMockConfigData, MockConfig} from "./config/MockConfig"
import {LogLevel} from "@sidia/logging"


describe("Configuration test", () => {
    it("Config Context should contain data", () => {
        const spy = jest.spyOn(Contexts, "addValues")
        const ctx = Contexts.getContext(ConfigContext)
        const mockConfig = new MockConfig()
        Core.onCreate.emit({
            modules: [],
            config: {
                projectName: "test",
                logging: {
                    logLevel: LogLevel.NeverLog
                },
                discord: {
                    key: ""
                }
            }
        })

        const data: IMockConfigData = ctx.data

        expect(data.mock.testString).toBe("sidia")
        expect(data.mock.testNumber).toBe(5)
        expect(spy).toHaveBeenCalledTimes(1)
    })
})
