import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

const HomePage = () => {
  const { isLoginIn } = useSelector(getUser);

  return (
    <>
      {isLoginIn && <ContactForm />}
      {isLoginIn && <ContactList />}
    </>
  );
};

export default HomePage;
