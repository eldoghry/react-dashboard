import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/dashboard/Dashboard";
import Order from "./components/order/Order";
import Orders from "./components/order/Orders";
import Users from "./components/user/Users";
import User from "./components/user/User";
// import Single from "./components/single/Single";
import New from "./components/new/New";
import Grid from "@material-ui/core/Grid";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />

          <Grid container spacing={2} className="container">
            <Grid item sm={2}>
              <Sidebar />
            </Grid>

            <Grid item sm={10} className="mainContainer">
              <div>
                <main>
                  <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/orders">
                      <Route exact path="" element={<Orders />} />
                      <Route exact path=":orderid" element={<Order />} />
                    </Route>

                    <Route exact path="/products">
                      <Route exact path="new" element={<New />} />
                    </Route>

                    <Route path="users">
                      <Route exact path="" element={<Users />} />
                      <Route exact path="new" element={<New />} />
                      <Route exact path=":userid" element={<User />} />
                    </Route>
                    {/* <Route exact path="/login" element={<Login />} />
                      <Route
                      exact
                      path="/recovery-password"
                      element={<RecoveryPassword />}
                      />
                      <Route path="*" element={<NotFound />} /> */}
                  </Routes>
                </main>
              </div>
            </Grid>
          </Grid>
          {/*eof container */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
