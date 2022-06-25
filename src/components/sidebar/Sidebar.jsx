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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">echop dashboard</div>

      <ul className="items">
        <span className="title">main</span>
        <li className="item active">
          <DashboardIcon className="icon" />
          <span>dashboard</span>
        </li>

        <li className="item">
          <AssessmentOutlinedIcon className="icon" />
          <span>stats</span>
        </li>

        <span className="title">list</span>
        <li className="item">
          <PersonOutlineIcon className="icon" />
          <span>users</span>
        </li>

        <li className="item">
          <StoreOutlinedIcon className="icon" />
          <span>products</span>
        </li>

        <li className="item">
          <PaymentOutlinedIcon className="icon" />
          <span>orders</span>
        </li>

        <span className="title">services</span>

        <li className="item">
          <SupervisorAccountOutlinedIcon className="icon" />
          <span>admins</span>
        </li>

        <li className="item">
          <SettingsOutlinedIcon className="icon" />
          <span>config</span>
        </li>

        <span className="title">user</span>

        <li className="item">
          <AccountCircleOutlinedIcon className="icon" />
          <span>profile</span>
        </li>

        <li className="item">
          <ExitToAppOutlinedIcon className="icon" />
          <span>logout</span>
        </li>
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
