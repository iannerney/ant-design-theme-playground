import AntDesignLayout from "@/components/Layouts/AntDesignLayout";
import CustomizeThemeForm from "@/components/ThemeGenerator/CustomizeThemeForm";
import { Col, Row } from "antd";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ant Design Theme Generator",
    description: "This project lets you configure and generate a custom Ant Design theme.",
};

const Home: React.FC = () => {
    return (
        <AntDesignLayout>
            <Row gutter={48} style={{ padding: "24px 50px" }}>
                <Col span={12}>
                    <CustomizeThemeForm />
                </Col>
                <Col span={12}>
                    <h2>Preview The Result</h2>
                </Col>
            </Row>
        </AntDesignLayout>
    );
};

export default Home;
