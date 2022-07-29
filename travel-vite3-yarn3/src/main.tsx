import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'antd/dist/antd.css' // antd
import './i18n/config.ts' // i18n配置文件
import { store } from './redux/store' // redux 全局状态
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
