import React, { lazy } from 'react'

import Home from '@/views/Home'

// 通过navigate重定向组件
import { Navigate } from 'react-router-dom'

// 设置路由懒加载
const Page1 = lazy(() => import("@/views/Page1"))
const Page2 = lazy(() => import("@/views/Page2"))
const Page301 = lazy(() => import("@/views/Page301"))
const Page302 = lazy(() => import("@/views/Page302"))
const Page303 = lazy(() => import("@/views/Page303"))

// 抽取suspense组件函数，避免懒加载报错
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>loading...</div>}>
        {comp}
    </React.Suspense>
)
const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            },
            {
                path: "/page3/page301",
                element: withLoadingComponent(<Page301 />)
            },
            {
                path: "/page3/page302",
                element: withLoadingComponent(<Page302 />)
            },
            {
                path: "/page3/page303",
                element: withLoadingComponent(<Page303 />)
            },
        ]
    },
    // 访问其他路径时重定向
    {
        path: "*",
        element: <Navigate to="/page1" />
    }


]

export default routes