import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Produtos from "./pages/produtos/Produtos"
import CadastrarProdutos from "./pages/produtos/CadastrarProduto"
import Saidas from "./pages/saida/Saidas"
import SaidaProduto from "./pages/saida/SaidaProduto";
import Emprestimos from "./pages/emprestimos/Emprestimos";
import VisualizarProduto from "./pages/produtos/VisualizarProduto";
import EmprestimoProduto from "./pages/emprestimos/EmprestimoProduto"

function RoutesApp() {
   return(
       <Routes>
           <Route path="/" element = { <Home/> } exact/>

           <Route path="/produtos" element = { <Produtos/> } />
           <Route path="/cadastrarProdutos" element = { <CadastrarProdutos/> } />
           <Route path="/visualizarProduto/:idProduto" element = { <VisualizarProduto/> } />
           <Route path="/visualizarProduto" element={<Navigate to="/produtos" />} />

           <Route path="/saidas" element = { <Saidas/> } />
           <Route path="/saidaProduto" element = { <SaidaProduto/> } />

           <Route path="/emprestimos" element = { <Emprestimos/> } />
           <Route path="/emprestimoProduto" element = { <EmprestimoProduto/> } />
       </Routes>
   )
}

export default RoutesApp;