import {MockContext} from "./contexts/MockContext"
import {Contexts} from "../src/context/Contexts"
import {MOCK_CONTEXT_NUMBER, MockContextData} from "./contexts/MockContextData"
import {createContext} from "../src/context/hooks/createContext"
import {addContextData} from "../src/context/hooks/addContextData"
import {useContext} from "../src/context/hooks/useContext"

describe("Context", () => {
    let context: MockContext

    it("should call create hook", () => {
        const spy = jest.spyOn(Contexts, "register")
        createContext(new MockContext())

        expect(spy).toHaveBeenCalledTimes(1)

        context = Contexts.getContext(MockContext)
    })

    it("should call addContextData hook", () => {
        const spy = jest.spyOn(context, "addData")
        const data = {mockData: new MockContextData()}
        addContextData(MockContext, data)

        expect(spy).toHaveBeenCalledWith(data)
        expect(spy).toHaveBeenCalledTimes(1)
    })

    it("should return the correct hook data", () => {
        const spy = jest.spyOn(context, "getData")
        const {mockData} = useContext(MockContext)

        expect(spy).toHaveBeenCalledTimes(1)
        expect(mockData.numberData).toBe(MOCK_CONTEXT_NUMBER)
        expect(mockData.getNumberData()).toBe(MOCK_CONTEXT_NUMBER)
    })
})
