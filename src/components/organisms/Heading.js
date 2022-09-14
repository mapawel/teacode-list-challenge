import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  banerWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '96%',
    maxWidth: '1800px',
    margin: '0 auto',
  },
  baner: {
    backgroundColor: theme.palette.secondary.main,
    padding: '3rem 0',
  },
  heading: {
    color: theme.palette.text.light,
    marginRight: '2rem',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '30rem',
  },
  icon: {
    color: theme.palette.text.light,
    height: '4rem',
    width: '4rem',
    marginRight: '1rem',
  },
}));

const Heading = ({ searchContact }) => {
  const classes = useStyles();

  return (
    <Box className={classes.baner}>
      <Box className={classes.banerWrapper}>
        <Typography variant="h1" className={classes.heading}>
          Contacts
        </Typography>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onChange={(e) => searchContact(e)}
        >
          <SearchIcon className={classes.icon} />
          <TextField
            id="search"
            name="search"
            label="find contact..."
            variant="outlined"
            color="primary"
            className={classes.input}
          />
        </form>
      </Box>
    </Box>
  );
};

export default Heading;
