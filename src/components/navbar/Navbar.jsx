import "./navbar.scss";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";

function Navbar() {
  return (
    <div className="navbar">
      <div className="search">
        <input type="text" placeholder="Search ... " />
        <SearchOutlinedIcon className="icon" />
      </div>
      <div className="actions">
        <div className="action lang">
          <span className="title">English</span>
          <LanguageOutlinedIcon className="icon" />
        </div>

        <div className="action notfication">
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className="counter">1</div>
        </div>

        <div className="action message">
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <div className="counter">20</div>
        </div>

        <img
          src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
