import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCredentials } from 'redux/authSlice';
import { useLogoutMutation } from 'redux/api';
import { getUser } from 'redux/selectors';

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { name } = useSelector(getUser);

  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    setAnchorElUser(null);
    logout();
    const credentials = {
      name: null,
      token: null,
      isLoggedIn: false,
      isRefreshing: false,
    };

    dispatch(setCredentials(credentials));
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={name}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={name} children={name[0]} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;
