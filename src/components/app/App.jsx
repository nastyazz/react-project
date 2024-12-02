import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ServicePage from '../../pages/service-page/ServicePage';
import ServiceDetailPage from '../../pages/service-detail-page/ServiceDetailPage';
import MainPage from '../../pages/main-page/MainPage';
import MainLayout from '../../layouts/main-layout/MainLayout';
import { AppRoute } from '../../const';
import {Provider, useSelector} from "react-redux";
import LoginPage from '../../pages/login-page/LoginPage';
import userStore from "../../store/user-store/UserStore.jsx";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return isAuthenticated ? children : <Navigate to={AppRoute.login} replace={true} />;
}

const App = function() {
  return (
    <Theme preset={presetGpnDefault}>
      <Provider store={userStore}>
      <BrowserRouter>
          <Routes>
              <Route path={AppRoute.main} element={<MainLayout/>}>
                <Route index element={<MainPage/>}/>
                <Route path={AppRoute.services} element={<PrivateRoute><ServicePage></ServicePage></PrivateRoute>}></Route>
                <Route path={AppRoute.detail} element={<PrivateRoute><ServiceDetailPage/></PrivateRoute>}></Route>
                <Route path={AppRoute.login} element={<LoginPage/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
      </Provider>
    </Theme>
  );
}

export default App