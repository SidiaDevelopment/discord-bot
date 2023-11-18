import {IModule} from "@sidia/core/types"
import {Core, Ctor, ModuleController, onEvent} from "@sidia/core"
import {Service} from "./Service"

export class ServiceController {
    private static serviceInstances: Record<string, Service> = {}

    @onEvent(ModuleController.onLoad)
    public static async onLoadModule(module: IModule): Promise<void> {
        if (!module.services) return

        for (const servicesCtor of module.services) {
            ServiceController.serviceInstances[servicesCtor.name] = new servicesCtor()
        }
    }

    @onEvent(Core.onStart)
    public static async init(): Promise<void> {
        for (const serviceInstancesKey in ServiceController.serviceInstances) {
            const service = ServiceController.serviceInstances[serviceInstancesKey]

            await service.init()
        }
    }

    public static get<T extends Service>(ctor: Ctor<Service>): T | null {
        if (!ServiceController.serviceInstances.hasOwnProperty(ctor.name)) return null

        return ServiceController.serviceInstances[ctor.name] as T
    }
}
