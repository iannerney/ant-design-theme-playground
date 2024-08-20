import React from "react";
import type { MapToken, AliasToken } from "antd/es/theme/interface";
import { ThemeConfig, theme, Table } from "antd";
import TokensDisplayTable from "./TokensDisplayTable";

interface MapTokensPanelProps {
    customizableTheme: ThemeConfig;
    designTokens: AliasToken;
    defaultDesignTokens: AliasToken;
}

const MapTokensPanel: React.FC<MapTokensPanelProps> = ({ customizableTheme, designTokens, defaultDesignTokens }) => {
    // Generate array of MapToken properties
    let mapTokenProperties = {
        borderRadiusLG: undefined,
        borderRadiusOuter: undefined,
        borderRadiusSM: undefined,
        borderRadiusXS: undefined,
        colorBgBlur: undefined,
        colorBgContainer: undefined,
        colorBgElevated: undefined,
        colorBgLayout: undefined,
        colorBgMask: undefined,
        colorBgSpotlight: undefined,
        colorBorder: undefined,
        colorBorderSecondary: undefined,
        colorErrorActive: undefined,
        colorErrorBg: undefined,
        colorErrorBgActive: undefined,
        colorErrorBgHover: undefined,
        colorErrorBorder: undefined,
        colorErrorBorderHover: undefined,
        colorErrorHover: undefined,
        colorErrorText: undefined,
        colorErrorTextActive: undefined,
        colorErrorTextHover: undefined,
        colorFill: undefined,
        colorFillQuaternary: undefined,
        colorFillSecondary: undefined,
        colorFillTertiary: undefined,
        colorInfoActive: undefined,
        colorInfoBg: undefined,
        colorInfoBgHover: undefined,
        colorInfoBorder: undefined,
        colorInfoBorderHover: undefined,
        colorInfoHover: undefined,
        colorInfoText: undefined,
        colorInfoTextActive: undefined,
        colorInfoTextHover: undefined,
        colorLinkActive: undefined,
        colorLinkHover: undefined,
        colorPrimaryActive: undefined,
        colorPrimaryBg: undefined,
        colorPrimaryBgHover: undefined,
        colorPrimaryBorder: undefined,
        colorPrimaryBorderHover: undefined,
        colorPrimaryHover: undefined,
        colorPrimaryText: undefined,
        colorPrimaryTextActive: undefined,
        colorPrimaryTextHover: undefined,
        colorSuccessActive: undefined,
        colorSuccessBg: undefined,
        colorSuccessBgHover: undefined,
        colorSuccessBorder: undefined,
        colorSuccessBorderHover: undefined,
        colorSuccessHover: undefined,
        colorSuccessText: undefined,
        colorSuccessTextActive: undefined,
        colorSuccessTextHover: undefined,
        colorText: undefined,
        colorTextQuaternary: undefined,
        colorTextSecondary: undefined,
        colorTextTertiary: undefined,
        colorWarningActive: undefined,
        colorWarningBg: undefined,
        colorWarningBgHover: undefined,
        colorWarningBorder: undefined,
        colorWarningBorderHover: undefined,
        colorWarningHover: undefined,
        colorWarningText: undefined,
        colorWarningTextActive: undefined,
        colorWarningTextHover: undefined,
        colorWhite: undefined,
        controlHeightLG: undefined,
        controlHeightSM: undefined,
        controlHeightXS: undefined,
        fontSizeHeading1: undefined,
        fontSizeHeading2: undefined,
        fontSizeHeading3: undefined,
        fontSizeHeading4: undefined,
        fontSizeHeading5: undefined,
        fontSizeLG: undefined,
        fontSizeSM: undefined,
        fontSizeXL: undefined,
        lineHeight: undefined,
        lineHeightHeading1: undefined,
        lineHeightHeading2: undefined,
        lineHeightHeading3: undefined,
        lineHeightHeading4: undefined,
        lineHeightHeading5: undefined,
        lineHeightLG: undefined,
        lineHeightSM: undefined,
        lineWidthBold: undefined,
        motionDurationFast: undefined,
        motionDurationMid: undefined,
        motionDurationSlow: undefined,
        size: undefined,
        sizeLG: undefined,
        sizeMD: undefined,
        sizeMS: undefined,
        sizeSM: undefined,
        sizeXL: undefined,
        sizeXS: undefined,
        sizeXXL: undefined,
        sizeXXS: undefined,
    };

    const tokens = Object.entries(designTokens)
        .filter(([key]) => key in mapTokenProperties)
        .map(([key, value]) => ({
            key,
            value,
            hasChanged: defaultDesignTokens[key as keyof MapToken] !== value,
        }));

    return <TokensDisplayTable tokens={tokens} />;
};

export default MapTokensPanel;
