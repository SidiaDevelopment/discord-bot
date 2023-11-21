import {Localization} from "../LocalizationController"
import {ControllerContext, useContext} from "@sidia/core"

export const translate = (path: Localization, language: string = "en"): string => {
    const {localizationController} = useContext(ControllerContext);
    return localizationController.get(language, path);
}
