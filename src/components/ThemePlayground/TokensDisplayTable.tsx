"use client";
import React, { Key } from "react";
import { Table } from "antd";

interface Token {
    key: string;
    value: string;
    hasChanged: boolean;
}

interface TokensDisplayTableProps {
    tokens: Token[];
}

const TokensDisplayTable: React.FC<TokensDisplayTableProps> = ({ tokens }) => {
    const columns = [
        {
            title: "Token",
            dataIndex: "key",
            key: "key",
            sorter: (a: Token, b: Token) => a.key.localeCompare(b.key),
        },
        {
            title: "Value",
            dataIndex: "value",
            key: "value",
        },
        {
            title: "hasChanged",
            dataIndex: "hasChanged",
            key: "hasChanged",
            render: (hasChanged: boolean) => (hasChanged ? "true" : "false"),
            filters: [
                { text: "true", value: true },
                { text: "false", value: false },
            ],
            onFilter: (value: boolean | Key, record: Token) => record.hasChanged === (value as boolean),
        },
    ];

    return (
        <Table
            dataSource={tokens}
            columns={columns}
            rowClassName={(record) => (record.hasChanged ? `bg-clark-green-100` : "")}
            rowHoverable={false}
            pagination={{ showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items` }}
            scroll={{ x: true }}
        />
    );
};

export default TokensDisplayTable;
