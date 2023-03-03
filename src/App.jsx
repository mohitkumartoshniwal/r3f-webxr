import { Route, Routes } from "react-router-dom";
import "./App.css";
import CubeContainer from "./components/cube/CubeContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CubeContainer />} />
      <Route path="/cube" element={<CubeContainer />} />
    </Routes>
  );
}

export default App;
