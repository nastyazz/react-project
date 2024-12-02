import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "../../components/header/header";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <main style={{ paddingTop: '80px' }}>
            <hr />
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;