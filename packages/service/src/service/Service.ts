import {Ctor} from "@sidia/core"

declare module "@sidia/core/types" {
    interface IModule {
        services?: Ctor<Service>[]
    }
}

export abstract class Service {
    public abstract init(): Promise<void>
}
