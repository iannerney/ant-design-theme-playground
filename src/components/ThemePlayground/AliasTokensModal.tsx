"use client";
import React, { useState } from "react";
import { Typography, Modal } from "antd";

const { Link, Paragraph } = Typography;

interface AliasTokensModalProps {
    // Add any props you need for the component here
}

const AliasTokensModal: React.FC<AliasTokensModalProps> = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Link onClick={showModal}>What are Alias Tokens?</Link>
            <Modal
                title="What are Alias Tokens?"
                open={isModalOpen}
                onOk={handleClose}
                onCancel={handleClose}
                cancelButtonProps={{ style: { display: "none" } }}
            >
                <Paragraph>
                    Alias tokens are higher-level design variables built on map tokens. They abstract complex styles
                    into simpler concepts, making it easier to maintain consistent theming across the application.
                </Paragraph>
            </Modal>
        </>
    );
};

export default AliasTokensModal;
