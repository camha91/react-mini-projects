import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

Login.defaultProps = {
  closeDialog: null,
};

function Login({ closeDialog }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmit(values) {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      // close dialog
      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      console.log('Failed to Login:', error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  }

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
