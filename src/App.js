import './App.css';
import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
    </Routes>
  );
}

export default App;
