import deepmerge from "deepmerge"
import {ICoreCreateOptions, ILocalization, IModule} from "@sidia/core/types"
import {
    addContextData,
    ControllerContext,
    Core,
    ModuleController,
    onEvent,
    PartialRecursive,
    useContext
} from "@sidia/core"
import {Leaves} from "./utils/Leaves"
import {LoggingContext, LogLevel} from "@sidia/logging"

export type LocalizationFile = any
export type LocalizationFiles = Record<string, LocalizationFile>
export type Localization = Leaves<ILocalization>
export type LocalizationOverride = PartialRecursive<ILocalization>;

declare module "@sidia/core/types" {
    export interface IControllerContext {
        localizationController: LocalizationController
    }

    interface IModule {
        localizations?: LocalizationFiles
    }

    export interface ICoreCreateOptions {
        translations?: Record<string, LocalizationOverride>;
    }
}

export class LocalizationController {
    private static Instance: LocalizationController
    private localizations: Record<string, ILocalization> = {}

    private mapping: Record<string, string> = {
        "en-US": "en",
        "en-GB": "en",
        "pt-BR": "pt",
        "zh-CN": "cn",
        "zh-TW": "tw",
        "es-ES": "es",
        "sv-SE": "se"
    }

    constructor() {
        LocalizationController.Instance = this
    }

    public load = (files: LocalizationFiles): void => {
        for (let filesKey in files) {
            if (!Object.prototype.hasOwnProperty.call(this.localizations, filesKey))
                this.localizations[filesKey] = {};

            const file = files[filesKey];
            this.localizations[filesKey] = deepmerge(this.localizations[filesKey], file);
        }
    }

    public get(language: string, path: Localization): string {
        if (Object.prototype.hasOwnProperty.call(this.mapping, language)) {
            language = this.mapping[language]
        }

        if (!Object.prototype.hasOwnProperty.call(this.localizations, language))
            return path;

        const translations = this.localizations[language];
        const pathName = path as string;
        const splitPath = pathName.split(".");

        let current: any = translations;
        for (let pathPart of splitPath) {
            if (!Object.prototype.hasOwnProperty.call(current, pathPart)) {
                // Translation does not exist in current language
                const {logger} = useContext(LoggingContext);

                if (language == "en") {
                    logger.log("@sidia/i18n", LogLevel.Error, `Missing english translation: ${pathName}`);
                    return "";
                }
                logger.log("@sidia/i18n", LogLevel.Warning, `Missing "${language}" translation: ${pathName}, returning english translation`);

                return this.get("en", path);
            }
            current = current[pathPart];
        }

        return current;
    }

    @onEvent(ModuleController.onLoad)
    public async onLoadModule(module: IModule): Promise<void> {
        if (!module.localizations) return
        LocalizationController.Instance.load(module.localizations)
    }

    @onEvent(Core.onCreate)
    public async onCreateCore({translations}: ICoreCreateOptions): Promise<void> {
        if (!translations) return

        LocalizationController.Instance.load(translations)
    }
}

addContextData(ControllerContext, {
    localizationController: new LocalizationController()
})
