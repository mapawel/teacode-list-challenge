import React, { useState, useEffect, useCallback } from 'react';
import useSWR from 'swr';
import { fetchContacts } from 'fetchers';
import Heading from 'components/organisms/Heading';
import ListTemplate from 'components/templates/ListTemplate';
import CardItem from 'components/molecules/CardItem';

const MainListView = () => {
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
      <Heading searchContact={searchContact} />
      <ListTemplate>
        {filtered?.length &&
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
          ))}
      </ListTemplate>
    </>
  );
};

MainListView.propTypes = {};

export default MainListView;
