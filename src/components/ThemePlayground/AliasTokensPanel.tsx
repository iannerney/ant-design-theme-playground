"use client";
import React from "react";
import { Table } from "antd";
import type { AliasToken } from "antd/es/theme/internal";

interface AliasTokensPanelProps {
    designTokens: AliasToken;
    defaultDesignTokens: AliasToken;
}

const AliasTokensPanel: React.FC<AliasTokensPanelProps> = ({ designTokens, defaultDesignTokens }) => {
    const dataSource = Object.entries(designTokens).map(([key, value]) => ({
        key,
        value,
        isDifferent: defaultDesignTokens[key as keyof AliasToken] !== value,
    }));

    const columns = [
        {
            title: "Key",
            dataIndex: "key",
            key: "key",
        },
        {
            title: "Value",
            dataIndex: "value",
            key: "value",
        },
        {
            title: "hasChanged",
            dataIndex: "isDifferent",
            key: "isDifferent",
            render: (isDifferent: boolean) => (isDifferent ? "true" : "false"),
        },
    ];

    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            rowClassName={(record) => (record.isDifferent ? `bg-blue-200` : "")}
            rowHoverable={false}
            pagination={{ showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items` }}
            scroll={{ x: true }}
        />
    );
};

export default AliasTokensPanel;
