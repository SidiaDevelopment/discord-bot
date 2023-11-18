import {TUnknownContext} from "./Context"
import {Ctor} from "../utils/Ctor"

/**
 * Create and save context data
 */
export class Contexts {
    protected static contexts: Record<string, TUnknownContext> = {}

    /**
     * Register new context
     * @param context Context instance
     */
    public static register(context: TUnknownContext): void {
        const id = context.constructor.name
        Contexts.contexts[id] = context
    }

    /**
     * Get all data from context
     * @param ctor Context constructor
     * @return data of given context
     */
    public static get<T extends TUnknownContext>(ctor: Ctor<T>): T["data"] {
        return Contexts.contexts[ctor.name].getData() as T["data"]
    }

    /**
     * Get single context
     * @param ctor
     * @return Context
     */
    public static getContext<T extends TUnknownContext>(ctor: Ctor<T>): T {
        return Contexts.contexts[ctor.name] as T
    }

    /**
     * Add new values in a given context
     * @param ctor Constructor of the context to add the data to
     * @param data Data that should be added
     * @throws RangeError
     */
    public static addValues<T extends TUnknownContext>(ctor: Ctor<T>, data: Partial<T["data"]>): void {
        const name = ctor.name

        if (!Contexts.contexts.hasOwnProperty(name))
            throw new RangeError("No context of this type registered")

        Contexts.contexts[name].addData(data)
    }
}
