import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';

import { ContactsList } from 'components/Contacts/ContactsList';
import Modal from 'components/Modal/Modal';
import AddFab from 'components/AppBar/AddFab';

const HomePage = () => {
  const { isLoggedIn } = useSelector(getUser);

  return (
    <>
      {isLoggedIn && <ContactsList />}
      <Modal />
      <AddFab />
    </>
  );
};

export default HomePage;
