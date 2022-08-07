import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface userState {
  loading: boolean
  error: String | null
  token: string | null
}

const initialState: userState = {
  loading: false,
  error: null,
  token: null,
}

export const signIn = createAsyncThunk(
  'user/signIn',
  async (
    paramaters: {
      email: string
      password: string
    },
    thunkAPI
  ) => {
    // thunkAPI.dispatch() 写法也可以
    const { data } = await axios.post(
      `https://www.fastmock.site/mock/4ea3c838db55570bb2cd810bff0f92a8/api/auth/login`,
      {
        email: paramaters.email,
        password: paramaters.password,
      }
    )
    return data.token
  }
)

// reducer纯函数

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // fetchstart
    [signIn.pending.type]: state => {
      //  原来写法： return { ...state, loading: true }
      state.loading = true
    },
    // fetchsuccess
    [signIn.fulfilled.type]: (state, action) => {
      state.token = action.payload
      state.loading = false
      state.error = null
    },
    // fetchfail
    [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
      const add = action.payload
      state.loading = false
      state.error = action.payload
    },
  },
})
