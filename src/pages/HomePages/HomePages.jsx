import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';

import { ContactsList } from 'components/Contacts/ContactsList';
import Modal from 'components/Modal/Modal';

const HomePage = () => {
  const { isLoggedIn } = useSelector(getUser);

  return (
    <>
      {isLoggedIn && <ContactsList />}
      <Modal />
    </>
  );
};

export default HomePage;
