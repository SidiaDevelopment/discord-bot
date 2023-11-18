import {IControllerContext} from "@sidia/core/types"
import {Context} from "../context/Context"
import {createContext} from "../context/hooks/createContext"

export class ControllerContext extends Context<IControllerContext> {

}

createContext(new ControllerContext())
