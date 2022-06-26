import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/dashboard/Dashboard";
import Order from "./components/order/Order";
import Single from "./components/single/Single";
import New from "./components/new/New";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="container">
          <Navbar />

          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/orders" element={<Order />} />

              <Route exact path="/products">
                <Route exact path="new" element={<New />} />
              </Route>

              <Route path="users">
                <Route exact path="new" element={<New />} />
                <Route exact path=":userid" element={<Single />} />
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
      </div>
    </Router>
  );
}

export default App;
