import { useState } from 'react';
import { Input, Form } from './ContactForm.styled';
import Button from '@mui/material/Button';
import SaveIco from '@mui/icons-material/Save';

import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import toast from 'react-hot-toast';
import { useAddContactMutation } from 'redux/contactsAPI';
import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const [addContact, addInfo] = useAddContactMutation();

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

    // if (isNameHas(name)) {
    //   toast.error(`${name} is already in contacts.`);
    //   return;
    // }

    addContact({ name, number });

    reset();
  };

  return (
    <Box m={1}>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          label="Name"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={name}
          onChange={event => handleChange(event.target)}
        />

        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          label="Phone"
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          required
          value={number}
          onChange={event => handleChange(event.target)}
        />

        <LoadingButton
          variant="contained"
          margin="normal"
          type="submit"
          color="success"
          loading={addInfo.isLoading}
          loadingPosition="end"
          endIcon={<SaveIco />}
        >
          Add contact
        </LoadingButton>
      </form>
    </Box>
  );
};
