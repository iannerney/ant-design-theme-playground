import React, { useState } from "react";
import { Typography, Form, Row, Col, Switch, theme } from "antd";
import type { ThemeConfig, MappingAlgorithm } from "antd";

const { Paragraph } = Typography;

interface AlgorithmFormProps {
    customizableTheme: ThemeConfig;
    setCustomizableTheme: React.Dispatch<React.SetStateAction<ThemeConfig>>;
}

const switches = [
    {
        key: "darkAlgorithm",
        label: "Enable Dark Mode",
    },
    {
        key: "compactAlgorithm",
        label: "Enable Compact Mode",
    },
];

const AlgorithmForm: React.FC<AlgorithmFormProps> = ({ customizableTheme, setCustomizableTheme }) => {
    const handleOnValuesChange = (changedValues: any, allValues: any) => {
        let algorithmArray: MappingAlgorithm[] = [];

        // If darkAlgorithm is true, use the darkAlgorithm from the theme, otherwise use the defaultAlgorithm
        if (allValues.darkAlgorithm) {
            algorithmArray.push(theme.darkAlgorithm);
        } else {
            algorithmArray.push(theme.defaultAlgorithm);
        }

        // If compactAlgorithm is true, add the compactAlgorithm from the theme
        if (allValues.compactAlgorithm) {
            algorithmArray.push(theme.compactAlgorithm);
        }

        setCustomizableTheme({
            ...customizableTheme,
            algorithm: algorithmArray,
        });
    };
    return (
        <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} layout="vertical" onValuesChange={handleOnValuesChange}>
            <Row gutter={[24, 12]}>
                {switches.map((switchItem, i) => (
                    <Col xs={24} sm={12} xl={8} key={i}>
                        <Form.Item label={switchItem.label} name={switchItem.key}>
                            <Switch checkedChildren="true" unCheckedChildren="false" />
                        </Form.Item>
                    </Col>
                ))}
            </Row>
        </Form>
    );
};

export default AlgorithmForm;
