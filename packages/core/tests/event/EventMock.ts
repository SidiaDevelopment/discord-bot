import {CallbackEvent, onEvent} from "../../src"

export class EventMock {
    public static onMockEvent: CallbackEvent<void> = new CallbackEvent<void>()

    @onEvent(EventMock.onMockEvent)
    public async onMockEventListener(): Promise<void> {
        EventMock.spyOnMe()
    }

    public static spyOnMe(): void {

    }
}
