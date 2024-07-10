"use client";
import React, { useEffect } from "react";
import { ThemeConfig, Typography } from "antd";
import PreviewPanel from "./PreviewPanel";

const { Title } = Typography;

interface PreviewResultProps {
    customizableTheme: ThemeConfig;
}

const PreviewResult: React.FC<PreviewResultProps> = ({ customizableTheme }) => {
    useEffect(() => {
        console.log("customizableTheme", customizableTheme);
    }, [customizableTheme]);
    return (
        <div>
            <Title level={2}>Preview the Result</Title>
            <div className="preview" style={{ border: "1px solid #d9d9d9", borderRadius: "8px", overflow: "hidden" }}>
                <PreviewPanel customizableTheme={customizableTheme} />
            </div>
        </div>
    );
};

export default PreviewResult;
