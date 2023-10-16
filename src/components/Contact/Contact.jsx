import { FaTimes, FaUserCircle } from 'react-icons/fa';
import { Button, Item, Name, Number } from './Contact.styled';
import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/operations';
import { useDeleteContactMutation } from 'redux/contactsAPI';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';
import PersonIcon from '@mui/icons-material/Person';

export const Contact = ({ id, name, number }) => {
  const [deleteContact, deleteInfo] = useDeleteContactMutation();
  const dispatch = useDispatch();
  const handleDelete = () => deleteContact(id);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  return (
    <ListItem
      secondaryAction={
        <LoadingButton
          edge="end"
          aria-label="delete"
          onClick={handleDelete}
          title={`Delete ${name}`}
          loading={deleteInfo.isLoading}
          variant="outlined"
        >
          <DeleteIcon />
        </LoadingButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={number} />
    </ListItem>
    // <Item>
    //   <FaUserCircle size="40px" color={getRandomHexColor()} />
    //   <div>
    //     <Name>{name}</Name>
    //     <Number href={'tel:' + number}>{number}</Number>
    //   </div>
    //   <IconButton type="button" onClick={handleDelete} title={`Delete ${name}`}>
    //     <FaTimes />
    //   </IconButton>
    // </Item>
  );
};
