"use client";
import React, { useEffect } from "react";
import { Typography, Collapse, theme } from "antd";
import {
    AlgorithmModal,
    AlgorithmForm,
    SeedTokensForm,
    SeedTokensModal,
    MapTokensPanel,
    MapTokensModal,
    AliasTokensPanel,
    AliasTokensModal,
    ComponentForm,
    ComponentModal,
} from "./";
import type { CollapseProps, ThemeConfig } from "antd";
import type { ComponentTokenMap } from "antd/es/theme/interface";

const { Title } = Typography;
const { getDesignToken } = theme;

interface CustomizeThemeSectionProps {
    customizableTheme: ThemeConfig;
    setCustomizableTheme: React.Dispatch<React.SetStateAction<ThemeConfig>>;
}

const CustomizeThemeSection: React.FC<CustomizeThemeSectionProps> = ({ customizableTheme, setCustomizableTheme }) => {
    const defaultDesignTokens = getDesignToken(theme.defaultConfig);
    let designTokens = getDesignToken(customizableTheme);

    const customizeSections: CollapseProps["items"] = [
        {
            key: "1",
            label: "Algorithm",
            children: (
                <AlgorithmForm customizableTheme={customizableTheme} setCustomizableTheme={setCustomizableTheme} />
            ),
            extra: <AlgorithmModal />,
        },
        {
            key: "2",
            label: "Seed Tokens",
            children: (
                <SeedTokensForm customizableTheme={customizableTheme} setCustomizableTheme={setCustomizableTheme} />
            ),
            extra: <SeedTokensModal />,
        },
        // TODO: Add Component Tokens
        // {
        //     key: "5",
        //     label: "Component Tokens",
        //     children: (
        //         <ComponentForm
        //             layoutComponentToken={layoutComponentToken}
        //             setLayoutComponentToken={setLayoutComponentToken}
        //         />
        //     ),
        //     extra: <ComponentModal />,
        // },
    ];

    const whatChangedSections: CollapseProps["items"] = [
        {
            key: "3",
            label: "Map Tokens",
            children: (
                <MapTokensPanel
                    designTokens={designTokens}
                    defaultDesignTokens={defaultDesignTokens}
                    customizableTheme={customizableTheme}
                />
            ),
            extra: <MapTokensModal />,
        },
        {
            key: "4",
            label: "Alias Tokens",
            children: <AliasTokensPanel designTokens={designTokens} defaultDesignTokens={defaultDesignTokens} />,
            extra: <AliasTokensModal />,
        },
    ];

    return (
        <>
            <Title level={2}>Customize Your Theme</Title>
            <Collapse items={customizeSections} />
            <Title level={2} style={{ paddingTop: "48px" }}>
                See What Changed
            </Title>
            <Collapse items={whatChangedSections} />
        </>
    );
};

export default CustomizeThemeSection;
