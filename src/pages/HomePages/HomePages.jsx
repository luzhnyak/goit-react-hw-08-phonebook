import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useGetContactsQuery } from 'redux/contactsAPI';

const HomePage = () => {
  const { data: contacts, isLoading, error } = useGetContactsQuery();

  // Виводимо помилку
  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <>
      <ContactForm />

      {isLoading && <Loader />}
      {!isLoading && contacts && <Filter />}
      {!isLoading && contacts && <ContactList />}

      <Toaster position="top-right" />
    </>
  );
};
export default HomePage;
