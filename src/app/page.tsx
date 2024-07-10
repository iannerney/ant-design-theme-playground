"use client";
import React, { useState } from "react";
import AntDesignLayout from "@/components/Layouts/AntDesignLayout";
import CustomizeThemeForm from "@/components/ThemeGenerator/CustomizeThemeForm";
import PreviewResult from "@/components/ThemeGenerator/PreviewResult";
import { Col, Row, theme } from "antd";
import type { ThemeConfig } from "antd";

// export const metadata: Metadata = {
//     title: "Ant Design Theme Playground",
//     description: "This project lets you configure and generate a custom Ant Design theme.",
// };

const Home: React.FC = () => {
    const [customizableTheme, setCustomizableTheme] = useState<ThemeConfig>(theme.defaultConfig);
    return (
        <AntDesignLayout>
            <Row gutter={64} style={{ padding: "24px 50px" }}>
                <Col style={{ padding: "24px" }} xs={24} md={12}>
                    <CustomizeThemeForm customizableTheme={customizableTheme} setCustomizableTheme={setCustomizableTheme} />
                </Col>
                <Col style={{ padding: "24px" }} xs={24} md={12}>
                    <PreviewResult customizableTheme={customizableTheme} />
                </Col>
            </Row>
        </AntDesignLayout>
    );
};

export default Home;
