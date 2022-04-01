import { createStore } from 'redux'

import languageReducer from './languageReducer'

const store = createStore(languageReducer) // 创建store

export default store
