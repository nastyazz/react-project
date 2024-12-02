import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "../../components/header/header";

const MainLayout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ paddingTop: '60px', flex: 1 }}>
                <Outlet />
            </main>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-line"></div>
                    <span className="footer-text">2024 Моя компания</span>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
