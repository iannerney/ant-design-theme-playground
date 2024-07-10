"use client";
import React from "react";
import { Typography } from "antd";
import PreviewPanel from "./PreviewPanel";

const { Title } = Typography;

interface PreviewResultProps {}

const PreviewResult: React.FC<PreviewResultProps> = (props) => {
    return (
        <div>
            <Title level={2}>Preview the Result</Title>
            <div className="preview" style={{ border: "1px solid #d9d9d9", borderRadius: "8px", overflow: "hidden" }}>
                <PreviewPanel />
            </div>
        </div>
    );
};

export default PreviewResult;
