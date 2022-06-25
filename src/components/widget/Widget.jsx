import "./widget.scss";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";

function Widget({ type }) {
  let data;

  switch (type) {
    case "users":
      data = {
        title: "users",
        value: 100,
        link: "see all users",
        isMoney: false,
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{ backgroundColor: "#F1948A", color: "#c10808" }}
          />
        ),
      };
      break;

    case "orders":
      data = {
        title: "orders",
        value: 100,
        link: "see all orders",
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
        link: "see all products",
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
        link: "see all sales",
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
