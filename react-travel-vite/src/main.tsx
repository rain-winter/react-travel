import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "antd/dist/antd.css"; // antd
import './i18n/config.ts' // i18n配置文件
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
)
