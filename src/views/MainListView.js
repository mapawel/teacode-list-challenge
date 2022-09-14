import React, { useEffect } from 'react';
import Heading from 'components/organisms/Heading';
import ListTemplate from 'components/templates/ListTemplate';
import CardItem from 'components/molecules/CardItem';
import useContactsData from 'providers/useContactsData';
import Typography from '@material-ui/core/Typography';
import FetchStatus from 'components/molecules/FetchStatus';
import useFilters from 'hooks/useFilters';

const MainListView = () => {
  const { contacts, isLoading, error } = useContactsData();
  const { checkedIds, searchContact, toggleCheckId, filtered, setContacts } =
    useFilters();

  useEffect(() => {
    setContacts(contacts);
  }, [contacts, setContacts]);

  return (
    <>
      <Heading searchContact={searchContact} />
      {(error || isLoading) && (
        <FetchStatus error={error} isLoading={isLoading} />
      )}
      <ListTemplate>
        {filtered?.length && !error ? (
          filtered?.map(({ id, first_name, last_name, avatar }) => (
            <CardItem
              key={id}
              avatar={avatar}
              last_name={last_name}
              first_name={first_name}
              id={id}
              toggleCheckId={toggleCheckId}
              checkedIds={checkedIds}
            ></CardItem>
          ))
        ) : (
          <>
            {!isLoading && !error ? (
              <li>
                <Typography variant="body2">preparing...</Typography>
              </li>
            ) : null}
          </>
        )}
      </ListTemplate>
    </>
  );
};

MainListView.propTypes = {};

export default MainListView;
