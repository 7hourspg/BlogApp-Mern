import React, { useState, createContext } from "react";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Regsiter from "./Regsiter";
import Upload from "./Upload";
import Navbar from "./Components/Navbar";
import Art from "./Pages/Art";
import Cinema from "./Pages/Cinema";
import Sports from "./Pages/Sports";
import Science from "./Pages/Science";
import Footer from "./Footer";
import Write from "./Pages/Write";
import Articel from "./Pages/Articel";
export const globalContext = createContext();

function App() {
  const [name, setName] = useState({});

  const ProctedRoute = ({ children }) => {
    if (!name?.firstName) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  console.log(name);
  return (
    <>
      <BrowserRouter>
        <globalContext.Provider value={{ setName, name }}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <ProctedRoute>
                  <Home />
                </ProctedRoute>
              }
            />
            <Route path="*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Regsiter />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/art" element={<Art />} />
            <Route path="/cinema" element={<Cinema />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/science" element={<Science />} />
            <Route
              path="/write"
              element={
                <ProctedRoute>
                  <Write />
                </ProctedRoute>
              }
            />
            <Route path="/article/:id" element={<Articel />} />
          </Routes>
          <Footer />
        </globalContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
