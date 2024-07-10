"use client";
import React from "react";
import { Typography, Row, Col, ConfigProvider } from "antd";
import PreviewPanel from "./PreviewPanel";
import useAntDesignTheme from "@/hooks/useAntDesignTheme";

const { Title } = Typography;

interface PreviewResultProps {}

const PreviewResult: React.FC<PreviewResultProps> = (props) => {
    const { customizableTheme } = useAntDesignTheme();
    return (
        <div>
            <Title level={2}>Preview the Result</Title>
            <div className="preview" style={{ border: "1px solid #d9d9d9", borderRadius: "8px", overflow: "hidden" }}>
                <ConfigProvider theme={customizableTheme}>
                    <PreviewPanel />
                </ConfigProvider>
            </div>
        </div>
    );
};

export default PreviewResult;
