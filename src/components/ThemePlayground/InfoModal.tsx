"use client";
import React, { useState } from "react";
import { Typography, Modal } from "antd";

const { Link, Paragraph } = Typography;

interface InfoModalProps {
    title: string;
    content: React.ReactNode;
}

const InfoModal: React.FC<InfoModalProps> = ({ title, content }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.stopPropagation();
        setIsModalOpen(true);
    };

    const handleClose = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.stopPropagation();
        setIsModalOpen(false);
    };

    return (
        <>
            <Link onClick={(e) => showModal(e)}>{title}</Link>
            <Modal
                title="What are Seed Tokens?"
                open={isModalOpen}
                onOk={(e) => handleClose(e)}
                onCancel={(e) => handleClose(e)}
                cancelButtonProps={{ style: { display: "none" } }}
            >
                {content}
            </Modal>
        </>
    );
};

export default InfoModal;
