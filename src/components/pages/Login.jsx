import { currentUserThunk, loginUserThunk } from 'components/redux/thunk';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(currentUserThunk());
  const userData = useSelector(state => state.user.userData);
  useEffect(() => {
    if (!userData) return;
    navigate('/contacts', { replace: true });
  }, [userData, dispatch, navigate]);
  const formSubmit = event => {
    event.preventDefault();
    const children = event.target.elements;

    const email = children.email.value;
    const password = children.password.value;
    dispatch(loginUserThunk({ email, password }));
    event.currentTarget.reset();
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="email">
          <h2>Your email</h2>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            // required
          />
        </label>
        <label htmlFor="name">
          <h2>Your password</h2>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Your password"
            // required
            // minLength={7}
          />
        </label>
        <button type="submit">Let`s go!</button>
      </form>
      <h1>Register if you don't have an account yet </h1>
    </div>
  );
};

export default Login;
