import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// 处理redux
import LanguageSlice from './language/LanguageSlice'
import { productDetailSlice } from './productDetail/slice'

// combineReducers来自@reduxjs/toolkit，兼容性
const rootReducer = combineReducers({
  language: LanguageSlice,
  productDetail: productDetailSlice.reducer,
})
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
