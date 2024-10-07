import './App.css';

// No va el js, en css si. 
import Header from './Componentes/Header'; //Contiente Nav
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className="App">
       <Header></Header> {/*Se peude escribir asi o: <Header/> */}
       <Footer/>
    </div>
  );
}

export default App;
