import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div>home</div>
      </div>
    </div>
  );
}

export default App;
