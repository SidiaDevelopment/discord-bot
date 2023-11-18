import {Context} from "../../src/context/Context"
import {MockContextData} from "./MockContextData"

export interface IMockContextData {
    mockData: MockContextData
}

export class MockContext extends Context<IMockContextData> {

}
