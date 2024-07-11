"use client";
import React, { useEffect, useState, useReducer } from "react";
import { Breadcrumb, Layout, Menu, theme, Row, Col, Typography, Flex, Button, Card, Statistic, Alert, Tooltip, ConfigProvider, Modal, Space, notification, Tag, Image } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined, QuestionCircleOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
type NotificationType = "success" | "info" | "warning" | "error";

const items = new Array(4).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));

interface PreviewPanelProps {
    customizableTheme: any;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ customizableTheme }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: "Notification Title",
            description: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        });
    };

    return (
        // NOTE: The Layout comonent is added to the theme to override the parent theme component definition
        <ConfigProvider theme={{ ...customizableTheme, components: { Layout: {} } }}>
            <Layout>
                <Header style={{ display: "flex", alignItems: "center" }}>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" style={{ height: 32, marginRight: 16 }} />
                    <Menu mode="horizontal" theme="dark" defaultSelectedKeys={["2"]} items={items} style={{ flex: 1, minWidth: 0 }} />
                </Header>
                <Content>
                    <section id="breadcrumbs">
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                    </section>
                    <section id="hero">
                        <Row>
                            <Col>
                                <Title level={1}>This is a big, impactful heading</Title>
                                <Paragraph>
                                    Some supporting text to illustrate how impactful and awesome we can be. Sometimes the text could also include an <a href="#">inline link</a>,
                                    and that color can be set using the <code>colorLink</code> property.
                                </Paragraph>
                                <Flex gap="small" wrap>
                                    <Button size="large">Let's Go!</Button>
                                    <Button type="primary" size="large" onClick={handleModalOpen}>
                                        Let's GOOOOO!
                                    </Button>
                                </Flex>
                            </Col>
                        </Row>
                    </section>

                    <section id="statistics">
                        <Title level={2}>Statistics</Title>
                        <Row gutter={16}>
                            <Col xs={24} lg={12}>
                                <Card style={{ margin: "12px 0" }} bordered={false}>
                                    <Statistic
                                        title={
                                            <>
                                                Active{" "}
                                                <Tooltip
                                                    placement="right"
                                                    title={
                                                        <>
                                                            Color of the statistic can be updated using the <code>green</code> seed token.
                                                        </>
                                                    }
                                                >
                                                    <QuestionCircleOutlined />
                                                </Tooltip>
                                            </>
                                        }
                                        value={11.28}
                                        precision={2}
                                        // Color is set here using the `green` token
                                        valueStyle={{ color: customizableTheme.token.green }}
                                        prefix={<ArrowUpOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col xs={24} lg={12}>
                                <Card style={{ margin: "12px 0" }} bordered={false}>
                                    <Statistic
                                        title={
                                            <>
                                                Idle{" "}
                                                <Tooltip
                                                    placement="right"
                                                    title={
                                                        <>
                                                            Color of the statistic can be updated using the <code>red</code> seed token.
                                                        </>
                                                    }
                                                >
                                                    <QuestionCircleOutlined />
                                                </Tooltip>
                                            </>
                                        }
                                        value={9.3}
                                        precision={2}
                                        valueStyle={{ color: customizableTheme.token.red }}
                                        prefix={<ArrowDownOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </section>
                    <section id="alerts">
                        <Title level={2}>Alerts</Title>
                        <Row>
                            <Col span={24}>
                                <Alert message="Success Tips" type="success" showIcon />
                                <br />
                                <Alert message="Informational Notes" type="info" showIcon />
                                <br />
                                <Alert message="Warning" type="warning" showIcon />
                                <br />
                                <Alert message="Error" type="error" showIcon />
                            </Col>
                        </Row>
                    </section>
                    <section id="notifications">
                        <Title level={2}>Notifications</Title>
                        {contextHolder}
                        <Space>
                            <Button onClick={() => openNotificationWithIcon("success")}>Success</Button>
                            <Button onClick={() => openNotificationWithIcon("info")}>Info</Button>
                            <Button onClick={() => openNotificationWithIcon("warning")}>Warning</Button>
                            <Button onClick={() => openNotificationWithIcon("error")}>Error</Button>
                        </Space>
                    </section>
                    <section id="tags">
                        <Title level={2}>Tags</Title>
                        <Flex gap="4px 0" wrap>
                            <Tag color="magenta">magenta</Tag>
                            <Tag color="pink">pink</Tag>
                            <Tag color="red">red</Tag>
                            <Tag color="volcano">volcano</Tag>
                            <Tag color="orange">orange</Tag>
                            <Tag color="gold">gold</Tag>
                            <Tag color="yellow">yellow</Tag>
                            <Tag color="lime">lime</Tag>
                            <Tag color="green">green</Tag>
                            <Tag color="cyan">cyan</Tag>
                            <Tag color="blue">blue</Tag>
                            <Tag color="geekblue">geekblue</Tag>
                            <Tag color="purple">purple</Tag>
                        </Flex>
                    </section>
                    <section id="images">
                        <Title level={2}>Images</Title>
                        <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                    </section>
                </Content>
                <Footer style={{ textAlign: "center" }}>©{new Date().getFullYear()} Your Name</Footer>
            </Layout>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleModalClose} onCancel={handleModalClose}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </ConfigProvider>
    );
};

export default PreviewPanel;
