import { userLogOutThunk } from 'components/redux/thunk';
import React from 'react';
import { useDispatch } from 'react-redux';
import css from './ButtonLogOut.module.css';
import { Button } from '@mui/material';
const ButtonLogOut = () => {
  const dispatch = useDispatch();
  const onButtonClick = event => {
    dispatch(userLogOutThunk());
  };
  return (
    <div className={css.buttonLogOut}>
      <Button
        variant="outlined"
        className={css.button_logOut}
        sx={{ color: '#fff' }}
        onClick={onButtonClick}
        type="button"
      >
        Log out
      </Button>
    </div>
  );
};

export default ButtonLogOut;
