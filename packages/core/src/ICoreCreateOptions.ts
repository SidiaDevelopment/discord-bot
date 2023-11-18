import {Ctor} from "./utils/Ctor"

declare module "@sidia/core/types" {
    export interface ICoreCreateOptions {
        modules: Ctor<IModule>[]
    }
}
