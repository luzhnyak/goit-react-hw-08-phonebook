import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
// import { Ul } from './ContactsList.styled';
import { useGetContactsQuery } from 'redux/contactsAPI';

import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const getFilteredContacts = (contacts, filter) => {
  return contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const { data: contacts, isLoading, error } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  // Виводимо помилку
  useEffect(() => {
    if (error) toast.error(error.data.message);
  }, [error]);

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && contacts && <Filter />}
      {!isLoading && contacts && (
        <Demo>
          <List component="nav" aria-label="mailbox folders">
            {filteredContacts?.map(contact => (
              <Contact
                id={contact.id}
                key={contact.id}
                name={contact.name}
                number={contact.number}
              />
            ))}
          </List>
        </Demo>
      )}
    </>
  );

  // return (
  //   <Ul>
  // {filteredContacts?.map(contact => (
  //   <li key={contact.id}>
  //     <Contact
  //       id={contact.id}
  //       name={contact.name}
  //       number={contact.number}
  //     />
  //   </li>
  // ))}
  //   </Ul>
  // );
};
