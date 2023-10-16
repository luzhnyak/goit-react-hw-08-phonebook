import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
// import { Container } from './App.styled';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import ResponsiveAppBar from './AppBar/AppBar';
import { useGetContactsQuery } from 'redux/contactsAPI';
import { Container } from '@mui/material';

export const App = () => {
  // const dispatch = useDispatch();

  const { data: contacts, isLoading, error } = useGetContactsQuery();

  // const contacts = useSelector(getContacts);
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // Викликаємо операцію
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // Виводимо помилку
  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <Container maxWidth="sm">
      <ResponsiveAppBar />
      <Section>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {isLoading && <Loader />}
        {!isLoading && contacts && <Filter />}
        {!isLoading && contacts && <ContactList />}
      </Section>
      <Toaster position="top-right" />
    </Container>
  );
};
