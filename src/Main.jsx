import React from "react";
import Navbar from "./Navbar";
import Home from "./components/Home";
import About from "./components/About";

import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
export default function Main() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/contact" Component={Contact} />
            <Route path="about" Component={About} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}
