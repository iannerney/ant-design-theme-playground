"use client";
import React, { useEffect } from "react";
import { Breadcrumb, Layout, Menu, theme, Row, Col, Typography, Flex, Button, Card, Statistic, Alert, Tooltip, ConfigProvider } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import useAntDesignTheme from "@/hooks/useAntDesignTheme";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const items = new Array(4).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));

const PreviewPanel: React.FC = () => {
    const {
        token: { green, red },
    } = theme.useToken();

    const { customizableTheme } = useAntDesignTheme();

    useEffect(() => {
        if (customizableTheme) {
            console.log("customizableTheme", customizableTheme);
        }
    }, [customizableTheme]);

    return (
        <ConfigProvider theme={customizableTheme}>
            <Layout>
                <Header style={{ display: "flex", alignItems: "center" }}>
                    <div className="demo-logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} items={items} style={{ flex: 1, minWidth: 0 }} />
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
                                    <Button type="primary" size="large">
                                        Let's GOOOOO!
                                    </Button>
                                </Flex>
                            </Col>
                        </Row>
                    </section>

                    <section id="statistics">
                        <Title level={2}>Statistics</Title>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Card bordered={false}>
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
                                        valueStyle={{ color: green }}
                                        prefix={<ArrowUpOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card bordered={false}>
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
                                        valueStyle={{ color: red }}
                                        prefix={<ArrowDownOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </section>
                    <section id="alerts">
                        <Title level={2}>Some Alerts</Title>
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
                </Content>
                <Footer style={{ textAlign: "center" }}>©{new Date().getFullYear()} Your Name</Footer>
            </Layout>
        </ConfigProvider>
    );
};

export default PreviewPanel;
