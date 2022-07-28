import create from '@ant-design/icons/lib/components/IconFont'
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface ProductDetailState {
  loading: boolean
  error: String | null
  data: any
}

const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: null,
}

export const getProductDetail = createAsyncThunk(
  'productDetail/getProductDetail',
  async (touristRouteId: string, thunkAPI) => {
    const { data } = await axios.get(
      `https://www.fastmock.site/mock/4ea3c838db55570bb2cd810bff0f92a8/api/touristRoutes/${touristRouteId}`
    )
    return data
  }
)

// reducer纯函数

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {},
  extraReducers: {
    // fetchstart
    [getProductDetail.pending.type]: state => {
      //  原来写法： return { ...state, loading: true }
      state.loading = true
    },
    // fetchsuccess
    [getProductDetail.fulfilled.type]: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    // fetchfail
    [getProductDetail.rejected.type]: (state, action: PayloadAction<string | null>) => {
      const add = action.payload
      state.loading = false
      state.error = action.payload
    },
  },
})
