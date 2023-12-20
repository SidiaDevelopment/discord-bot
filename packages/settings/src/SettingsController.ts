import {addContextData, ControllerContext, ModuleController, onEvent} from "@sidia/core"
import {ISetting} from "./ISetting"
import {IModule} from "@sidia/core/types"

declare module "@sidia/core/types" {
    interface IControllerContext {
        settingsController: SettingsController
    }
}

export class SettingsController {
    public static Instance: SettingsController
    private settings: Record<string, ISetting> = {}

    constructor() {
        SettingsController.Instance = this
    }

    public get(name: string): string | null {
        if (!Object.prototype.hasOwnProperty.call(this.settings, name))
            return null

        return this.settings[name].value
    }

    @onEvent(ModuleController.onLoad)
    public async onModuleLoad(module: IModule): Promise<void> {
        const ctrl = SettingsController.Instance
        ctrl.settings = {...ctrl.settings, ...module.settings}
    }
}

addContextData(ControllerContext, {
    settingsController: new SettingsController()
})
