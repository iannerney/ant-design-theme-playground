import React from "react";
import type { AliasToken } from "antd/es/theme/internal";

interface AliasTokensPanelProps {
    designTokens: AliasToken;
}

const AliasTokensPanel: React.FC<AliasTokensPanelProps> = ({ designTokens }) => {
    return (
        <div style={{ maxWidth: "100%", overflowX: "auto" }}>
            <pre>{JSON.stringify(designTokens, null, 2)}</pre>
        </div>
    );
};

export default AliasTokensPanel;
