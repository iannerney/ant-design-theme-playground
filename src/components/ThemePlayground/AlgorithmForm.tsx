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
    console.log(customizableTheme);
    const handleOnValuesChange = (changedValues: any, allValues: any) => {
        console.log(changedValues, allValues);
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

        console.log(algorithmArray);

        setCustomizableTheme({
            ...customizableTheme,
            algorithm: algorithmArray,
        });
    };
    return (
        <>
            <Paragraph>The Algorithm defines how the "Seed Token" variables get converted into "Map Tokens", which are then used in Ant Design components.</Paragraph>
            <Paragraph>
                There are three possible options:
                <ol>
                    <li>
                        <code>defaultAlgorithm</code> which is the default light mode
                    </li>
                    <li>
                        <code>darkAlgorithm</code> which is dark mode
                    </li>
                    <li>
                        <code>compactAlgorithm</code> which has smaller sizing
                    </li>
                </ol>
            </Paragraph>
            <Paragraph>
                The <code>compactAlgorithm</code> can be combined with either the <code>defaultAlgorithm</code> or the <code>darkAlgorithm</code>.
            </Paragraph>
            <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} layout="vertical" style={{ maxWidth: 600 }} onValuesChange={handleOnValuesChange}>
                <Row gutter={[24, 12]}>
                    {switches.map((switchItem, i) => (
                        <Col xs={24} lg={12} xl={8} key={i}>
                            <Form.Item label={switchItem.label} name={switchItem.key}>
                                <Switch checkedChildren="true" unCheckedChildren="false" />
                            </Form.Item>
                        </Col>
                    ))}
                </Row>
            </Form>
        </>
    );
};

export default AlgorithmForm;
