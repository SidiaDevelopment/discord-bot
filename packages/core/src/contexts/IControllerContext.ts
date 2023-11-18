import {ModuleController} from "../module/ModuleController"

declare module "@sidia/core/types" {
    export interface IControllerContext {
        moduleController: ModuleController
    }
}
