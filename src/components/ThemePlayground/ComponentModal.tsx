"use client";
import React, { useState } from "react";
import { Typography, Modal } from "antd";

const { Link, Paragraph } = Typography;

interface ComponentTokensModalProps {
    // Add any props you need for the component here
}

const ComponentTokensModal: React.FC<ComponentTokensModalProps> = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Link onClick={showModal}>What are Component Tokens?</Link>
            <Modal
                title="What are Component Tokens?"
                open={isModalOpen}
                onOk={handleClose}
                onCancel={handleClose}
                cancelButtonProps={{ style: { display: "none" } }}
            >
                <Paragraph>
                    Component tokens in Ant Design are design variables specific to individual components. They control
                    component-specific styles like padding, borders, and font sizes, enabling fine-grained customization
                    while ensuring consistency across the UI.
                </Paragraph>
            </Modal>
        </>
    );
};

export default ComponentTokensModal;
