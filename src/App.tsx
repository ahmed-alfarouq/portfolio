import { BrowserRouter, Route, Routes } from "react-router";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";

import Sidebar from "@features/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
