import React from "react";
import Home from "./Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ant Design Theme Playground",
    description:
        "This project is a playground for theming in AntD v5, and provides some code examples on how themes can be implemented.",
};

const HomePage: React.FC = () => {
    return <Home />;
};

export default HomePage;
