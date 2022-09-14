import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useSWR from 'swr';
import { fetchContacts } from 'fetchers';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    width: '96%',
    maxWidth: '1800px',
    margin: '0 auto',
  },
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
  list: {
    maxWidth: '600px',
  },
  listItem: {},
  card: {
    boxShadow: `3px 5px 18px -3px ${theme.palette.grey[200]}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    '&>p:first-of-type': {
      marginRight: '0.5rem',
    },

    '&:hover': {
      boxShadow: `3px 5px 12px -6px ${theme.palette.secondary.light}`,
    },
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '30rem',
  },
  checkbox: {
    marginLeft: 'auto',
  },
  avatar: {
    border: `1px solid ${theme.palette.grey[400]}`,
  },
  nameBox: {
    display: 'flex',
    gap: '0.5rem',
  },
  icon: {
    color: theme.palette.text.light,
    height: '4rem',
    width: '4rem',
    marginRight: '1rem',
  },
}));

const MainListView = () => {
  const classes = useStyles();
  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState(contacts);
  const [checkedIds, setCheckedIds] = useState([]);
  const { data } = useSWR('/', fetchContacts);

  const toggleCheckId = useCallback(
    (id) => {
      if (checkedIds.includes(id))
        return setCheckedIds(checkedIds.filter((el) => el !== id));

      setCheckedIds([...checkedIds, id]);
    },
    [checkedIds]
  );

  const searchContact = (e) => {
    const searched = e.target.value;
    const regexp = new RegExp(searched, 'ig');

    setFiltered(
      contacts.filter(
        ({ last_name, first_name }) =>
          last_name.match(regexp) || first_name.match(regexp)
      )
    );
  };

  useEffect(() => {
    if (data?.ok)
      setContacts(
        data.data.sort((a, b) => a.last_name.localeCompare(b.last_name))
      );
  }, [data]);

  useEffect(() => {
    setFiltered(contacts);
  }, [contacts]);

  useEffect(() => {
    console.log(
      checkedIds.length
        ? `IDs of checked contacts: ${checkedIds}`
        : 'No checked contacts.'
    );
  }, [checkedIds]);

  return (
    <>
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
      <Box className={classes.pageWrapper}>
        <List className={classes.list}>
          {filtered?.length &&
            filtered?.map(({ id, first_name, last_name, email, avatar }) => (
              <ListItem className={classes.listItem} key={id}>
                <Card
                  className={classes.card}
                  onClick={() => toggleCheckId(id)}
                >
                  <ListItemAvatar>
                    <Avatar
                      className={classes.avatar}
                      alt={`Avatar of ${first_name}`}
                      src={avatar}
                    />
                  </ListItemAvatar>
                  <Typography variant="body1">{first_name}</Typography>
                  <Typography variant="body1">{last_name}</Typography>

                  <Checkbox
                    className={classes.checkbox}
                    checked={checkedIds.indexOf(id) !== -1}
                  />
                </Card>
              </ListItem>
            ))}
        </List>
      </Box>
    </>
  );
};

MainListView.propTypes = {};

export default MainListView;
