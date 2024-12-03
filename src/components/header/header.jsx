import React from "react";
import { Button } from "@consta/uikit/Button";
import { NavLink } from "react-router-dom";
import AppRout from "../../const";
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
              <NavLink to={AppRout.main} className="header-button">
                <Button label="Главная страница" />
              </NavLink>
              <NavLink to={AppRout.services} className="header-button">
                <Button label="Услуги компании" />
              </NavLink>
            </div>
          ) : (
            <h3>Вы не зарегистрированы</h3>
          )}
          <div className="header-group right">
            {!user.isAuthenticated ? (
              <NavLink to={AppRout.login} className="header-button">
                <Button label="Вход" />
              </NavLink>
            ) : (
              <NavLink to={`${AppRout.userinfo}${user.id}`} className="header-button">
                <Button label={user.firstName + " " + user.lastName} />
              </NavLink>
            )}
          </div>
        </div>
        <hr className="full-width-line" />
      </div>
    </Layout>
  );
};

export default Header;