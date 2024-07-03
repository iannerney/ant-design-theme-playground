"use client";
import React from "react";
import useAntDesignTheme from "@/hooks/useAntDesignTheme";
import { Form, Row, Col, ColorPicker, Input, InputNumber, Switch } from "antd";
import { SeedToken } from "antd/es/theme/internal";
import { ColorValueType } from "antd/es/color-picker/interface";

interface SeedTokensFormProps {
    // onSubmit: (seed: string) => void;
}

const SeedTokensForm: React.FC<SeedTokensFormProps> = (props) => {
    // Generate array of SeedToken properties
    type SeedTokenObject = Record<keyof SeedToken, undefined>;
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

    const { customizableTheme, setCustomizableTheme } = useAntDesignTheme();

    const handleOnFieldsChange = (changedFields: any, allFields: any) => {
        console.log("onFieldsChange", { changedFields, allFields });
    };

    const handleOnValuesChange = (changedValues: any, allValues: any) => {
        console.log("onValuesChange", { changedValues, allValues });
        // TODO: Use this to update the state and maintain an exportable theme object
    };

    if (customizableTheme.token && allSeedTokenProperties.length > 0) {
        return (
            <Form
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                layout="vertical"
                style={{ maxWidth: 600 }}
                onFieldsChange={handleOnFieldsChange}
                onValuesChange={handleOnValuesChange}
            >
                <Row gutter={[24, 12]}>
                    {allSeedTokenProperties.map((property) => {
                        let type = typeof customizableTheme.token[property];
                        let value = customizableTheme.token[property];

                        const renderFormItem = () => {
                            if (type === "string") {
                                if (value.toString().startsWith("#") || property.startsWith("color")) {
                                    return <ColorPicker defaultValue={value as string} showText />;
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
        );
    }
};

export default SeedTokensForm;
