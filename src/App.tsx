import { BrowserRouter, Route, Routes } from "react-router";

import Home from "@/pages/Home";

import Sidebar from "@features/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
