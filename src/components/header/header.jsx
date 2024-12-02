import React from "react";
import { Button } from "@consta/uikit/Button";
import { NavLink } from "react-router-dom";
import AppPage from "../../const";
import "./Header.css";
import { Layout } from "@consta/uikit/Layout";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);

  return (
    <Layout>
      <div className="header">
        <div className="header-container">
          {user.isAuthenticated ? (
            <div className="header-group left">
              <NavLink to={AppPage.main} className="header-button">
                <Button label="Главная страница" />
              </NavLink>
              <NavLink to={AppPage.services} className="header-button">
                <Button label="Услуги компании" />
              </NavLink>
            </div>
          ) : (
            <h3>Вы не зарегистрированы</h3>
          )}
          <div className="header-group right">
            {!user.isAuthenticated ? (
              <NavLink to={AppPage.login} className="header-button">
                <Button label="Вход" />
              </NavLink>
            ) : (
              <NavLink to={`${AppPage.userinfo}${user.id}`} className="header-button">
                <Button label="Профиль" />
              </NavLink>
            )}
          </div>
        </div>
        <hr />
      </div>
    </Layout>
  );
};

export default Header;
