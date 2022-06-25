import Widget from "../widget/Widget";
import "./dashboard.scss";

function Home() {
  return (
    <div className="dashboard">
      <div className="widgets">
        <Widget type="users" />
        <Widget type="orders" />
        <Widget type="products" />
        <Widget type="sales" />
      </div>
    </div>
  );
}

export default Home;
