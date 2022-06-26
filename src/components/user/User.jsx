import Chart from "../charts/Chart";
import "./user.scss";
import { Link } from "react-router-dom";
import DataTable from "../table/DataTable";

function User() {
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
      username: "mma",
      joinDate: Date.now().toString(),
      status: "active",
    },
    { id: 2, username: "mma", joinDate: Date.now(), status: "inactive" },
    { id: 3, username: "mma", joinDate: Date.now(), status: "active" },
    { id: 4, username: "mma", joinDate: Date.now(), status: "active" },
    { id: 5, username: "mma", joinDate: Date.now(), status: "suspended" },
    { id: 6, username: "mma", joinDate: Date.now(), status: "active" },
    { id: 7, username: "mma", joinDate: Date.now(), status: "suspended" },
  ];

  return (
    <div className="user">
      <div className="top">
        <div className="left">
          <h1 className="title">information</h1>
          <Link to="/" className="edit">
            edit
          </Link>

          <div className="container">
            <img
              src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
              alt="avatar"
              className="avatar"
            />
            <div className="info">
              <div className="item">
                <label htmlFor="name">name</label>
                <span className="name">Mohamed Magdy</span>
              </div>

              <div className="item">
                <label htmlFor="email">email</label>
                <span className="email">moh.mag.ali@gmail.com</span>
              </div>

              <div className="item">
                <label htmlFor="phone">phone</label>
                <span className="phone">+201143497899</span>
              </div>

              <div className="item">
                <label htmlFor="address">address</label>
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
        <DataTable rows={rows} type="users" title="Last Transactions" />
      </div>
    </div>
  );
}

export default User;
