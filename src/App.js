import { useState } from 'react';
import './App.css';
import Exo1 from './components/Exo1';
import Exo2 from './components/Exo2';
import Exo3 from './components/Exo3';
import Exo4 from './components/Exo4';
import Exo5 from './components/Exo5';

function App() {

  let [click, setClick] = useState(0)
  const nbrClick = () => {
    setClick(click+1)
  }

  return (
    <div className="App">
      <h1>Exercice Hook Events</h1>
      <Exo1 click={click} handleClick={nbrClick} />
      <Exo2 />
      <Exo3 />
      <Exo4 />
      <Exo5 />
    </div>
  );
}

export default App;
