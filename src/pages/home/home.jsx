import React from 'react';

import Button from '@material-ui/core/Button';

const Home = (props) => {
  console.log(props)
  const { user, onSignOutButtonClick } = props;
  return (
    <div>
      Home
      { user && 
        <Button onClick={() => onSignOutButtonClick()}>
          Sign out
        </Button>
      }
    </div>
  );
}

export default Home;
