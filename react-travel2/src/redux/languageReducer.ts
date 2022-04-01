export interface LanguageState {
  language: 'en' | 'zh'
  languageList: { name: string; code: string }[]
}

// 设计state
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

export default (state = defaultState, action: any) => {
  // 使用 switch
  switch (action.type) {
    case 'change_language':
      return { ...state, language: action.payload }
    case 'add_language':
      return {
        ...state,
        languageList: [...state.languageList, action.payload],
      }
    default:
      return state
  }

  // if (action.type === 'change_language') {
  //   const newState = { ...state, language: action.payload }
  //   return newState
  // }

  // if (action.type === 'add_language') {
  //   const newState = {
  //     ...state,
  //     languageList: [...state.languageList, action.payload],
  //   }
  //   return newState
  // }
  // return state
}
