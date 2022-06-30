import "./order.scss";
import { makeStyles } from "@material-ui/core/styles";
import VerticalStepper from "../ui/VerticalStepper";
import BasicTable from "../table/BasicTable";
import Stepper from "../ui/Stepper";
import { Fab, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
}));

function Order() {
  const classes = useStyles();

  const orderHistory = {
    pending: Date.now(),
    review: Date.now(),
  };

  return (
    <div className="order">
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        {/* LEFT CONTAINER */}
        <Grid item xs={10}>
          <Grid item xs={12} className="top">
            <div className="left">
              <h1 className="title">order info</h1>
              <div className="groups">
                <div className="group">
                  <div className="item">
                    <label>ID: </label>
                    <span>123123</span>
                  </div>
                  <div className="item">
                    <label>username: </label>
                    <Link to="/">
                      <span>Mohamed Magdy</span>
                    </Link>
                  </div>
                  <div className="item">
                    <label>date: </label>
                    <span>23 May 2022</span>
                  </div>

                  <div className="item">
                    <label>shipping address: </label>
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos debitis delectus
                    </span>
                  </div>
                </div>

                <div className="group">
                  <div className="item">
                    <label>order status: </label>
                    <span>away</span>
                  </div>
                  <div className="item">
                    <label>payment method: </label>
                    <span>cod</span>
                  </div>
                  <div className="item">
                    <label>shipping method: </label>
                    <span>express</span>
                  </div>

                  <div className="item">
                    <label>expected delivery date: </label>
                    <span>23 May 2022</span>
                  </div>
                </div>

                <div className="group">
                  <div className="item">
                    <span>PAID</span>
                  </div>

                  <div className="item">
                    <label>subtotal: </label>
                    <span>523.5</span>
                  </div>

                  <div className="item">
                    <label>discount: </label>
                    <span>20</span>
                    <span className="coupan">(xyza)</span>
                  </div>

                  <div className="item">
                    <label>tax: </label>
                    <span>0.0</span>
                  </div>

                  <div className="item">
                    <label>total: </label>
                    <span>503.5</span>
                  </div>
                </div>
              </div>

              <div className="editBtn">
                <Fab
                  color="secondary"
                  aria-label="edit"
                  size="small"
                  onClick={() => console.log("edit order")}
                >
                  <EditIcon />
                </Fab>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} className="bottom">
            <BasicTable title="order details" />
          </Grid>
        </Grid>

        {/* RIGHT CONTAINER */}
        <Grid item xs={2}>
          <div className="right">
            <h1 className="title">Order History</h1>
            {/* <VerticalStepper history={orderHistory} /> */}
            <Stepper />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Order;
