import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Container,
  List,
  ListItem,
  Tooltip,
  ListItemText,
  Toolbar,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Logo from "../../images/logo.svg";
import Image from "next/image";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [userMenuItems, setUserMenuItems] = useState(null);
  const [userMenu, setUserMenu] = useState(null); //side profile menu

  // ------Define Hearder/navigation items
  const Pages = [
    { label: "Home", to: "/home" },
    { label: "Menu", to: "/menu" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const ProfileSettings = ["Profile", "Dashboard", "Logout"]; // ------Define Profile Setting items

  return (
    <>
      {/* -----------------------------------------TopBar/Header- for md,lg Screen -------------------------------------------> */}
      <AppBar component="nav" position="sticky">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <MenuIcon />
          </IconButton>

          <Box color={"goldenrod"} component="div" sx={{ flexGrow: 1 }}>
            <Image src={Logo} alt="logo" height={"70"} width="250" />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <List
              className="navigation-menu"
              sx={{
                display: "flex",
                flexDirection: "row",
                cursor: "pointer",
              }}
            >
              {Pages.map((item, index) => (
                <ListItem
                  key={index}
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <Link href={item.to}>
                    <ListItemText primary={item.label} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={(e) => setUserMenu(e.currentTarget)}
                sx={{ p: 0 }}
              >
                <Avatar alt="Profile Img" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={userMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(userMenu)}
              onClose={() => setUserMenu(null)}
            >
              {ProfileSettings.map((setting) => (
                <MenuItem key={setting} onClick={() => setUserMenuItems(null)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ------------------------------------------------Side Bar/For Sm Screen ----------------------------------------------> */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(!mobileOpen)}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
            },
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Image src={Logo} alt="logo" height={"70"} width="200" />
            <Divider /> {/* ---------for hr/vr Line---------- */}
            {/* -------------------Create SideBar Nevigation for Items---------------- */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <List>
                {Pages.map((item, index) => (
                  <ListItem key={index}>
                    <Link href={item.to}>
                      <ListItemText primary={item.label} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
