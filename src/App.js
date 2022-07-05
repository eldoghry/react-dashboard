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
import { useStateContext } from "./context/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { IconButton, Tooltip } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ThemeSetting from "./components/ui/ThemeSetting";

const theme = createTheme({});

function App() {
  const { currentColor, activeMenu, setThemeSettingMenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex bg-light-gray h-screen w-screen relative">
          {/* sidebar */}
          <div
            className={`flex fixed h-screen bg-white dark:bg-main-dark-bg shadow-lg ease duration-300 ${
              activeMenu ? "w-72" : "w-0"
            }`}
          >
            <Sidebar />
          </div>

          <div className="absolute bottom-7 right-7">
            <Tooltip title="settings" style={{ background: currentColor }}>
              <IconButton
                className=" text-white"
                onClick={() => setThemeSettingMenu(false)}
              >
                <SettingsOutlinedIcon />
              </IconButton>
            </Tooltip>
          </div>

          <ThemeSetting />

          {/* container */}
          <div className={`w-full ${activeMenu ? "ml-72" : ""}`}>
            <Navbar />
          </div>
        </div>

        {/* <Navbar />

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
                </Routes>
              </main>
            </div>
          </Grid>
        </Grid> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
