"use client";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

interface AntDesignLayoutProps {
    children: React.ReactNode;
}

const AntDesignLayout: React.FC<AntDesignLayoutProps> = ({ children }) => {
    const year = new Date().getFullYear();
    return (
        <Layout>
            <Header>
                <h1>Ant Design Theme Generator</h1>
            </Header>
            <Content>{children}</Content>
            <Footer>© {year === 2024 ? year : `2024-${year}`} Ian Nerney</Footer>
        </Layout>
    );
};

export default AntDesignLayout;
