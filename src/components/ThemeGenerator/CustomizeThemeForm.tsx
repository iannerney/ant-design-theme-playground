"use client";
import React, { useState } from "react";
import { Typography, Collapse } from "antd";
import type { CollapseProps } from "antd";
import SeedTokensForm from "./SeedTokensForm";

const { Title } = Typography;

interface CustomizeThemeFormProps {
    // Add any props you need here
}

const CustomizeThemeForm: React.FC<CustomizeThemeFormProps> = () => {
    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `;

    const sections: CollapseProps["items"] = [
        {
            key: "1",
            label: "Seed Tokens",
            children: <SeedTokensForm />,
        },
        {
            key: "2",
            label: "Algorithm",
            children: <p>{text}</p>,
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
    ];

    return (
        <>
            <Title level={2}>Customize Your Theme</Title>
            <Collapse items={sections} defaultActiveKey={["1"]} />
        </>
    );
};

export default CustomizeThemeForm;
