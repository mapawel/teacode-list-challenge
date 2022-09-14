import React from 'react';
import Card from '@material-ui/core/Card';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FullName from 'components/atoms/FullName';
import AvatarElement from 'components/atoms/AvatarElement';

const useStyles = makeStyles((theme) => ({
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
  checkbox: {
    marginLeft: 'auto',
  },
}));

const CardItem = ({
  avatar,
  last_name,
  first_name,
  id,
  toggleCheckId,
  checkedIds,
}) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem}>
      <Card className={classes.card} onClick={() => toggleCheckId(id)}>
        <AvatarElement avatar={avatar} name={last_name} />
        <FullName first_name={first_name} last_name={last_name} />
        <Checkbox
          className={classes.checkbox}
          checked={checkedIds.indexOf(id) !== -1}
        />
      </Card>
    </ListItem>
  );
};

export default CardItem;
