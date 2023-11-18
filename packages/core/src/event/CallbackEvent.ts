export type EventListener<T> = (data: T) => Promise<void>

/**
 * Create listeners for an event and emit data to them
 */
export class CallbackEvent<T> {
    protected listeners: EventListener<T>[] = []

    /**
     * Emit data to all listeners
     * @param data Emitted data
     */
    public async emit(data: T): Promise<void> {
        for (const listener of this.listeners) {
            await listener(data)
        }
    }

    /**
     * Add new listener for current event
     * @param listener
     */
    public addListener(listener: EventListener<T>): void {
        this.listeners.push(listener)
    }
}
