import "./order.scss";
import { makeStyles } from "@material-ui/core/styles";
import VerticalStepper from "../ui/VerticalStepper";
import BasicTable from "../table/BasicTable";
import Stepper from "../ui/Stepper";

function Order() {
  const orderHistory = {
    pending: Date.now(),
    review: Date.now(),
  };

  return (
    <div className="order">
      <div className="top">
        <div className="left">
          <h1 className="title">order info</h1>
        </div>
        <div className="right">
          <h1 className="title">Order History</h1>
          {/* <VerticalStepper history={orderHistory} /> */}
          <Stepper />
        </div>
      </div>
      <div className="bottom">
        <BasicTable title="order details" />
      </div>
    </div>
  );
}

export default Order;
