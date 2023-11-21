import {Config, defaultConfig} from "../../src"
import {PartialRecursive} from "@sidia/core"

export interface IMockConfigData {
    mock: {
        testString: string,
        testNumber: number,
    }
}

@defaultConfig
export class MockConfig extends Config<IMockConfigData> {
    data: PartialRecursive<IMockConfigData> = {
        mock: {
            testNumber: 5,
            testString: "sidia"
        }
    }
}

declare module "@sidia/core/types" {
    export interface IConfigContext extends IMockConfigData {}
}
