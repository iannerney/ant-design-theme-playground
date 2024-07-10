import AntDesignLayout from "@/components/Layouts/AntDesignLayout";
import CustomizeThemeForm from "@/components/ThemeGenerator/CustomizeThemeForm";
import PreviewResult from "@/components/ThemeGenerator/PreviewResult";
import { Col, Row } from "antd";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ant Design Theme Generator",
    description: "This project lets you configure and generate a custom Ant Design theme.",
};

const Home: React.FC = () => {
    return (
        <AntDesignLayout>
            <Row gutter={64} style={{ padding: "24px 50px" }}>
                <Col span={12}>
                    <CustomizeThemeForm />
                </Col>
                <Col span={12}>
                    <PreviewResult />
                </Col>
            </Row>
        </AntDesignLayout>
    );
};

export default Home;
