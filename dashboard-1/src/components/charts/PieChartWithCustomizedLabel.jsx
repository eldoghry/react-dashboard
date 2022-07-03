import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import "./PieChartWithCustomizedLabel.scss";

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

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function PieChartWithCustomizedLabel({ title, data }) {
  return (
    <div className="chart">
      <h1 className="title">{title}</h1>

      <div className="chartBody">
        <ResponsiveContainer width={200} height={200}>
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => {
                return (
                  <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="legend">
          <span className="legendItem active">active</span>
          <span className="legendItem inactive">inactive</span>
          <span className="legendItem suspended">suspended</span>
        </div>
      </div>
    </div>
  );
}

export default PieChartWithCustomizedLabel;
