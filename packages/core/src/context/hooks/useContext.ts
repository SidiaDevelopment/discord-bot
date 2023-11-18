import {TUnknownContext} from "../Context"
import {Ctor} from "../../utils/Ctor"
import {Contexts} from "../Contexts"

export const useContext = <T extends TUnknownContext>(ctor: Ctor<T>): T["data"] => Contexts.get(ctor)
