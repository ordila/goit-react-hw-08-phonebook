import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Home from './pages/Home/Home';
import css from './app.module.css';
import { NavLink, Route, Routes } from 'react-router-dom';

import { currentUserThunk } from './redux/thunk';
import ButtonLogOut from './ButtonLogOut/ButtonLogOut';

const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);
  const userData = useSelector(state => state.user.userData);

  return (
    <div className={css.container}>
      <nav className={css.navigation_bar}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.active} ${css.link}` : css.link
          }
          to="/"
        >
          Home
        </NavLink>
        {userData ? (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.active} ${css.link}` : css.link
              }
              to="/contacts"
            >
              Contacts
            </NavLink>
            <ButtonLogOut />
          </>
        ) : (
          <div className={css.login_registration_links}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.active} ${css.link}` : css.link
              }
              to="registration"
            >
              Registration
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.active} ${css.link}` : css.link
              }
              to="login"
            >
              Login
            </NavLink>
          </div>
        )}
      </nav>

      <Suspense fallback={<h2>LOADING....</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="registration" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
};
