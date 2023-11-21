import deepmerge from "deepmerge"
import {Context, Core, createContext, addContextData, onEvent} from "@sidia/core"
import {IConfigContext, ICoreCreateOptions} from "@sidia/core/types"

export class ConfigContext extends Context<IConfigContext> {
    public addData(data: Partial<IConfigContext>): void {
        this.data = deepmerge(this.data, data)
    }

    @onEvent(Core.onCreate)
    public async addContextData(options: ICoreCreateOptions): Promise<void> {
        addContextData(ConfigContext, options.config)
    }
}

createContext(new ConfigContext())
