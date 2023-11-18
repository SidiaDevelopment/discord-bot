import {Ctor, PartialRecursive} from "@sidia/core"

declare module "@sidia/core/types" {
    export interface IModule {
        configs?: Ctor<Config<Record<string, any>>> | Ctor<Config<Record<string, any>>>[]
    }
}

export abstract class Config<T extends Record<string, any>> {
    public abstract data: PartialRecursive<T>
}
