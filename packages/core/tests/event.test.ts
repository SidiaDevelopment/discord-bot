import {CallbackEvent} from "../src/event/CallbackEvent"

const eventReturnNumber = 5

describe("Events", () => {
    const event: CallbackEvent<number> = new CallbackEvent<number>()
    const listener = jest.fn()

    it("should call the listener", () => {
        event.addListener(listener)
        event.emit(eventReturnNumber)

        expect(listener).toHaveBeenCalledWith(eventReturnNumber)
    })
})
