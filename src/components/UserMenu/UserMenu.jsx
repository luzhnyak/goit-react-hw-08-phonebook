import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { useEffect } from 'react';
import { setCredentials } from 'redux/authSlice';
import { useLogoutMutation } from 'redux/authAPI';
import { getUser } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { name } = useSelector(getUser);
  //   const user = useGetCurrentUserQuery();

  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     console.log(user);
  //     if (!token) return;
  //     const credentials = {
  //       name: user.data.name,
  //       isLoginIn: true,
  //     };
  //     dispatch(setCredentials(credentials));
  //   }, [dispatch]);

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
      isLoginIn: false,
    };

    dispatch(setCredentials(credentials));

    navigate('/login');
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={name}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={name} src="/static/images/avatar/2.jpg" />
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
