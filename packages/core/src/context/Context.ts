import {Contexts} from "./Contexts"

export type TUnknownContext = Context<Record<string, any>>;

export abstract class Context<T extends Record<string, any>> {
    public data: T = {} as T

    public create() {
        Contexts.register(this)
    }

    public getData(): T {
        return this.data
    }

    public addData(data: Partial<T>): void {
        this.data = {...this.data, ...data}
    }
}
