import React from "react";
import { Typography } from "antd";
import { InfoModal } from "./";

const { Paragraph } = Typography;

interface AliasTokensModalProps {
    // Add any props you need for the component here
}

const AliasTokensModal: React.FC<AliasTokensModalProps> = (props) => {
    return (
        <InfoModal
            title="What are Alias Tokens?"
            content={
                <Paragraph>
                    Alias tokens are higher-level design variables built on map tokens. They abstract complex styles
                    into simpler concepts, making it easier to maintain consistent theming across the application.
                </Paragraph>
            }
        />
    );
};

export default AliasTokensModal;
