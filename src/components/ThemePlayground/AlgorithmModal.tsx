"use client";
import React, { useState } from "react";
import { Typography, Modal } from "antd";

const { Link, Paragraph } = Typography;

interface AlgorithmModalProps {
    // Add any props you need for the component here
}

const AlgorithmModal: React.FC<AlgorithmModalProps> = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Link onClick={showModal}>What is an Algorithm?</Link>
            <Modal title="What is an Algorithm?" open={isModalOpen} onOk={handleClose} onCancel={handleClose} cancelButtonProps={{ style: { display: "none" } }}>
                <Paragraph>The Algorithm defines how the "Seed Token" variables get converted into "Map Tokens", which are then used in Ant Design components.</Paragraph>
                <Paragraph>
                    There are three possible options:
                    <ol>
                        <li>
                            <code>defaultAlgorithm</code> which is the default light mode
                        </li>
                        <li>
                            <code>darkAlgorithm</code> which is dark mode
                        </li>
                        <li>
                            <code>compactAlgorithm</code> which has smaller sizing
                        </li>
                    </ol>
                </Paragraph>
                <Paragraph>
                    The <code>compactAlgorithm</code> can be combined with either the <code>defaultAlgorithm</code> or the <code>darkAlgorithm</code>.
                </Paragraph>
            </Modal>
        </>
    );
};

export default AlgorithmModal;
