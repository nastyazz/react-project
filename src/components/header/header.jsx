import { Button } from "@consta/uikit/Button";
import { NavLink } from "react-router-dom";
import AppRoute from "../../const.js"; // Убедитесь, что путь к файлу правильный
import './header.css';
import { Layout } from "@consta/uikit/Layout";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user); // Убираем типизацию

  return (
    <Layout>
      <div className="navbar">
        <div className="navbar-container">
          {user.isAuthenticated ? (
            <div className="navbar-group left">
              <NavLink to={AppRoute.main} className={"navbar-button"}>
                <Button label={"Главная страница"} />
              </NavLink>
              <NavLink to={AppRoute.services} className={"navbar-button"}>
                <Button label={"Услуги компании"} />
              </NavLink>
            </div>
          ) : (
            <h3>Вы не зарегистрированы</h3>
          )}
          <div className="navbar-group right">
            {!user.isAuthenticated ? (
              <NavLink to={AppRoute.login} className={"navbar-button"}>
                <Button label={"Вход"} />
              </NavLink>
            ) : (
              <NavLink to={AppRoute.userinfo} className={"navbar-button"}>
                <Button label={user.email} />
              </NavLink>
            )}
          </div>
        </div>
        <hr />
      </div>
    </Layout>
  );
};

export default Navbar;
