import { currentUserThunk, loginUserThunk } from 'components/redux/thunk';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import css from './Login.module.css';
import { Button, TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
});
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
    <div className={css.login}>
      <form onSubmit={formSubmit}>
        <label className={css.label} htmlFor="email">
          <p className={css.title_email}>Your email</p>
          <input
            className={css.input}
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            // required
          />
        </label>
        <label className={css.label} htmlFor="name">
          <p className={css.title_password}>Your password</p>
          <input
            className={css.input}
            id="password"
            type="password"
            name="password"
            placeholder="Your password"
            // required
            // minLength={7}
          />
        </label>
        <Button
          className={css.button_login}
          sx={{ color: '#fff' }}
          type="submit"
          variant="outlined"
        >
          Let`s go!
        </Button>
      </form>
      <h6 className={css.reminder}>
        *Register if you don't have an account yet{' '}
      </h6>
    </div>
  );
};

export default Login;
