import "./widget.scss";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import { Link } from "react-router-dom";

function Widget({ type }) {
  let data;

  switch (type) {
    case "users":
      data = {
        title: "users",
        value: 100,
        link: <Link to="users">see all users</Link>,
        isMoney: false,
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{ backgroundColor: "#FADBD8", color: "#E74C3C" }}
          />
        ),
      };
      break;

    case "orders":
      data = {
        title: "orders",
        value: 100,
        link: <Link to="orders">see all orders</Link>,
        isMoney: false,
        icon: (
          <PaymentOutlinedIcon
            className="icon"
            style={{ backgroundColor: "#D4E6F1", color: "#2471A3" }}
          />
        ),
      };
      break;

    case "products":
      data = {
        title: "products",
        value: 100,
        link: <Link to="products">see all products</Link>,
        isMoney: false,
        icon: (
          <StoreOutlinedIcon
            className="icon"
            style={{ backgroundColor: "#FCF3CF", color: "#B7950B" }}
          />
        ),
      };
      break;

    case "sales":
      data = {
        title: "sales",
        value: 100,
        link: <Link to="sales">see all sales</Link>,
        isMoney: true,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "#D4EFDF", color: "#239B56" }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="number">
          {data.isMoney ? "$" : ""}
          {data.value}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
}

export default Widget;
