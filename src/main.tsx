import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "flowbite";

import Layout from "./components/layout/Layout/Layout";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Reservas from "./pages/Reservas/Reservas"
import Carrito from "./pages/Carrito/Carrito";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/menu/*" element={<Menu/>}>
            <Route index element={MenuIndex />} />
            <Route path="Entradas" element={Entradas />} />
          </Route>
          <Route path="/reservas" element={<Reservas/>} />
          <Route path="/carrito" element={<Carrito/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);