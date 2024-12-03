import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "../../components/header/header";
import AppRoute from "../../const";
import { Button } from "@consta/uikit/Button";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";



const MainLayout = () => {
    const user = useSelector((state) => state.user);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ paddingTop: '60px', flex: 1 }}>
                <Outlet />
            </main>
            <footer className="footer">
                <div className="footer-content">
                <div className="footer-left">
                    <NavLink to={AppRoute.main} className={"footer-button"}>
                        <Button label={"Главная страница"}></Button>
                    </NavLink>
                    {user.isAuthenticated ? (

                        <NavLink to={AppRoute.services} className={"footer-button"}>
                            <Button label={'Услуги компании'}></Button>
                        </NavLink>
                    ): (
                        <>
                        </>
                    )}
                </div>
                    <div className="footer-right">
                    <div className="footer-line"></div>
                    <p className="footer-text">2024 Моя компания</p>
                    </div>
                    </div>
            </footer>
        </div>
    );
};

export default MainLayout;