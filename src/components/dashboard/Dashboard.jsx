import Widget from "../widget/Widget";
import "./dashboard.scss";

import FeaturedChart from "../charts/FeaturedChart";
import Chart from "../charts/Chart";

function Home() {
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
    <div className="dashboard">
      <div className="widgets">
        <Widget type="users" />
        <Widget type="orders" />
        <Widget type="products" />
        <Widget type="sales" />
      </div>

      <div className="charts">
        <FeaturedChart />
        <Chart width={"100%"} height={400} data={data} title={'Last 6 month (Revenue)'}/>
      </div>
    </div>
  );
}

export default Home;
