import Nav from "./Nav";

//No puedo agregar mas objetos, ejemplo 2 <p>. Tengo que usar un <div> para poder agrupar u otra etiqueta.
// tambien se puede poner {<> y </>} (fragment) y funciona igual
const Header = (props) => {
    return (
        <header>
            <h2>Hola soy un Titulo</h2>
            <Nav/>
            <p>hola soy la cabecera del sitio</p>
            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.</p>
        </header>

    )
}

export default Header; //No se ve en el sitio, para eso debo importarlo en App(padre)