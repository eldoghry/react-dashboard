import Chart from "../charts/Chart";
import "./user.scss";
import { Link } from "react-router-dom";
import DataTable from "../table/DataTable";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import CustomSnackbar from "../ui/CustomSnackbar";
import PersonIcon from "@mui/icons-material/Person";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const useStyles = makeStyles((theme) => ({
  modal: {
    width: 300,
    height: 250,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    backgroundColor: "white",
    color: "#555",
    padding: theme.spacing(2),
  },

  btn: {
    border: "1px solid !important",
  },
}));

function User() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [userStatus, setUserStatus] = useState("active");
  const data = [
    {
      name: "Jan",
      revenue: 4000,
    },
    {
      name: "Feb",
      revenue: 2210,
    },
    {
      name: "Mar",
      revenue: 3120,
    },
    {
      name: "Apr",
      revenue: 2000,
    },
    {
      name: "May",
      revenue: 720,
    },
    {
      name: "June",
      revenue: 1800,
    },
  ];

  const rows = [
    {
      id: 1,
      total: 924,
      count: 3,
      createdAt: Date.now().toString(),
      status: "pending",
    },

    {
      id: 2,
      total: 1025,
      count: 17,
      createdAt: Date.now().toString(),
      status: "delivered",
    },

    {
      id: 3,
      total: 90,
      count: 2,
      createdAt: Date.now().toString(),
      status: "canceled",
    },

    {
      id: 4,
      total: 135.5,
      count: 6,
      createdAt: Date.now().toString(),
      status: "away",
    },

    {
      id: 5,
      total: 135.5,
      count: 6,
      createdAt: Date.now().toString(),
      status: "processing",
    },
  ];

  const modalBody = (
    <form className="form" noValidate autoComplete="off">
      <Typography variant="h6" className="formItem">
        Edit User
      </Typography>
      <TextField id="password" label="password" className="formItem" />
      <InputLabel id="userStatus">Account Status</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        onChange={(e) => setUserStatus(e.target.value)}
        value={userStatus}
        className="formItem"
      >
        <MenuItem value={"active"}>Active</MenuItem>
        <MenuItem value={"inactive"}>Inactive</MenuItem>
        <MenuItem value={"suspended"}>Suspended</MenuItem>
      </Select>

      <div className="formActions formItem">
        <button onClick={() => {}} className="btn outline warning">
          update
        </button>
        <button onClick={() => setOpen(false)} className="btn outline danger">
          cancel
        </button>
      </div>
    </form>
  );

  return (
    <div className="user">
      <div className="top">
        <div className="left">
          <h1 className="title">information</h1>
          <div className="editBtn">
            <Fab
              color="secondary"
              aria-label="edit"
              size="small"
              onClick={() => setOpen(true)}
            >
              <EditIcon />
            </Fab>
          </div>
          {/* 
          <button
            className="edit"
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
          >
            edit
          </button> */}

          <div className="container">
            <img
              src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
              alt="avatar"
              className="avatar"
            />
            <div className="info">
              <div className="item">
                <span className="status active">active</span>
              </div>

              <div className="item">
                {/* <label htmlFor="name">
                name
                </label> */}
                <PersonIcon className="icon" />
                <span className="name">Mohamed Magdy</span>
              </div>

              <div className="item">
                {/* <label htmlFor="email">email</label> */}
                <EmailIcon className="icon" />
                <span className="email">moh.mag.ali@gmail.com</span>
              </div>

              <div className="item">
                {/* <label htmlFor="phone">phone</label> */}
                <PhoneAndroidIcon className="icon" />
                <span className="phone">+201143497899</span>
              </div>

              <div className="item">
                {/* <label htmlFor="address">address</label> */}
                <LocationOnIcon className="icon" />
                <span className="address">Robert Robertson, 1234 NW</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart
            data={data}
            height={200}
            width={"100%"}
            title="Last 6 month (Transactions)"
          />
        </div>
      </div>
      <div className="bottom">
        <DataTable rows={rows} type="transactions" title="Last Transactions" />
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={classes.modal}>{modalBody}</div>
      </Modal>

      <CustomSnackbar message={"user updated successfuly"} />
    </div>
  );
}

export default User;
