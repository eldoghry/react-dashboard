import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/dashboard/Dashboard";
import Order from "./components/order/Order";

import "./app.scss";
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
