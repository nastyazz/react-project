import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "../../components/header/header";
import './MainLayout.css'
const MainLayout = () => {
    return (
        <div className="hr">
            <Header />
            <main style={{ paddingTop: '80px' }}>
            <hr />
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;