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
  const {
    checkedIds,
    searchContact,
    toggleCheckId,
    filtered,
    setContacts,
    inputError,
  } = useFilters();

  useEffect(() => {
    setContacts(contacts);
  }, [contacts, setContacts]);

  return (
    <>
      <Heading searchContact={searchContact} inputError={inputError} />
      {(error || isLoading) && (
        <FetchStatus error={error} isLoading={isLoading} />
      )}
      <main>
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
                  <Typography variant="body2">nothing here ...</Typography>
                </li>
              ) : null}
            </>
          )}
        </ListTemplate>
      </main>
    </>
  );
};

MainListView.propTypes = {};

export default MainListView;
