import React from "react";
import { Typography } from "antd";
import { InfoModal } from "./";

const { Paragraph } = Typography;

interface SeedTokensModalProps {
    // Add any props you need for the component here
}

const SeedTokensModal: React.FC<SeedTokensModalProps> = (props) => {
    return (
        <InfoModal
            title="What are Seed Tokens?"
            content={
                <Paragraph>
                    Seed Tokens define the core attributes of the design system, such as colors, spacing, typography,
                    and other stylistic properties. Using Seed Tokens ensures consistency and scalability across the
                    user interface components.
                </Paragraph>
            }
        />
    );
};

export default SeedTokensModal;
