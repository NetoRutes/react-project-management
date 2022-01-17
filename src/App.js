import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Wellington'
  
  function sominha(a, b) {
    return a+b
  }

  const url = 'https://via.placeholder.com/200'

  return (
    
    <div className="App">
      <h1>Olá {name}!</h1>
      <p>Estou aprendendo a programar em React!!!! Eba!!!</p>
      <p>Soma manual: {2+2}</p>
      <p>Soma na função: {sominha(2,2)}</p>
      <img src={url} alt="Minha imagem"/>
      <HelloWorld/>
    </div>
  );
}

export default App;
