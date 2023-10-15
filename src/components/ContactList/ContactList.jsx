import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { Ul } from './ContactsList.styled';

const getFilteredContacts = (contacts, filter) => {
  return contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <Ul>
      {filteredContacts?.map(contact => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </Ul>
  );
};
