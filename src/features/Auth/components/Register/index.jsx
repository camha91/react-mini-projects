import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
  onSubmit: PropTypes.func,
};

Register.defaultProps = {
  onSubmit: null,
};

function Register({ onSubmit }) {
  function handleSubmit(values) {
    console.log('Form Submit: ', values);
  }

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
