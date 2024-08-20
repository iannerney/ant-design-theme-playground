import React from "react";
import { Typography } from "antd";
import { InfoModal } from "./";

const { Paragraph } = Typography;

interface MapTokensModalProps {
    // Add any props you need for the component here
}

const MapTokensModal: React.FC<MapTokensModalProps> = (props) => {
    return (
        <InfoModal
            title="What are Map Tokens?"
            content={
                <Paragraph>
                    Map tokens are variables that define the design-related properties (e.g., colors, typography,
                    spacing) used throughout the UI. They enable consistent theming and styling across components by
                    centralizing these design values.
                </Paragraph>
            }
        />
    );
};

export default MapTokensModal;
