"use client";
import React, { useState } from "react";
import { Form, Row, Col, ColorPicker, Input, InputNumber, Switch, ThemeConfig, Typography } from "antd";
import type { SeedToken } from "antd/es/theme/internal";
import type { ColorFactory } from "antd/es/color-picker/color";

const { Paragraph } = Typography;
interface SeedTokensFormProps {
    customizableTheme: ThemeConfig;
    setCustomizableTheme: React.Dispatch<React.SetStateAction<ThemeConfig>>;
}

const SeedTokensForm: React.FC<SeedTokensFormProps> = ({ customizableTheme, setCustomizableTheme }) => {
    // Generate array of SeedToken properties
    type SeedTokenObject = Record<keyof SeedToken, undefined> & { [key: string]: undefined };
    let seedTokenProperties: SeedTokenObject = {
        colorPrimary: undefined,
        colorSuccess: undefined,
        colorWarning: undefined,
        colorError: undefined,
        colorInfo: undefined,
        colorTextBase: undefined,
        colorBgBase: undefined,
        colorLink: undefined,
        fontFamily: undefined,
        fontFamilyCode: undefined,
        fontSize: undefined,
        lineWidth: undefined,
        lineType: undefined,
        borderRadius: undefined,
        sizeUnit: undefined,
        sizeStep: undefined,
        sizePopupArrow: undefined,
        controlHeight: undefined,
        zIndexBase: undefined,
        zIndexPopupBase: undefined,
        opacityImage: undefined,
        motionUnit: undefined,
        motionBase: undefined,
        motionEaseOutCirc: undefined,
        motionEaseInOutCirc: undefined,
        motionEaseInOut: undefined,
        motionEaseOutBack: undefined,
        motionEaseInBack: undefined,
        motionEaseInQuint: undefined,
        motionEaseOutQuint: undefined,
        motionEaseOut: undefined,
        wireframe: undefined,
        motion: undefined,
        blue: undefined,
        purple: undefined,
        cyan: undefined,
        green: undefined,
        magenta: undefined,
        pink: undefined,
        red: undefined,
        orange: undefined,
        yellow: undefined,
        volcano: undefined,
        geekblue: undefined,
        lime: undefined,
        gold: undefined,
    };
    const allSeedTokenProperties = Object.keys(seedTokenProperties) as (keyof SeedToken)[];

    const handleOnValuesChange = (changedValues: any, allValues: any) => {
        // Filter out undefined values
        const definedValues = Object.fromEntries(Object.entries(allValues).filter(([key, value]) => value !== undefined));

        // Convert ColorFactory objects to hex strings
        const convertedValues: ThemeConfig["token"] = Object.entries(definedValues).reduce((acc, [key, value]) => {
            if (typeof value === "object" && value !== null && "toHexString" in value) {
                // TODO: Fix this type assertion
                // @ts-ignore
                acc[key] = (value as ColorFactory).toHexString();
            } else {
                // TODO: Fix this type assertion
                // @ts-ignore
                acc[key] = value;
            }
            return acc;
        }, {});

        setCustomizableTheme({
            ...customizableTheme,
            token: {
                ...customizableTheme.token,
                ...convertedValues,
            },
        });
    };

    if (customizableTheme.token && allSeedTokenProperties.length > 0) {
        return (
            <>
                <Paragraph>
                    Seed Tokens define the core attributes of the design system, such as colors, spacing, typography, and other stylistic properties. Using Seed Tokens ensures
                    consistency and scalability across the user interface components.
                </Paragraph>
                <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} layout="vertical" style={{ maxWidth: 600 }} onValuesChange={handleOnValuesChange}>
                    <Row gutter={[24, 12]}>
                        {allSeedTokenProperties.map((property) => {
                            let type = typeof customizableTheme.token?.[property];
                            let value = customizableTheme.token?.[property] ?? null;

                            const renderFormItem = () => {
                                if (type === "string") {
                                    if (value?.toString().startsWith("#") || property.startsWith("color")) {
                                        return <ColorPicker defaultValue={value as string} defaultFormat="hex" format="hex" showText disabledAlpha />;
                                    } else {
                                        return <Input defaultValue={value as string} />;
                                    }
                                } else if (type === "number") {
                                    return <InputNumber defaultValue={value as number} />;
                                } else if (type === "boolean") {
                                    return <Switch checkedChildren="true" unCheckedChildren="false" defaultChecked={value as boolean} />;
                                }
                            };

                            return (
                                <Col xs={24} lg={12} xl={8} key={property}>
                                    <Form.Item label={property} name={property}>
                                        {renderFormItem()}
                                    </Form.Item>
                                </Col>
                            );
                        })}
                    </Row>
                </Form>
            </>
        );
    }
};

export default SeedTokensForm;
