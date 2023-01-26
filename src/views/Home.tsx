
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '/page1', <PieChartOutlined />),
    getItem('Option 2', '/page2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigateTo = useNavigate()
    // 定义点击事件
    const menuClick = (e: { key: string }) => {
        navigateTo(e.key)
    }
    const [openKeys, setOpenKeys] = useState(['']);
    const handleChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]])
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 左边侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu theme="dark" defaultSelectedKeys={['/page1']}
                    mode="inline"
                    items={items}
                    onClick={menuClick}
                    onOpenChange={handleChange}
                    openKeys={openKeys}
                />
            </Sider>
            {/* 右边内容区 */}
            <Layout className="site-layout">
                {/* 右边头部 */}
                <Header style={{ paddingLeft: '10px', background: colorBgContainer }}>
                    {/* 面包屑 */}
                    <Breadcrumb style={{ lineHeight: '64px' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/* 右边内容 */}
                <Content style={{ margin: '16px 16px 0', height: '100%', background: colorBgContainer }}>
                    {/* 窗口内容 */}
                    <Outlet></Outlet>
                </Content>
                {/* 右边底部 */}
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default View;