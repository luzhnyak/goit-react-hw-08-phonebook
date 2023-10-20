import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'openModal',
  initialState: false,
  reducers: {
    setOpenModal(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setOpenModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
