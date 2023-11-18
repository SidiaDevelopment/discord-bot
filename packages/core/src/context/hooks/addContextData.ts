import {TUnknownContext} from "../Context"
import {Contexts} from "../Contexts"
import {Ctor} from "../../utils/Ctor"

export const addContextData = <T extends TUnknownContext>(ctor: Ctor<T>, data: T["data"]) => Contexts.addValues(ctor, data)
