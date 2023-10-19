import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/Contacts/ContactsList';

const HomePage = () => {
  const { isLoggedIn } = useSelector(getUser);

  return (
    <>
      {isLoggedIn && <ContactForm />}
      {isLoggedIn && <ContactsList />}
    </>
  );
};

export default HomePage;
