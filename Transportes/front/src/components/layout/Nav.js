import React from "react";
import '../../styles/components/layouts/Nav.css';
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div class="holder">
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined }>Home</NavLink></li>
                    <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined }>Nosotros</NavLink></li>
                    <li><NavLink to="/novedades" className={({ isActive }) => isActive ? "activo" : undefined }>Novedades</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined }>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;