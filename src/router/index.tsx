import React, { lazy } from 'react'

import Home from '@/views/Home'

// 通过navigate重定向组件
import { Navigate } from 'react-router-dom'

// 设置路由懒加载
const About = lazy(() => import("@/views/About"))

// 抽取suspense组件函数，避免懒加载报错
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>loading...</div>}>
        {comp}
    </React.Suspense>
)
const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: withLoadingComponent(<About />)
    }
]

export default routes