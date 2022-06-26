import Widget from "../widget/Widget";
import "./dashboard.scss";

import FeaturedChart from "../charts/FeaturedChart";
import Chart from "../charts/Chart";

function Home() {
  return (
    <div className="dashboard">
      <div className="widgets">
        <Widget type="users" />
        <Widget type="orders" />
        <Widget type="products" />
        <Widget type="sales" />
      </div>

      <div className="charts">
        <FeaturedChart />
        <Chart />
      </div>
    </div>
  );
}

export default Home;
