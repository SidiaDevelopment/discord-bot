import {CallbackEvent} from "../src/event/CallbackEvent"
import {EventMock} from "./event/EventMock"

const eventReturnNumber = 5

describe("Events", () => {
    const event: CallbackEvent<number> = new CallbackEvent<number>()
    const listener = jest.fn()

    it("should call the listener", () => {
        event.addListener(listener)
        event.emit(eventReturnNumber)

        expect(listener).toHaveBeenCalledWith(eventReturnNumber)
    })

    it("should register a listener on decorator", () => {
        const spy = jest.spyOn(EventMock, "spyOnMe")
        const eventMock = new EventMock()
        EventMock.onMockEvent.emit()

        expect(spy).toHaveBeenCalledTimes(1)
    })
})
