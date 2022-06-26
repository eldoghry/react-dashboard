import Chart from "../charts/Chart";
import "./user.scss";
import { Link } from "react-router-dom";
import { height } from "@mui/system";

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
              src="https://cdn.gamer-network.net/2021/articles/2021-03-04-14-47/Edd_Coates_Headshot.jpg"
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
      <div className="bottom"></div>
    </div>
  );
}

export default User;
