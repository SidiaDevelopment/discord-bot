import "@sidia/discord"
import {Core} from "../src"
import {LogLevel} from "@sidia/logging"

describe("Core", () => {
    it("should create the core", () => {
        const spy = jest.fn()
        Core.onStart.addListener(spy)
        const core = new Core()
        core.create({
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
        core.start();

        expect(spy).toHaveBeenCalledTimes(1)
    })
})
