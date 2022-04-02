import { createStore } from 'redux'

import languageReducer from './language/languageReducer'

const store = createStore(languageReducer) // 创建store

export default store
