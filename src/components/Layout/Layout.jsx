import ButtonLogOut from 'components/ButtonLogOut/ButtonLogOut';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Layout = () => {
  const userData = useSelector(state => state.user.userData);

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
    </>
  );
};
