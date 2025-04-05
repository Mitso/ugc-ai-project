import type { Route } from "./+types/Layout";
import { Outlet } from "react-router";

import Header from '@/components/header/Header';

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Home" },
        {   name: "Description", 
            content: "Home - Welcome to React Router!" 
        },
    ];
}

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
};

export default Layout;