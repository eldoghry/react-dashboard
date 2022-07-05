import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";

export const links = [
  {
    title: "main",
    links: [
      {
        name: "dashboard",
        icon: <DashboardIcon />,
      },

      {
        name: "stats",
        icon: <AssessmentOutlinedIcon />,
      },
    ],
  },

  {
    title: "list",
    links: [
      {
        name: "users",
        icon: <PersonOutlineIcon />,
      },
      {
        name: "orders",
        icon: <PaymentOutlinedIcon />,
      },
      {
        name: "products",
        icon: <PersonOutlineIcon />,
      },
    ],
  },

  {
    title: "services",
    links: [
      {
        name: "admins",
        icon: <SupervisorAccountOutlinedIcon />,
      },
      {
        name: "config",
        icon: <SettingsOutlinedIcon />,
      },
      {
        name: "user",
        icon: <AccountCircleOutlinedIcon />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];
