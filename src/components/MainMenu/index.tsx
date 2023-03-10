import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
// import type { MenuProps } from 'antd';
type MenuItem = {
    label: string,
    key: string,
    icon?: React.ReactNode,
    children?: MenuItem[],
}

// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }
// const items: MenuItem[] = [
//     getItem('Option 1', '/page1', <PieChartOutlined />),
//     getItem('Option 2', '/page2', <DesktopOutlined />),
//     getItem('User', 'sub1', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];
const items: MenuItem[] = [
    {
        label: '栏目 1',
        key: '/page1',
        icon: <PieChartOutlined />
    },
    {
        label: '栏目 2',
        key: '/page2',
        icon: <DesktopOutlined />
    },
    {
        label: '栏目 3',
        key: 'page3',
        icon: <UserOutlined />,
        children: [
            {
                label: '栏目 3-1',
                key: '/page3/page301',
            },
            {
                label: '栏目 3-2',
                key: '/page3/page302',
            },
            {
                label: '栏目 3-3',
                key: '/page3/page303',
            }
        ]
    },
    {
        label: '栏目 4',
        key: 'page4',
        icon: <TeamOutlined />,
        children: [
            {
                label: '栏目 4-1',
                key: '/page4/page401',
            },
            {
                label: '栏目 4-2',
                key: '/page4/page402',
            }
        ]
    },
    {
        label: '栏目 5',
        key: '/page5',
        icon: <FileOutlined />
    },

]
const Comp: React.FC = () => {
    const navigateTo = useNavigate()
    const currentRoute = useLocation()
    // 定义点击事件
    const menuClick = (e: { key: string }) => {
        navigateTo(e.key)
    }
    let firstOpenKey: string = ''
    function findKey(obj: { key: string }) {
        return obj.key === currentRoute.pathname
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i]!['children'] && items[i]['children']!.length > 0 && items[i]['children']!.find(findKey)) {
            firstOpenKey = items[i]!.key as string
            break
        }
    }
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    const handleChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]])
    }
    return (
        <Menu theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            onOpenChange={handleChange}
            openKeys={openKeys}
        />
    )
}

export default Comp;