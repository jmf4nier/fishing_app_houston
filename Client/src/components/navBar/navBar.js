// src/components/NavBar.js
// eslint-disable-next-line
import Link from "@material-ui/core/Link";
import { useAuth0 } from "../../react-auth0-spa";
import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
// eslint-disable-next-line
import NotificationsIcon from "@material-ui/icons/Notifications";
import MultipleSelect from './MultipleSelect'
import MoreIcon from "@material-ui/icons/MoreVert";
import HomeIcon from "@material-ui/icons/Home";
import history from "../../utils/History";
import { useDispatch } from "react-redux";
import { setSearchParams } from '../actions/searchBarActions'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    marginBottom: "1vh"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  logoutLink: {
    margin: 0,
    color: "white",
    fontSize: "1.5vh"
  },
  loginLink: {
    margin: 0,
    color: "white",
    fontSize: "1.5vh"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginLeft: '18%'
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function NavBar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const dispatch = useDispatch()
  // eslint-disable-next-line
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  // eslint-disable-next-line
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleMenuClose();
          history.push("/messages");
        }}
      >
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon style={{ marginBottom: "2vh" }} />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          history.push("/");
        }}
      >
        <IconButton color="inherit">
          <HomeIcon titleAccess="Home" style={{ marginBottom: "2vh" }} />
        </IconButton>
        <p>Home</p>
      </MenuItem>

      <MenuItem
        onClick={() => {
          history.push("/profile");
          handleMenuClose();
        }}
      >
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle style={{ marginBottom: "2vh" }} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {!isAuthenticated && (
            <IconButton
            aria-label="Login"
            onClick={() => loginWithRedirect({})}
          >
            <p className={classes.login}>Login</p>
          </IconButton>
           
          )}

          {isAuthenticated && (
             <IconButton aria-label="Logout" onClick={() => logout()}>
             <p className={classes.logout}>Logout</p>
           </IconButton>
          )}

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={(e)=> setSearchParams(dispatch, e.target.value)}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <MultipleSelect />
          <Typography className={classes.title} variant="h4" noWrap>
            Houston Fishing
          </Typography>
          <div className={classes.grow} />
          {isAuthenticated && (
            <span>
              <IconButton
                aria-label="show 4 new mails"
                color="inherit"
                onClick={() => history.push("/messages")}
              >
                <Badge badgeContent={4} color="secondary">
                  <MailIcon titleAccess="Messages" />
                </Badge>
              </IconButton>

              <IconButton
                onClick={() => history.push("/profile")}
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                color="inherit"
              >
                <AccountCircle titleAccess="Profile" />
              </IconButton>
            </span>
          )}
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit" onClick={() => history.push("/")}>
              <HomeIcon titleAccess="Home" fontSize="large" />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

// const NavBar = () => {
//   const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

//   return (
//     <div>
//       {!isAuthenticated && (
//         <button onClick={() => loginWithRedirect({})}>Log in</button>
//       )}

//       {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

//       {isAuthenticated && (
//         <span>
//           <Link to="/">Home</Link>&nbsp;
//           <Link to="/profile">Profile</Link>&nbsp;
//           <Link to="/external-api">External API</Link>

//         </span>
//       )}
//   ;</div>
// )};
