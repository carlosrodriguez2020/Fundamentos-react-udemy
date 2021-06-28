import Contador from './components/Contador'
import Cards from './components/Cards';
import './App.css';

function App() {
  return (
    <div className="App-header">
    <Contador inicial={5} />
    <Cards></Cards>
    </div>
  );
}

export default App;
