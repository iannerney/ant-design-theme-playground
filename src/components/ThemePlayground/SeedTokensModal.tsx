"use client";
import React, { useState } from "react";
import { Typography, Modal } from "antd";

const { Link, Paragraph } = Typography;

interface SeedTokensModalProps {
    // Add any props you need for the component here
}

const SeedTokensModal: React.FC<SeedTokensModalProps> = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Link onClick={showModal}>What are Seed Tokens?</Link>
            <Modal title="What are Seed Tokens?" open={isModalOpen} onOk={handleClose} onCancel={handleClose} cancelButtonProps={{ style: { display: "none" } }}>
                <Paragraph>
                    Seed Tokens define the core attributes of the design system, such as colors, spacing, typography, and other stylistic properties. Using Seed Tokens ensures
                    consistency and scalability across the user interface components.
                </Paragraph>
            </Modal>
        </>
    );
};

export default SeedTokensModal;
