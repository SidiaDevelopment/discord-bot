import {ServiceController} from "../ServiceController"

export const injectService = (target: unknown, propertyKey: string): void => {
    const t = Reflect.getMetadata("design:type", target as object, propertyKey)
    const getter = () => {
        return ServiceController.get(t)
    }

    const setter = () => {
        return
    }
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    })
}
