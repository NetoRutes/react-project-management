import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  const name = 'Wellington'
  
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
    </div>
  );
}

export default App;
