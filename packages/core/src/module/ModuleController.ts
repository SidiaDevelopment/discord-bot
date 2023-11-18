import {CallbackEvent} from "../event/CallbackEvent"
import {Ctor} from "../utils/Ctor"
import {IModule} from "@sidia/core/types"

/**
 * Control all modules
 */
export class ModuleController {
    /**
     * Emits module data on load
     */
    public static onLoad: CallbackEvent<IModule> = new CallbackEvent<IModule>()

    /**
     * Keep all module instances after load
     * @private
     */
    private moduleInstances: IModule[] = []

    /**
     * Load all modules given
     * @param moduleCtors
     */
    public loadModules = async (moduleCtors: Ctor<IModule>[]): Promise<void> => moduleCtors.forEach(this.loadModule)

    /**
     * Load single given module
     * @param moduleCtor
     */
    private loadModule = async (moduleCtor: Ctor<IModule>): Promise<void> => {
        const instance = new moduleCtor()

        await ModuleController.onLoad.emit(instance)
        this.moduleInstances.push(instance)
    }
}
