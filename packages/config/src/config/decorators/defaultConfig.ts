import {addContextData, Ctor} from "@sidia/core"
import {IConfigContext} from "@sidia/core/types"
import {Config} from "../Config"
import {ConfigContext} from "../contexts/ConfigContext"

export const defaultConfig = <TConfig extends Record<string, unknown> = Partial<IConfigContext>>(constructor: Ctor<Config<TConfig>>) => {
    const config = new constructor()
    addContextData(ConfigContext, config.data)
}
