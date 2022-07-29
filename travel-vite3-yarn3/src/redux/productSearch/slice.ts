import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// 定义类型
interface ProductSearchState {
  loading: boolean
  error: String | null
  data: any
  pagination: any
}

// 初始化数据
const initialState: ProductSearchState = {
  loading: true,
  error: null,
  data: null,
  pagination: null,
}

export const searchProduct = createAsyncThunk(
  'productSearch/searchProduct',
  async (
    paramaters: {
      keywords: string | undefined
      nextPage: number | string
      pageSize: number | string
    },
    thunkAPI
  ) => {
    let url = `https://www.fastmock.site/mock/4ea3c838db55570bb2cd810bff0f92a8/api/searchRoutes?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`
    // let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`
    if (paramaters.keywords) {
      url += `&keyword=${paramaters.keywords}`
    }
    const response = await axios.get(url)
    return {
      // 供下方 [searchProduct.fulfilled.type] 使用
      data: response.data,
      pagination: 10,
    }
  }
)

// reducer纯函数

export const productSearchSlice = createSlice({
  name: 'productSearch',
  initialState,
  reducers: {},
  extraReducers: {
    // fetchstart
    [searchProduct.pending.type]: state => {
      //  原来写法： return { ...state, loading: true }
      state.loading = true
    },
    // fetchsuccess
    [searchProduct.fulfilled.type]: (state, action) => {
      state.data = action.payload
      state.pagination = action.payload.pagination
      state.loading = false
      state.error = null
    },
    // fetchfail
    [searchProduct.rejected.type]: (state, action: PayloadAction<string | null>) => {
      //   const add = action.payload
      state.loading = false
      state.error = action.payload
    },
  },
})
