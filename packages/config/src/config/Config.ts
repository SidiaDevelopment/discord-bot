import {PartialRecursive} from "@sidia/core"

export abstract class Config<T extends Record<string, any>> {
    public abstract data: PartialRecursive<T>
}
