import React from "react";
import { Typography } from "antd";
import type { ComponentTokenMap } from "antd/es/theme/interface";
import type { LayoutToken } from "antd/es/layout/style";

const { Text } = Typography;

interface ComponentFormProps {
    layoutComponentToken: ComponentTokenMap["Layout"];
    setLayoutComponentToken: React.Dispatch<React.SetStateAction<ComponentTokenMap["Layout"]>>;
}

const ComponentForm: React.FC<ComponentFormProps> = ({ layoutComponentToken, setLayoutComponentToken }) => {
    // Generate array of Layout component token properties
    type LayoutTokenObject = Record<keyof LayoutToken, undefined> & { [key: string]: undefined };
    // https://ant.design/components/layout#design-token
    let layoutTokenProperties = {
        bodyBg: undefined,
        headerBg: undefined,
        headerHeight: undefined,
        headerPadding: undefined,
        headerColor: undefined,
        footerPadding: undefined,
        footerBg: undefined,
        siderBg: undefined,
        triggerHeight: undefined,
        triggerBg: undefined,
        triggerColor: undefined,
        zeroTriggerWidth: undefined,
        zeroTriggerHeight: undefined,
        lightSiderBg: undefined,
        lightTriggerBg: undefined,
        lightTriggerColor: undefined,
    };
    const allLayoutTokenProperties = Object.keys(layoutTokenProperties) as (keyof LayoutToken)[];

    return (
        <>
            <Text>
                Most Ant Design components have their own design tokens that can be customized. For this example, you
                can modify the <code>Layout</code> component token values.
            </Text>
            {/* TODO: Add form here */}
        </>
    );
};

export default ComponentForm;
