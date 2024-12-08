import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import'font-awesome/css/font-awesome.min.css'
import './App.css'
import Nav from '../componente/template/Nav'
import Logo from '../componente/template/Logo'
import Rotas from './Rotas'
import Footer from '../componente/template/Footer'

import { BrowserRouter } from 'react-router-dom'


const componente = props => (
    <BrowserRouter>
   <div className="app">
       <Logo />
       <Nav />
       <Rotas />
       <Footer />
   </div>
   </BrowserRouter>
);

export default componente;