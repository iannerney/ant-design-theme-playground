"use client";
import React, { useState } from "react";
import { Typography, Collapse } from "antd";
import type { CollapseProps, ThemeConfig } from "antd";
import SeedTokensForm from "./SeedTokensForm";
import AlgorithmForm from "./AlgorithmForm";

const { Title } = Typography;

interface CustomizeThemeSectionProps {
    customizableTheme: ThemeConfig;
    setCustomizableTheme: React.Dispatch<React.SetStateAction<ThemeConfig>>;
}

const CustomizeThemeSection: React.FC<CustomizeThemeSectionProps> = ({ customizableTheme, setCustomizableTheme }) => {
    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `;

    const sections: CollapseProps["items"] = [
        {
            key: "1",
            label: "Algorithm",
            children: <AlgorithmForm customizableTheme={customizableTheme} setCustomizableTheme={setCustomizableTheme} />,
        },
        {
            key: "2",
            label: "Seed Tokens",
            children: <SeedTokensForm customizableTheme={customizableTheme} setCustomizableTheme={setCustomizableTheme} />,
        },
        // {
        //     key: "3",
        //     label: "Map Tokens",
        //     children: <p>{text}</p>,
        // },
        // {
        //     key: "4",
        //     label: "Alias Tokens",
        //     children: <p>{text}</p>,
        // },
    ];

    return (
        <>
            <Title level={2}>Customize Your Theme</Title>
            <Collapse items={sections} defaultActiveKey={["1", "2"]} />
        </>
    );
};

export default CustomizeThemeSection;
