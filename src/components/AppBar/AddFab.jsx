import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { setOpenModal } from 'redux/modalSlice';
import { useDispatch } from 'react-redux';

const AddFab = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(setOpenModal(true));
  };

  return (
    <Fab
      sx={{
        position: 'absolute',
        display: { xs: 'flex', md: 'none' },
        bottom: 16,
        right: 16,
        color: 'common.white',
        bgcolor: 'green',
        '&:hover': {
          bgcolor: 'darkGreen',
        },
      }}
      aria-label="Add contacts"
      color="green"
      onClick={handleOpenModal}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddFab;
