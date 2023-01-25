import React from 'react'
import ReactDOM from 'react-dom/client'

// 初始化样式
import 'reset-css'

// 全局样式
import '@/assets/styles/global.scss'

import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
