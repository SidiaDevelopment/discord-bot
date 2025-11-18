import {TUnknownContext} from "./Context"
import {Ctor} from "../utils/Ctor"

export class Contexts {
    protected static contexts: Record<string, TUnknownContext> = {}

    public static register(context: TUnknownContext): void {
        const id = context.constructor.name
        Contexts.contexts[id] = context
    }

    public static get<T extends TUnknownContext>(ctor: Ctor<T>): T["data"] {
        return Contexts.contexts[ctor.name].getData() as T["data"]
    }

    public static getContext<T extends TUnknownContext>(ctor: Ctor<T>): T {
        return Contexts.contexts[ctor.name] as T
    }

    public static addValues<T extends TUnknownContext>(ctor: Ctor<T>, data: Partial<T["data"]>): void {
        const name = ctor.name

        if (!Contexts.contexts.hasOwnProperty(name))
            throw new RangeError("No context of this type registered")

        Contexts.contexts[name].addData(data)
    }
}
