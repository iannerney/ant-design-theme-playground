"use client";
import React, { useState } from "react";
import AntDesignLayout from "@/components/Layouts/AntDesignLayout";
import { CustomizeThemeSection, PreviewResult } from "@/components/ThemePlayground";
import { Col, Row, theme } from "antd";
import type { ThemeConfig } from "antd";
import type { ComponentTokenMap } from "antd/es/theme/interface";
import { LayoutToken } from "antd/es/layout/style"; // TODO: Determine which interface is better to use here...

// export const metadata: Metadata = {
//     title: "Ant Design Theme Playground",
//     description: "This project lets you configure and generate a custom Ant Design theme.",
// };

const Home: React.FC = () => {
    const [customizableTheme, setCustomizableTheme] = useState<ThemeConfig>(theme.defaultConfig);
    const [layoutComponentToken, setLayoutComponentToken] = useState<ComponentTokenMap["Layout"]>(undefined);

    return (
        <AntDesignLayout>
            <Row style={{ padding: "24px 26px" }}>
                <Col style={{ padding: "24px" }} xs={24} md={12}>
                    <CustomizeThemeSection
                        customizableTheme={customizableTheme}
                        setCustomizableTheme={setCustomizableTheme}
                        layoutComponentToken={layoutComponentToken}
                        setLayoutComponentToken={setLayoutComponentToken}
                    />
                </Col>
                <Col style={{ padding: "24px" }} xs={24} md={12}>
                    <PreviewResult customizableTheme={customizableTheme} layoutComponentToken={layoutComponentToken} />
                </Col>
            </Row>
        </AntDesignLayout>
    );
};

export default Home;
