import React from 'react';
import Typography from '@material-ui/core/Typography';

const FullName = ({ last_name, first_name }) => {
  return (
    <>
      <Typography variant="body1">{first_name}</Typography>
      <Typography variant="body1">{last_name}</Typography>
    </>
  );
};

export default FullName;
