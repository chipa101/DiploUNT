import React from "react";
import '../styles/components/pages/NosotrosPage.css'; 

const NosotrosPage = (props) => {
    return (
<main className="holder">
        <div className="Historia">
            <h2>Historia</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptate quasi deserunt dolor aliquid
                quae, vel alias similique fuga quos, quidem debitis qui iure maiores dolorem? Voluptate natus sapiente
                perferendis?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus odit nobis, ratione tempore
                expedita iusto numquam sequi. Omnis non perferendis saepe eaque laudantium suscipit alias aut? Nesciunt
                ad obcaecati in!
            </p>
        </div>

        <div className="Staff">
            <h2>Staff</h2>
            <div className="Personas">
                <div className="Persona">
                    <img src="Imagenes/nosotros/nosotros1.jpg" alt="Juan Gomez"/>
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere unde adipisci,
                        reiciendis, necessitatibus repellat eius beatae nulla nostrum ab laboriosam earum totam eveniet
                        repudiandae obcaecati! Maiores fuga distinctio iure!
                    </p>
                </div>
                <div className="Persona">
                    <img src="Imagenes/nosotros/nosotros2.jpg" alt="Maria Paula"/>
                    <h5>Maria Paula</h5>
                    <h6>Contadora</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere unde adipisci,
                        reiciendis, necessitatibus repellat eius beatae nulla nostrum ab laboriosam earum totam eveniet
                        repudiandae obcaecati! Maiores fuga distinctio iure!
                    </p>
                </div>
                <div className="Persona">
                    <img src="Imagenes/nosotros/nosotros3.jpg" alt="Ignacio Chavez"/>
                    <h5>Ignacio Chavez</h5>
                    <h6>Sistemas </h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere unde adipisci,
                        reiciendis, necessitatibus repellat eius beatae nulla nostrum ab laboriosam earum totam eveniet
                        repudiandae obcaecati! Maiores fuga distinctio iure!
                    </p>
                </div>
                <div className="Persona">
                    <img src="Imagenes/nosotros/nosotros4.jpg" alt="Ema Fernandez"/>
                    <h5>Ema Fernandez</h5>
                    <h6>Marketing</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere unde adipisci,
                        reiciendis, necessitatibus repellat eius beatae nulla nostrum ab laboriosam earum totam eveniet
                        repudiandae obcaecati! Maiores fuga distinctio iure!
                    </p>
                </div>
            </div>
        </div>
    </main>    
    )
}

export default NosotrosPage;