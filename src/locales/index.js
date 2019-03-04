import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { merge } from 'lodash'

// elementui locale
import ElementLocale from 'element-ui/lib/locale'
import eleZhCN from 'element-ui/lib/locale/lang/zh-CN'
import eleEn from 'element-ui/lib/locale/lang/en'

// default locale
import zhCN from './zh-CN'
import en from './en'

//TODO: get Lang from config
const Lang = 'zh-CN'
const defaultLang = 'en'

let i18nOptions = {
  messages: {
    'zh-CN': merge(zhCN, eleZhCN),
    en: merge(en, eleEn)
  }
}

Vue.use(VueI18n)

i18nOptions.silentTranslationWarn = true
i18nOptions.locale = Lang || defaultLang
const i18n = new VueI18n(i18nOptions)
i18n.fallbackLocale = defaultLang

// element sync
ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n