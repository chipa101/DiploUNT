import React from "react";
import '../styles/components/pages/HomePage.css';  

const HomePage = (props) => {
    return (
        <main className="holder">
        
        <div>
            <img src="Imagenes/home/img01.jpg" alt="Avion"/>
        </div>
        
        <div className="Columnas">    
            
            <section className="Bienvenidos"> 
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero maxime magni esse molestias
                    earum
                    necessitatibus omnis repellendus non. Reiciendis facilis ipsum mollitia autem nesciunt nemo esse
                    unde
                    eaque soluta.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere veritatis vel optio molestiae,
                    doloremque natus amet? Error, ipsum eveniet ratione minima quaerat sunt ea, officiis adipisci autem
                    beatae cupiditate!
                </p>
            </section>
            
            <section className="Testimonios">
                <h2>Testimonios</h2>
                <div className="Testimonio">
                    <span className="Cita">Simplemente Excelente</span>
                    <span className="Autor">Juan Gomez - Zapatos.com</span>
                </div>
            </section>

        </div>

    </main>
    
    )
}

export default HomePage;