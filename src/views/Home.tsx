
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MainMenu from '@/components/MainMenu'
const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    // const navigateTo = useNavigate()

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 左边侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <MainMenu />
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