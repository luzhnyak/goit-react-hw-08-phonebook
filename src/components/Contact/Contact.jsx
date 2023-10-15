import { FaTimes, FaUserCircle } from 'react-icons/fa';
import { Button, Item, Name, Number } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  return (
    <Item>
      <FaUserCircle size="40px" color={getRandomHexColor()} />
      <div>
        <Name>{name}</Name>
        <Number href={'tel:' + number}>{number}</Number>
      </div>
      <Button type="button" onClick={handleDelete} title={`Delete ${name}`}>
        <FaTimes />
      </Button>
    </Item>
  );
};
