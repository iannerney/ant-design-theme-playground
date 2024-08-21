"use client";
import {
    Inter,
    Lato,
    Montserrat,
    Open_Sans,
    Playfair_Display,
    Poppins,
    Raleway,
    Roboto,
    Source_Sans_3,
    Source_Code_Pro,
    Ubuntu,
} from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import useAntDesignTheme from "@/hooks/useAntDesignTheme";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lato = Lato({ subsets: ["latin"], variable: "--font-lato", weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: "400" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto", weight: "400" });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], variable: "--font-source-code-pro" });
const sourceSansPro = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans-pro" });
const ubuntu = Ubuntu({ subsets: ["latin"], variable: "--font-ubuntu", weight: "400" });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { parentTheme } = useAntDesignTheme();
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${lato.variable} ${montserrat.variable} ${openSans.variable} ${playfair.variable} ${poppins.variable} ${raleway.variable} ${roboto.variable} ${sourceCodePro.variable} ${sourceSansPro.variable} ${ubuntu.variable}`}
            >
                <ConfigProvider theme={parentTheme}>
                    <AntdRegistry>{children}</AntdRegistry>
                </ConfigProvider>
            </body>
        </html>
    );
}
