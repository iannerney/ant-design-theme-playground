"use client";
import React from "react";
import { ThemeConfig, Typography } from "antd";
import { PreviewPanel } from "./";
import type { ComponentTokenMap } from "antd/es/theme/interface";

const { Title } = Typography;

interface PreviewResultProps {
    customizableTheme: ThemeConfig;
    layoutComponentToken: ComponentTokenMap["Layout"];
}

const PreviewResult: React.FC<PreviewResultProps> = ({ customizableTheme, layoutComponentToken }) => {
    return (
        <div>
            <Title level={2}>Preview the Result</Title>
            <div className="preview" style={{ border: "1px solid #d9d9d9", borderRadius: "8px", overflow: "hidden" }}>
                <PreviewPanel customizableTheme={customizableTheme} layoutComponentToken={layoutComponentToken} />
            </div>
        </div>
    );
};

export default PreviewResult;
