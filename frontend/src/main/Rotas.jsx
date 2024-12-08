import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from "../componente/home/Home"
import Usuario from '../componente/usuario/Usuario'

const componente = props => (
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/usuario" element={<Usuario />} />
       <Route path="*" element={<Home />} />
    </Routes>
   );
   
export default componente;