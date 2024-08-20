"use client";
import React from "react";
import { TokensDisplayTable } from "./";
import type { AliasToken } from "antd/es/theme/internal";

interface AliasTokensPanelProps {
    designTokens: AliasToken;
    defaultDesignTokens: AliasToken;
}

const AliasTokensPanel: React.FC<AliasTokensPanelProps> = ({ designTokens, defaultDesignTokens }) => {
    const tokens = Object.entries(designTokens).map(([key, value]) => ({
        key,
        value,
        hasChanged: defaultDesignTokens[key as keyof AliasToken] !== value,
    }));

    return <TokensDisplayTable tokens={tokens} />;
};

export default AliasTokensPanel;
