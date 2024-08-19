import React from "react";

interface MapTokensPanelProps {
    designTokens: any; //TODO
}

const MapTokensPanel: React.FC<MapTokensPanelProps> = ({ designTokens }) => {
    return (
        <div style={{ maxWidth: "100%", overflowX: "auto" }}>
            <pre>{JSON.stringify(designTokens, null, 2)}</pre>
        </div>
    );
};

export default MapTokensPanel;
