import { createContext, useEffect, useState, useContext } from 'react';
import { fetchContacts } from 'fetchers';
import useSWR from 'swr';

const ContactsDataCtx = createContext({});

export const ContactsDataProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const { data, error } = useSWR('/', fetchContacts);

  // useEffect(() => {
  //   if (data?.statusCode && data?.statusCode !== 200)
  //     setAppErrors({
  //       ...data,
  //       message: `Tying to fetch products in productd provider: ${data?.message}`,
  //     });
  // }, [data]);

  useEffect(() => {
    if (data?.ok)
      setContacts(
        data.data.sort((a, b) => a.last_name.localeCompare(b.last_name))
      );
  }, [data]);

  return (
    <ContactsDataCtx.Provider
      value={{ contacts, isLoading: !error && !data?.ok, error }}
    >
      {children}
    </ContactsDataCtx.Provider>
  );
};

const useContactsData = () => {
  return useContext(ContactsDataCtx);
};

export default useContactsData;
