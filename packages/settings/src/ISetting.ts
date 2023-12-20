import {Localization} from "@sidia/i18n"

export interface ISetting {
    value: string
    description: Localization
    choices?: [string, string][]
    onNewValue?: (value: string) => Promise<void>
    onlyGlobal?: true
    printable?: false
    check: (value: string) => Promise<void>
    defaultStrategy?: () => string
}

declare module "@sidia/core/types" {
    interface IModule {
        settings: Record<string, ISetting>
    }
}
