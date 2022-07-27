import { createSlice } from '@reduxjs/toolkit'
import i18next from "i18next";

// Define a type for the slice state
interface languageState {
    language: 'en' | 'zh'
    languageList: { name: string; code: string }[]
}

// Define the initial state using that type
const initialState: languageState = {
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

export const languageSlice = createSlice({
    name: 'language',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      changeLanguage:(state,action)=>{
          i18next.changeLanguage(action.payload)
      }
    },
})

export const { changeLanguage } = languageSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default languageSlice.reducer




