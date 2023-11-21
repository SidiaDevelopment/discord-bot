import {CallbackEvent} from "../CallbackEvent"

export const onEvent = <T>(callbackEvent: CallbackEvent<T>) => {
    return (target: unknown, propertyKey: string, descriptor: TypedPropertyDescriptor<(data: T) => Promise<void>>) => {
        callbackEvent.addListener(descriptor.value!)
    }
}
