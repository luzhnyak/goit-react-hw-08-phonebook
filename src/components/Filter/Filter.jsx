import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
// import { FilterInput } from './Filter.styled';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = event => {
    return dispatch(setFilter(event.target.value));
  };

  return (
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
    />
  );
};
