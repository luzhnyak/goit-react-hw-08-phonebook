import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import SaveIco from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';

import { setOpenModal } from 'redux/modalSlice';
import { useAddContactMutation, useGetContactsQuery } from 'redux/api';
import { Formik } from 'formik';

export const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const dispatch = useDispatch();

  const isNameHas = name => {
    return contacts.some(contact => contact.name === name);
  };

  const handleSubmit = ({ name, number }) => {
    if (isNameHas(name)) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    try {
      addContact({ name, number });
      dispatch(setOpenModal(false));
    } catch (error) {
      toast.error(`Some error.`);
    }
  };

  return (
    <Box m={1}>
      <Formik
        initialValues={{ name: '', value: '' }}
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          /* and other goodies */
        }) => (
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
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name || ''}
            />

            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="Number"
              type="text"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.number || ''}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '16px',
              }}
            >
              <LoadingButton
                variant="contained"
                margin="normal"
                type="submit"
                color="success"
                loading={isLoading}
                loadingPosition="end"
                endIcon={<SaveIco />}
              >
                Add contact
              </LoadingButton>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
