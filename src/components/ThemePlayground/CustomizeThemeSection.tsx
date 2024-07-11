"use client";
import React, { useState } from "react";
import { Typography, Collapse } from "antd";
import type { CollapseProps, ThemeConfig } from "antd";
import SeedTokensForm from "./SeedTokensForm";
import AlgorithmForm from "./AlgorithmForm";
import SeedTokensModal from "./SeedTokensModal";
import AlgorithmModal from "./AlgorithmModal";

const { Title } = Typography;

interface CustomizeThemeSectionProps {
    customizableTheme: ThemeConfig;
    setCustomizableTheme: React.Dispatch<React.SetStateAction<ThemeConfig>>;
}

const CustomizeThemeSection: React.FC<CustomizeThemeSectionProps> = ({ customizableTheme, setCustomizableTheme }) => {
    const text = `
    Content coming soon...
    `;

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
            children: <p>{text}</p>,
        },
        {
            key: "4",
            label: "Alias Tokens",
            children: <p>{text}</p>,
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
