import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
// import { Ul } from './ContactsList.styled';
import { useGetContactsQuery } from 'redux/contactsAPI';

import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import List from '@mui/material/List';

const getFilteredContacts = (contacts, filter) => {
  return contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const { data } = useGetContactsQuery();
  const contacts = data;
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
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
