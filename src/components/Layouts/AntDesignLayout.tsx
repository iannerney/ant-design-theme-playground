"use client";
import { Layout, theme } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const { useToken } = theme;
interface AntDesignLayoutProps {
    children: React.ReactNode;
}

const AntDesignLayout: React.FC<AntDesignLayoutProps> = ({ children }) => {
    const { token } = useToken();
    const year = new Date().getFullYear();
    return (
        <Layout>
            <Header style={{ background: token.colorPrimary, color: token.colorBgBase }}>
                <h1>Ant Design Theme Playground</h1>
            </Header>
            <Content style={{ background: token.colorBgBase }}>{children}</Content>
            <Footer>© {year === 2024 ? year : `2024-${year}`} Ian Nerney</Footer>
        </Layout>
    );
};

export default AntDesignLayout;
