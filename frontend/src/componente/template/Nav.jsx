import React from "react"
import './Nav.css'
import { Link } from 'react-router-dom'

const componente = props => (
    <aside className="menu-area">
        <nav className='menu'>
        <Link to='/'>
            <i className='fa fa-home'></i> Inicio
            </Link>
            <Link to='/usuario'>
            <i className='fa fa-user'></i> Usuarios
            </Link>
         </nav>     
    </aside>
);

export default componente;