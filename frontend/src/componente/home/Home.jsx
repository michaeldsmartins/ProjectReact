import React from "react";
import Main from '../template/Main'


const componente =  props => (
    <Main icon='home' title='Inicio'
        subtitle='Segundo capitulo de React'>
        <div className='display-4'> bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema exemplificador da construçao do cadastro em React</p>
    </Main>  
    );

    export default componente;