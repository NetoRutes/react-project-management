import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {
  const name = 'Renderização de Componentes com IF'
  
  // function sominha(a, b) {
  //   return a+b
  // }

  const url = 'https://via.placeholder.com/200'

  return (
    
    <div className="App">
      <SayMyName nome={name}/>
      {/* <Frase/>
      <img src={url} alt="Minha imagem"/>
      <HelloWorld/>
      <Pessoa nome="Rutes" idade="30" profissao="Software Engineer" foto="https://via.placeholder.com/200"/>
      <List/> */}
      <Evento numero={2}/>
      <Form />
      <Condicional />
    </div>
  );
}

export default App;
