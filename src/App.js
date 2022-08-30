import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Principal from "./components/Principal"
import Produtos from "./components/Produtos"
import Sobre from "./components/Sobre"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Principal />} path={"/"} exact />
        <Route element={<Produtos />} path={"/produtos"} exact />
        <Route element={<Sobre />} path={"/sobre"} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App