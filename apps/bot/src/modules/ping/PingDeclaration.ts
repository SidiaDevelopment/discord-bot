import en from "./localizations/en"
import {LocalizationFiles} from "@sidia/i18n"

declare module "@sidia/core/types" {
    type PingLocalizationType = typeof en;
    export interface ILocalization extends PingLocalizationType {}
}

export const PingLocalizations: LocalizationFiles = {
    en
}
