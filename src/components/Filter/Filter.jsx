import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Box, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = event => {
    return dispatch(setFilter(event.target.value));
  };

  return (
    <Box m={1}>
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        label="Filter"
        type="text"
        name="filter"
        placeholder="Find contacts by name"
        value={filter}
        onChange={handleFilterChange}
        color="success"
      />
    </Box>
  );
};
