"use client";
import React, { useState } from "react";
import AntDesignLayout from "@/components/Layouts/AntDesignLayout";
import { CustomizeThemeSection, PreviewResult } from "@/components/ThemePlayground";
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
            <Row style={{ padding: "24px 0" }}>
                <Col style={{ padding: "24px" }} xs={24} md={12}>
                    <CustomizeThemeSection
                        customizableTheme={customizableTheme}
                        setCustomizableTheme={setCustomizableTheme}
                    />
                </Col>
                <Col style={{ padding: "24px" }} xs={24} md={12}>
                    <PreviewResult customizableTheme={customizableTheme} />
                </Col>
            </Row>
        </AntDesignLayout>
    );
};

export default Home;
