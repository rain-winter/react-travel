export const CHANGE_LANGUAGE = 'change_language'
export const ADD_LANGUAGE = 'add_language'

interface ChangeLanguageAction {
    type: typeof CHANGE_LANGUAGE
    payload: 'zh' | 'en'
}

interface AddLanguageAction {
    type: typeof ADD_LANGUAGE
    payload: { name: string; code: string }
}

export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction

// 更改语言
export const changeLanguageActionCreator = (
    languageCode: 'zh' | 'en'
): LanguageActionTypes => {
    return {
        type: CHANGE_LANGUAGE,
        payload: languageCode
    }
}

// 添加语言
export const addLanguageActionCreator = (
    name: string,
    code: string
): LanguageActionTypes => {
    return {
        type: ADD_LANGUAGE,
        payload: {name, code}
    }
}