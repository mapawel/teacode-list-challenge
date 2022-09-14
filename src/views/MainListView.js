import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import PageBlockWrapper from 'components/templates/PageBlockWrapper';
import useSWR from 'swr';
import { fetchContacts } from 'fetchers';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  list: {
    maxWidth: '600px',
  },
  listItem: {},
  card: {
    width: '100%',
    padding: '2rem 3rem',
    cursor: 'pointer',
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
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
    <PageBlockWrapper>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onChange={(e) => searchContact(e)}
      >
        <TextField
          id="search"
          name="search"
          label="find contact..."
          variant="outlined"
          color="secondary"
        />
      </form>
      <List className={classes.list}>
        {filtered?.length &&
          filtered?.map(
            ({ id, first_name, last_name, email, gender, avatar }) => (
              <ListItem className={classes.listItem} key={id}>
                <Card
                  className={classes.card}
                  onClick={() => toggleCheckId(id)}
                >
                  <ListItemAvatar>
                    <Avatar alt={`Avatar of ${first_name}`} src={avatar} />
                  </ListItemAvatar>
                  <Typography color="primary">{first_name}</Typography>
                  <Typography color="primary">{last_name}</Typography>
                  <Checkbox
                    edge="end"
                    checked={checkedIds.indexOf(id) !== -1}
                  />
                </Card>
              </ListItem>
            )
          )}
      </List>
    </PageBlockWrapper>
  );
};

MainListView.propTypes = {};

export default MainListView;
