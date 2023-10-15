import { FaPhoneSquare } from 'react-icons/fa';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <FaPhoneSquare size="40px" color="green" />
      <h1>
        <span>Phone</span>Book
      </h1>
    </Header>
  );
};
