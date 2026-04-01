import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import App          from "./App";
import ProfileGhaura from "./pages/profilgaw";
import ProfileRil   from "./pages/profilril";
import ProfileDel   from "./pages/profildel";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"             element={<App />} />
        <Route path="/profile/gaw"  element={<ProfileGhaura />} />
        <Route path="/profile/ril"  element={<ProfileRil />} />
        <Route path="/profile/del"  element={<ProfileDel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);