import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <div>navbar</div>
        <div>home</div>
      </div>
    </div>
  );
}

export default App;
