import React from "react";
import '../../styles/components/layouts/Header.css';

const Header = (props) => {
    return (
        <header>
        <div class="holder">
            <img src="Imagenes/logo.png" width="100" alt="Logo Transporte X"/>
            <h1>Transporte X</h1>
        </div>
        </header>
    )
}

export default Header;