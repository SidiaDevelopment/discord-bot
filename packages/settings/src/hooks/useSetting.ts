import {ControllerContext, useContext} from "@sidia/core"

const useSetting = (name: string) => {
    const {settingsController} = useContext(ControllerContext)
    settingsController.get(name)
}
