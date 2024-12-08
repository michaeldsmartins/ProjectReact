import React from 'react'
import './Logo.css'
import logo from '../../img/logo.svg'
import { Link } from 'react-router-dom';

const componente = props => (
    <aside className='logo'>
       <Link to="/" className="logo">
       <img src={logo} alt='logo' />
       </Link>
    </aside>
);
export default componente;