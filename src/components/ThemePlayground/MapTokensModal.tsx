"use client";
import React, { useState } from "react";
import { Typography, Modal } from "antd";

const { Link, Paragraph } = Typography;

interface MapTokensModalProps {
    // Add any props you need for the component here
}

const MapTokensModal: React.FC<MapTokensModalProps> = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Link onClick={showModal}>What are Map Tokens?</Link>
            <Modal title="What are Map Tokens?" open={isModalOpen} onOk={handleClose} onCancel={handleClose} cancelButtonProps={{ style: { display: "none" } }}>
                <Paragraph>TODO</Paragraph>
            </Modal>
        </>
    );
};

export default MapTokensModal;
