import { useState, useEffect, useCallback, startTransition } from 'react';

const useFilters = () => {
  const [contacts, setContacts] = useState();
  const [filtered, setFiltered] = useState(contacts);
  const [checkedIds, setCheckedIds] = useState([]);
  const [inputError, setInputError] = useState('');

  const toggleCheckId = useCallback(
    (id) => {
      if (checkedIds.includes(id))
        return setCheckedIds(checkedIds.filter((el) => el !== id));

      setCheckedIds([...checkedIds, id]);
    },
    [checkedIds]
  );

  const searchContact = (e) => {
    setInputError('');
    const lettersRegexp = /^[A-Za-z]+$/;
    const searched = e.target.value;
    if (!searched.match(lettersRegexp) && searched !== '')
      return setInputError('only letters allowed');
    const regexp = new RegExp(searched, 'ig');

    startTransition(() => {
      setFiltered(
        contacts.filter(
          ({ last_name, first_name }) =>
            last_name.match(regexp) || first_name.match(regexp)
        )
      );
    });
  };

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

  return {
    checkedIds,
    searchContact,
    toggleCheckId,
    filtered,
    setFiltered,
    setContacts,
    inputError,
  };
};

export default useFilters;
