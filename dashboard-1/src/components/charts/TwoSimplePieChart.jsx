import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

import "./TwoSimplePieChart.scss";

// { name: "pedning", value: 22314 },
// { name: "review", value: 1400 },
// { name: "progress", value: 1400 },
// { name: "away", value: 1400 },

function getColor(status) {
  let color = "";
  switch (status) {
    case "active" || "delivered":
      color = "#4caf50";
      break;

    case "delivered":
      color = "#4caf50";
      break;

    case "inactive":
      color = "#ff9800";
      break;

    case "suspended":
      color = "#dc004e";
      break;

    case "canceled":
      color = "#dc004e";
      break;

    default:
      color = "#FF8042";
      break;
  }

  return color;
}

// const data01 = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
//   { name: "Group E", value: 278 },
//   { name: "Group F", value: 189 },
// ];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

function TwoSimplePieChart({ title, data }) {
  return (
    <div className="chart">
      <h1 className="title">{title}</h1>
      <ResponsiveContainer width={250} height={250}>
        <PieChart width={250} height={250}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data02}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label

            // {data02.map((entry, index) => {
            //   console.log(entry);
            //   return (
            //     <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
            //   );
            // })}
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TwoSimplePieChart;
