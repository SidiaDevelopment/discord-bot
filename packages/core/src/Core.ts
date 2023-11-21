import {ModuleController} from "./module/ModuleController"
import {CallbackEvent} from "./event/CallbackEvent"
import {ICoreCreateOptions} from "@sidia/core/types"
import {useContext} from "./context/hooks/useContext"
import {ControllerContext} from "./contexts/ControllerContext"

export class Core {
    public static onStart: CallbackEvent<void> = new CallbackEvent<void>()
    public static onCreate: CallbackEvent<ICoreCreateOptions> = new CallbackEvent<ICoreCreateOptions>()

    public async create(options: ICoreCreateOptions): Promise<void> {
        const {moduleController} = useContext(ControllerContext)

        await Core.onCreate.emit(options)
        await moduleController.loadModules(options.modules)
    }

    public async start() {
        await Core.onStart.emit()
    }
}
