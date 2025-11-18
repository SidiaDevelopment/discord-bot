export type EventListener<T> = (data: T) => Promise<void>

export class CallbackEvent<T> {
    protected listeners: EventListener<T>[] = []

    public async emit(data: T): Promise<void> {
        for (const listener of this.listeners) {
            await listener(data)
        }
    }

    public addListener(listener: EventListener<T>): void {
        this.listeners.push(listener)
    }
}
