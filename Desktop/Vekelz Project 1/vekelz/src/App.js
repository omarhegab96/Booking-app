import "./App.css";
import { Route, Routes } from "react-router-dom";
import Application from "./components/app";
import Application2 from "./components/page2";
import SideMenu from "./components/sideMenu";
import NavBar from "./components/navBar";
import { useState } from "react";

function App() {
  const [page, setPage] = useState();
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
      <div>
        <SideMenu />
      </div>
      <div style={{ width: "100%" }}>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Application2 />} />
          <Route path="/booking" element={<Application />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
