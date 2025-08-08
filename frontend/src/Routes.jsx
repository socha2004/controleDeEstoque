import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Produtos from "./pages/produtos/Produtos"

function RoutesApp() {
   return(
       <Routes>
           <Route path="/" element = { <Home/> } exact/>
           <Route path="/produtos" element = { <Produtos/> } />
           {/* <Route path="/controle" element = { <Controle/> } />
           <Route path="/saida" element = { <SaidaMaterial/> } />
           <Route path="/emprestimo" element = { <EmprestimoMaterial/> } /> */}
       </Routes>
   )
}

export default RoutesApp;