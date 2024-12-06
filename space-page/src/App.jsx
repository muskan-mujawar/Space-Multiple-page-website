import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FirstPage from "./home";
import Destination from "./destination";
import Crew from "./crew";
import Tech from "./tech";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/tech" element={<Tech />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
