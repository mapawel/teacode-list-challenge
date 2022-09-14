import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  box: {
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'tomato',
    fontWeight: 'bold',
  },
  loading: {
    color: theme.palette.grey[400],
    fontWeight: 'bold',
  },
}));

const FetchStatus = ({ isLoading, error }) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      {isLoading && (
        <Typography className={classes.loading} variant="h4">
          loading...
        </Typography>
      )}
      {error && (
        <Typography className={classes.error} variant="h5">
          {`Error: ${error}`}
        </Typography>
      )}
    </Box>
  );
};

export default FetchStatus;
