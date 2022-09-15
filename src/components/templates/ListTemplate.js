import React from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    width: '96%',
    maxWidth: '1800px',
    margin: '0 auto',
  },
  list: {
    maxWidth: '600px',
  },
}));

const ListTemplate = ({ children }) => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.pageWrapper}>
      <List className={classes.list}>{children}</List>
    </Box>
  );
};

export default ListTemplate;
