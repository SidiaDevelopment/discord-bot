import {MockContext} from "./contexts/MockContext"
import {Contexts} from "../src/context/Contexts"
import {MOCK_CONTEXT_NUMBER, MockContextData} from "./contexts/MockContextData"
import {MockFailureContext} from "./contexts/MockFailureContext"
import {createContext} from "../src/context/hooks/createContext"
import {addContextData} from "../src/context/hooks/addContextData"
import {useContext} from "../src/context/hooks/useContext"

describe("Context", () => {
    let context: MockContext
    it("should create context", () => {
        const spy = jest.spyOn(Contexts, "register")
        context = new MockContext()
        context.create()
        expect(spy).toHaveBeenCalledTimes(1)
    })

    it("should add data to context", () => {
        const spy = jest.spyOn(context, "addData")
        const data = {mockData: new MockContextData()}
        Contexts.addValues(MockContext, data)

        expect(spy).toHaveBeenCalledWith(data)
        expect(spy).toHaveBeenCalledTimes(1)
    })

    it("should fail adding data", () => {
        const errorWrapper = () => {
            Contexts.addValues(MockFailureContext, {})
        }
        expect(errorWrapper).toThrow(RangeError)
    })

    it("should return the correct data", () => {
        const spy = jest.spyOn(context, "getData")
        const {mockData} = Contexts.get<MockContext>(MockContext)

        expect(spy).toHaveBeenCalledTimes(1)
        expect(mockData.numberData).toBe(MOCK_CONTEXT_NUMBER)
        expect(mockData.getNumberData()).toBe(MOCK_CONTEXT_NUMBER)
    })

    afterAll(() => {
        jest.clearAllMocks()
    })
})
