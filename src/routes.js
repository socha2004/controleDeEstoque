import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home/Home";
import Produtos from "./pages/produtos/Produtos"

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Produtos }  path="/produtos" />
       </BrowserRouter>
   )
}

export default Routes;