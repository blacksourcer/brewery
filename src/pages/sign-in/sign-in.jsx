import React from 'react';

import Button from '@material-ui/core/Button';

const SignIn = ({ user, onFormSubmit }) => {
  if (user) {
    return (
      <div>{user.email}</div>
    );
  }
  return (
    <Button variant="contained" color="primary" onClick={
      (e) => onFormSubmit('blacksourcer@gmail.com', '')
    }>
      Sign In
    </Button>
  );
}

export default SignIn;
