import Widget from "../widget/Widget";
import "./dashboard.scss";

import FeaturedChart from "../charts/FeaturedChart";
import Chart from "../charts/Chart";
import PieChartWithCustomizedLabel from "../charts/PieChartWithCustomizedLabel";
import TwoSimplePieChart from "../charts/TwoSimplePieChart";

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

  const usersStatistics = [
    { name: "active", value: 1400 },
    { name: "inactive", value: 300 },
    { name: "suspended", value: 300 },
  ];

  const ordersStatistics = [
    { name: "pedning", value: 22314 },
    { name: "review", value: 1400 },
    { name: "progress", value: 1400 },
    { name: "away", value: 1400 },
    { name: "delivered", value: 19300 },
    { name: "canceled", value: 300 },
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
        <Chart
          width={"100%"}
          height={400}
          data={data}
          title={"Last 6 month (Revenue)"}
        />
      </div>

      <div className="charts">
        <PieChartWithCustomizedLabel
          title={"Users Statistics"}
          data={usersStatistics}
        />

        <TwoSimplePieChart
          title={"Orders Statistics"}
          data={ordersStatistics}
        />
      </div>
    </div>
  );
}

export default Home;
