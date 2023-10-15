import { useState } from 'react';
import { Input, Button, Form } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import toast from 'react-hot-toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);

  const isNameHas = name => {
    return contacts.some(contact => contact.name === name);
  };

  const handleChange = ({ name, value }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    if (isNameHas(name)) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));

    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={name}
          onChange={event => handleChange(event.target)}
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          required
          value={number}
          onChange={event => handleChange(event.target)}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
