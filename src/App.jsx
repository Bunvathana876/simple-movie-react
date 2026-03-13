import Home from "./pages/Home";
import Welcome from "./pages/welcome";
import {Routes, Route} from "react-router-dom"
import "./css/App.css";

function App() {
  return (
    <div className="main-containe">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
