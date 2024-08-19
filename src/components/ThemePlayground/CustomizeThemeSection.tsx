"use client";
import React, { useEffect } from "react";
import { Typography, Collapse, theme } from "antd";
import { AlgorithmModal, AlgorithmForm, SeedTokensForm, SeedTokensModal, MapTokensPanel, MapTokensModal, AliasTokensPanel, AliasTokensModal } from "./";
import type { CollapseProps, ThemeConfig } from "antd";

const { Title } = Typography;
const { getDesignToken } = theme;

interface CustomizeThemeSectionProps {
    customizableTheme: ThemeConfig;
    setCustomizableTheme: React.Dispatch<React.SetStateAction<ThemeConfig>>;
}

const CustomizeThemeSection: React.FC<CustomizeThemeSectionProps> = ({ customizableTheme, setCustomizableTheme }) => {
    const text = `
    Content coming soon...
    `;

    let designTokens = getDesignToken(customizableTheme);

    useEffect(() => {
        designTokens = getDesignToken(customizableTheme);
    }, [customizableTheme]);

    const sections: CollapseProps["items"] = [
        {
            key: "1",
            label: "Algorithm",
            children: <AlgorithmForm customizableTheme={customizableTheme} setCustomizableTheme={setCustomizableTheme} />,
            extra: <AlgorithmModal />,
        },
        {
            key: "2",
            label: "Seed Tokens",
            children: <SeedTokensForm customizableTheme={customizableTheme} setCustomizableTheme={setCustomizableTheme} />,
            extra: <SeedTokensModal />,
        },
        {
            key: "3",
            label: "Map Tokens",
            children: <MapTokensPanel designTokens={undefined} />, // TODO: Get data for map tokens
            extra: <MapTokensModal />,
        },
        {
            key: "4",
            label: "Alias Tokens",
            children: <AliasTokensPanel designTokens={designTokens} />,
            extra: <AliasTokensModal />,
        },
        {
            key: "5",
            label: "Component Tokens",
            children: <p>{text}</p>,
        },
    ];

    return (
        <>
            <Title level={2}>Customize Your Theme</Title>
            <Collapse items={sections} defaultActiveKey={["1", "2"]} />
        </>
    );
};

export default CustomizeThemeSection;
