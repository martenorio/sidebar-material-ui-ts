import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/google-logo-11-1024x334.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { grey, blueGrey } from '@mui/material/colors';


export default function TopBar({ sidebarState, setSidebar }: { sidebarState: boolean, setSidebar(v: boolean): void }) {
  return (
    <Box sx={{ flexGrow: 1, boxShadow: "none" }}>
      <AppBar position="static" sx={{ backgroundColor: grey[100], color: blueGrey[800], boxShadow: "none" }}>
        <Toolbar sx={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", paddingY:1 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setSidebar(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <img src={logo} height="60px" />
          </Box>
          {/* <Typography variant="h5" component="div">
            News
          </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={() => setSidebar(true)}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}