import en from "./localizations/en"
import {LocalizationFiles} from "@sidia/i18n"

declare module "@sidia/core/types" {
    type CommandsLocalizationType = typeof en;
    export interface ILocalization extends CommandsLocalizationType {}
}

export const DiscordCommandLocalizations: LocalizationFiles = {
    en
}
