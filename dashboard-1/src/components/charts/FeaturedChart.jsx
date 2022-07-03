import "./featuredChart.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function FeaturedChart() {
  return (
    <div className="featured">
      <h1 className="title">total revenue</h1>
      <div className="featuredContainer">
        <CircularProgressbar
          value={75}
          text={`${75}%`}
          className="progressbar"
          strokeWidth={3}
        />

        <p>Total sales made today</p>
        <p className="amount">$420</p>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          iusto dicta asperiores iure aspernatur et repellendus
        </span>
      </div>
    </div>
  );
}

export default FeaturedChart;
