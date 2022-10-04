import React, { useState, createContext } from "react";
import Login from "./Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Regsiter from "./Regsiter";
export const globalContext = createContext();

function App() {
  const [name, setName] = useState({});
  const data=name?.firstName

  const ProctedRoute = ({ children }) => {
    if (!data) {
      return <Navigate to="/login" />;
    }
    return  children ;
  };
  return (
    <>
      <BrowserRouter>
        <globalContext.Provider value={{ setName, name }}>
          <Routes>
            <Route
              path="/"
              element={
                <ProctedRoute>
                  <Home />
                </ProctedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Regsiter />} />
          </Routes>
        </globalContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
