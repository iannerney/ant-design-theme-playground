"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import useAntDesignTheme from "@/hooks/useAntDesignTheme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { initialTheme } = useAntDesignTheme();
    return (
        <html lang="en">
            <body className={inter.className}>
                <ConfigProvider theme={initialTheme}>
                    <AntdRegistry>{children}</AntdRegistry>
                </ConfigProvider>
            </body>
        </html>
    );
}
