import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, Route, Routes } from 'react-router-dom';
import ButtonLogOut from './ButtonLogOut/ButtonLogOut';
import { currentUserThunk } from './redux/thunk';
import Home from './pages/Home';

const Contacts = lazy(() => import('./pages/Contacts'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.userData);

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {userData ? (
          <>
            <Link to="/contacts">Contacts</Link>
            <ButtonLogOut />
          </>
        ) : (
          <>
            <Link to="/registration">Registration</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
      <Suspense fallback={<h2>LOADING....</h2>}>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/contacts" element={<Contacts></Contacts>} />
          <Route path="/registration" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
};
