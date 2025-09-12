import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Produtos from "./pages/produtos/Produtos"
import CadastrarProdutos from "./pages/produtos/CadastrarProduto"
import Saidas from "./pages/controle/Saidas"
import Emprestimos from "./pages/emprestimos/Emprestimos";
import EditarProduto from "./pages/produtos/VisualizarProduto";

function RoutesApp() {
   return(
       <Routes>
           <Route path="/" element = { <Home/> } exact/>

           <Route path="/produtos" element = { <Produtos/> } />
           <Route path="/cadastrarProdutos" element = { <CadastrarProdutos/> } />
           <Route path="/editarProduto/:id" element = { <EditarProduto/> } />

           <Route path="/saidas" element = { <Saidas/> } />

           <Route path="/emprestimos" element = { <Emprestimos/> } />
       </Routes>
   )
}

export default RoutesApp;