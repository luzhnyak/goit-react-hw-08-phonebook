import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ContactsIcon from '@mui/icons-material/Contacts';

import UserMenu from 'components/AppBar/UserMenu';
import { setOpenModal } from 'redux/modalSlice';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const { name, isLoggedIn } = useSelector(getUser);
  const dispatch = useDispatch();

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenModal = () => {
    setAnchorElNav(null);
    dispatch(setOpenModal(true));
  };

  return (
    <AppBar position="static" color="success">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ContactsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/contacts"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PhoneBook
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {' '}
              {!isLoggedIn && (
                <MenuItem component={NavLink} to="login">
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              )}
              {!isLoggedIn && (
                <MenuItem component={NavLink} to="register">
                  <Typography textAlign="center">Register</Typography>
                </MenuItem>
              )}
              {isLoggedIn && (
                <MenuItem component="button" onClick={handleOpenModal}>
                  <Typography textAlign="center">Add</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>

          <ContactsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={NavLink}
            to="/contacts"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PhoneBook
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {!isLoggedIn ? (
              <>
                <Button
                  to="login"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  component={NavLink}
                >
                  Login
                </Button>
                <Button
                  to="register"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  component={NavLink}
                >
                  Register
                </Button>
              </>
            ) : (
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={handleOpenModal}
              >
                Add
              </Button>
            )}
          </Box>

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {name}
          </Typography>
          {isLoggedIn && <UserMenu />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
