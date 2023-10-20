import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ContactForm } from 'components/Contacts/ContactForm';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenModal } from 'redux/modalSlice';
import { getOpenModal } from 'redux/selectors';

const Modal = () => {
  const openModal = useSelector(getOpenModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpenModal(false));
  };

  return (
    <div>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>Add contact</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
