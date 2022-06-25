import "./sidebar.scss";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import { Link } from "react-router-dom";



const Sidebar = () => {
  function removeActiveClass() {
    document
      .querySelectorAll("a")
      .forEach((element) => element.classList.remove("active"));
  }

  function handleActiveLink(e) {
    const el = e.target;
    removeActiveClass();
    el.closest("a").classList.add("active");
  }

  return (
    <div className="sidebar">
      <div className="logo">echop dashboard</div>

      <ul className="items">
        <span className="title">main</span>
        <Link to="/" className="active" onClick={handleActiveLink}>
          <li className="item">
            <DashboardIcon className="icon" />
            <span>dashboard</span>
          </li>
        </Link>

        {/* <li className="item">
          <AssessmentOutlinedIcon className="icon" />
          <span>stats</span>
        </li> */}

        <span className="title">list</span>
        <Link to="/users" onClick={handleActiveLink}>
          <li className="item">
            <PersonOutlineIcon className="icon" />
            <span>users</span>
          </li>
        </Link>

        <Link to="/products" onClick={handleActiveLink}>
          <li className="item">
            <StoreOutlinedIcon className="icon" />
            <span>products</span>
          </li>
        </Link>

        <Link to="/orders" onClick={handleActiveLink}>
          <li className="item">
            <PaymentOutlinedIcon className="icon" />
            <span>orders</span>
          </li>
        </Link>

        <span className="title">services</span>

        <Link to="/admins" onClick={handleActiveLink}>
          <li className="item">
            <SupervisorAccountOutlinedIcon className="icon" />
            <span>admins</span>
          </li>
        </Link>

        <Link to="/config" onClick={handleActiveLink}>
          <li className="item">
            <SettingsOutlinedIcon className="icon" />
            <span>config</span>
          </li>
        </Link>

        <span className="title">user</span>

        <Link to="/profile" onClick={handleActiveLink}>
          <li className="item">
            <AccountCircleOutlinedIcon className="icon" />
            <span>profile</span>
          </li>
        </Link>

        <Link to="/logout" onClick={handleActiveLink}>
          <li className="item">
            <ExitToAppOutlinedIcon className="icon" />
            <span>logout</span>
          </li>
        </Link>
      </ul>

      <div className="colorOptions">
        <span className="title">color options</span>
        <div className="options">
          <span className="colorOption"></span>
          <span className="colorOption"></span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
