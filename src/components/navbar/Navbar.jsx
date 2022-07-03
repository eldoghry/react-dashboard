import "./navbar.scss";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircle, Search } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import { alpha, makeStyles } from "@material-ui/core/styles";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

const useStyles = makeStyles((theme) => ({}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          className="logo"
        >
          <Link to="/">Admin Dashboard</Link>
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" } }} className="action">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error" className="badge">
              <MailIcon className="icon" />
            </Badge>
          </IconButton>

          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon className="icon" />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
          >
            {/* <AccountCircle /> */}
            <Avatar
              alt="avatar"
              src="https://v4.mui.com/static/images/avatar/2.jpg"
            />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            // aria-controls={mobileMenuId}
            aria-haspopup="true"
            // onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>

    // <div className="navbar">
    //   <div className="search">
    //     <input type="text" placeholder="Search ... " />
    //     <SearchOutlinedIcon className="icon" />
    //   </div>
    //   <div className="actions">
    //     <div className="action lang">
    //       <span className="langTitle">English</span>
    //       <LanguageOutlinedIcon className="icon" />
    //     </div>

    //     <div className="action notfication">
    //       <NotificationsNoneOutlinedIcon className="icon" />
    //       <div className="counter">1</div>
    //     </div>

    //     <div className="action message">
    //       <ChatBubbleOutlineOutlinedIcon className="icon" />
    //       <div className="counter">20</div>
    //     </div>

    //     <img
    //       src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //       alt=""
    //       className="avatar"
    //     />
    //   </div>
    // </div>
  );
}

export default Navbar;
