import { signUpUserThunk } from 'components/redux/thunk';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import css from './Register.module.css';
import { Button } from '@mui/material';
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.user.userData);
  useEffect(() => {
    if (!userData) return;
    navigate('/contacts', { replace: true });
  }, [userData, dispatch, navigate]);

  const formSubmit = event => {
    event.preventDefault();

    const children = event.target.elements;
    const name = children.name.value;
    const email = children.email.value;
    const password = children.password.value;
    dispatch(signUpUserThunk({ name, email, password }));
    event.currentTarget.reset();
  };

  return (
    <div>
      <form className={css.register} onSubmit={formSubmit}>
        <label className={css.label} htmlFor="name">
          <p>Your name</p>
          <input
            className={css.input}
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            // required
          />
        </label>
        <label className={css.label} htmlFor="email">
          <p>Your email</p>
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
          <p>Your password</p>
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
          className={css.button_registration}
          sx={{ color: '#fff' }}
          type="submit"
          variant="outlined"
        >
          Let`s go!
        </Button>
      </form>
    </div>
  );
};

export default Register;
