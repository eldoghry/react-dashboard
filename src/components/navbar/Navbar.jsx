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
  Tooltip,
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
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useStateContext } from "./../../context/ContextProvider";

const useStyles = makeStyles((theme) => ({}));

const NavButton = ({ color, dotColor, title, icon, cb }) => (
  <Tooltip title={title}>
    <IconButton
      onClick={cb}
      style={{ color: color }}
      className="relative text-sm"
    >
      {icon}
      <span
        className="w-2.5 h-2.5 rounded-full absolute top-1 right-1"
        style={{ background: dotColor }}
      />
    </IconButton>
  </Tooltip>
);

function Navbar() {
  const classes = useStyles();

  const { currentColor, activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className="p-3 bg-white dark:bg-main-dark-bg flex items-center justify-between">
      <div className="flex items-center gap-2">
        <NavButton
          title="menu"
          color={currentColor}
          icon={<MenuOutlinedIcon />}
          cb={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        />

        {!activeMenu && (
          <Link
            to="/"
            className="text-lg font-bold capitalize"
            style={{ color: currentColor }}
          >
            Admin dashboard
          </Link>
        )}
      </div>

      <div className="flex items-center gap-2">
        <NavButton
          title="notification"
          color={currentColor}
          dotColor={currentColor}
          icon={<NotificationsNoneOutlinedIcon />}
          cb={() => {}}
        />

        <NavButton
          title="message"
          color={currentColor}
          dotColor={currentColor}
          icon={<ChatBubbleOutlineOutlinedIcon />}
          cb={() => {}}
        />

        <Tooltip title="profile">
          <Avatar
            onClick={() => {}}
            alt="avatar"
            className="cursor-pointer"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </Tooltip>
      </div>
    </div>
    // <AppBar position="fixed" className="navbar">
    //   <Toolbar>
    //     {/* <IconButton
    //       size="large"
    //       edge="start"
    //       color="inherit"
    //       aria-label="menu"
    //       sx={{ mr: 2 }}
    //     >
    //       <MenuIcon />
    //     </IconButton> */}
    //     <Typography
    //       variant="h6"
    //       component="div"
    //       sx={{ flexGrow: 1 }}
    //       className="logo"
    //     >
    //       <Link to="/">Admin Dashboard</Link>
    //     </Typography>

    //     <Box sx={{ display: { xs: "none", md: "flex" } }} className="action">
    //       <IconButton
    //         size="large"
    //         aria-label="show 4 new mails"
    //         color="inherit"
    //       >
    //         <Badge badgeContent={4} color="error" className="badge">
    //           <MailIcon className="icon" />
    //         </Badge>
    //       </IconButton>

    //       <IconButton
    //         size="large"
    //         aria-label="show 17 new notifications"
    //         color="inherit"
    //       >
    //         <Badge badgeContent={17} color="error">
    //           <NotificationsIcon className="icon" />
    //         </Badge>
    //       </IconButton>
    //       <IconButton
    //         size="large"
    //         edge="end"
    //         aria-label="account of current user"
    //         // aria-controls={menuId}
    //         aria-haspopup="true"
    //         // onClick={handleProfileMenuOpen}
    //         color="inherit"
    //       >
    //         {/* <AccountCircle /> */}
    //         <Avatar
    //           alt="avatar"
    //           src="https://v4.mui.com/static/images/avatar/2.jpg"
    //         />
    //       </IconButton>
    //     </Box>
    //     <Box sx={{ display: { xs: "flex", md: "none" } }}>
    //       <IconButton
    //         size="large"
    //         aria-label="show more"
    //         // aria-controls={mobileMenuId}
    //         aria-haspopup="true"
    //         // onClick={handleMobileMenuOpen}
    //         color="inherit"
    //       >
    //         <MoreIcon />
    //       </IconButton>
    //     </Box>
    //   </Toolbar>
    // </AppBar>
  );
}

export default Navbar;
