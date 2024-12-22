import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import eng from './locales/eng/translation.json'
import rus from './locales/rus/translation.json'
import qqr from './locales/qqr/translation.json'

i18next
    .use(initReactI18next)
    .init({
        resources: {
            english: {
                translation: eng
            },
            qaraqalpaq: {
                translation: qqr
            },
            russian: {
                translation: rus
            },

        },
        fallbackLng: 'english',
        interpolation: {
            escapeValue: false
        }
    })

export default i18next