import { Route, Routes } from "react-router-dom";
import "./App.css";
import CubeContainer from "./components/cube/CubeContainer";
import XrCubeContainer from "./components/xr-cube/XrCubeContainer";
import XrGalleryContainer from "./components/xr-gallery/XrGalleryContainer";
import XrHitCubeContainer from "./components/xr-hit-cube/XrHitCubeContainer";
import XrHitModelContainer from "./components/xr-hit-model/XrHitModelContainer";
import XrOverlayContainer from "./components/xr-overlay/XrOverlayContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<XrGalleryContainer />} />
      <Route path="/cube" element={<CubeContainer />} />
      <Route path="/xr-cube" element={<XrCubeContainer />} />
      <Route path="/xr-hit-cube" element={<XrHitCubeContainer />} />
      <Route path="/xr-hit-model" element={<XrHitModelContainer />} />
      <Route path="/xr-overlay" element={<XrOverlayContainer />} />
      <Route path="/xr-gallery" element={<XrGalleryContainer />} />
    </Routes>
  );
}

export default App;
