import { userLogOutThunk } from 'components/redux/thunk';
import React from 'react';
import { useDispatch } from 'react-redux';

const ButtonLogOut = () => {
  const dispatch = useDispatch();
  const onButtonClick = event => {
    dispatch(userLogOutThunk());
  };
  return (
    <>
      <button onClick={onButtonClick} type="button">
        Log out
      </button>
    </>
  );
};

export default ButtonLogOut;
