import "./chart.scss";

import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart() {
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
    <div className="chart">
      <h1 className="title">Last 6 month (Revenue)</h1>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
