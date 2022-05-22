import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./components/MainComponent";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function App() {
  return (
    <div style={{ backgroundColor: "#e6e6e6" }}>
      <MainComponent />
    </div>
  );
}

export default App;
