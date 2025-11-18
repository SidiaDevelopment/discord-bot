import {ICoreCreateOptions, IModule} from "@sidia/core/types"
import {CallbackEvent} from "../event/CallbackEvent"
import {Ctor} from "../utils/Ctor"
import {addContextData} from "../context/hooks/addContextData"
import {ControllerContext} from "../contexts/ControllerContext"
import {onEvent} from "../event/decorator/onEvent"
import {Core} from "../Core"

export class ModuleController {
    public static onLoad: CallbackEvent<IModule> = new CallbackEvent<IModule>()

    private moduleInstances: IModule[] = []

    public loadModules = async (moduleCtors: Ctor<IModule>[]): Promise<void> => {
        moduleCtors.forEach(this.loadModule)
    }

    private loadModule = async (moduleCtor: Ctor<IModule>): Promise<void> => {
        const instance = new moduleCtor()

        await ModuleController.onLoad.emit(instance)
        this.moduleInstances.push(instance)
    }
}

addContextData(ControllerContext, {
    moduleController: new ModuleController()
})
