import { BrowserRouter, Route, Routes } from "react-router";

import Home from "@/pages/Home";
import About from "@/pages/About";

import Sidebar from "@features/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
