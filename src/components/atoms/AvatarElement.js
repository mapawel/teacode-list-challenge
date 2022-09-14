import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  avatar: {
    border: `1px solid ${theme.palette.grey[400]}`,
  },
}));

const AvatarElement = ({ avatar, name }) => {
  const classes = useStyles();

  return (
    <ListItemAvatar>
      <Avatar
        className={classes.avatar}
        alt={`Avatar of ${name}`}
        src={avatar}
      />
    </ListItemAvatar>
  );
};

export default AvatarElement;
