import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Practice } from "./Components/Practice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Useeefect from "./Components/Useeefect";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Create from "./Components/CRUD/Create";
import { Read } from "./Components/CRUD/Read";
import { Update } from "./Components/CRUD/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/useEffect" element={<Useeefect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
