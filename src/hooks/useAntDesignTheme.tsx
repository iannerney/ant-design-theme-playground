"use client";
import { ThemeConfig, theme } from "antd";

const useAntDesignTheme = () => {
    const initialTheme: ThemeConfig = {
        // Design Tokens: https://ant.design/docs/react/customize-theme#customize-design-token
        // Seed Tokens: https://ant.design/docs/react/customize-theme#seedtoken
        token: {
            colorPrimary: "#328677", // Clark Green
            colorBgBase: "#ffffff", // White
            colorLink: "#328677", // Clark Green
        },

        // Preset Algorithms: https://ant.design/docs/react/customize-theme#use-preset-algorithms
        algorithm: theme.defaultAlgorithm,

        // Component Tokens: https://ant.design/docs/react/customize-theme#customize-component-token
        components: {},
    };

    return {
        initialTheme,
    };
};

export default useAntDesignTheme;
