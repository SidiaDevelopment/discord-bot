import {ModuleController} from "../src/module/ModuleController"
import {MockModule} from "./modules/MockModule"

describe("Modules", () => {
    const controller = new ModuleController()

    it("should emit module data", () => {
        const mockListener = jest.fn()
        ModuleController.onLoad.addListener(mockListener)
        controller.loadModules([MockModule])

        expect(mockListener).toHaveBeenCalledTimes(1)
    })
})
