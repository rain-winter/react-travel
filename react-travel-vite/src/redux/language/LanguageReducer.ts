// 导入i8n
import i18next from "i18next";
import {
    CHANGE_LANGUAGE,
    ADD_LANGUAGE,
    LanguageActionTypes,
} from './LanguageAction'

// 参数类型
export interface LanguageState {
    language: 'en' | 'zh'
    languageList: { name: string; code: string }[]
}

// 设计store
const defaultState: LanguageState = {
    language: 'zh',
    languageList: [
        {
            name: '中文',
            code: 'zh',
        },
        {
            name: 'English',
            code: 'en',
        },
    ],
}

export const languageReducer =async (state = defaultState,action:LanguageActionTypes) => {
    switch (action.type){
        case CHANGE_LANGUAGE:
            await i18next.changeLanguage(action.payload)
            return {...state,language:action.payload}
        case ADD_LANGUAGE:
            return {
                ...state,
                languageList: [...state.languageList, action.payload],
            }
        default:
            return state
    }
}