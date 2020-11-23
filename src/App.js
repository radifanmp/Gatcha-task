import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap'
import './App.css';

function App() {

  const [random1, setRandom1] = useState(0)
  const [random2, setRandom2] = useState(0)
  const [random3, setRandom3] = useState(0)
  const [random4, setRandom4] = useState(0)

  function handleClick(){
    const max = 15;
    const min = 1;
    setRandom1( min + Math.floor(Math.random(1) * Math.floor(max)))
    setRandom2( min + Math.floor(Math.random(1) * Math.floor(max)))
    setRandom3( min + Math.floor(Math.random(1) * Math.floor(max)))
    setRandom4( min + Math.floor(Math.random(1) * Math.floor(max)))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h2>Gacha Task</h2>
        </p>
          <Card style={{ marginBottom: "20px", color:"black" }}>
            <Card body>
              <p>The number is: {random1}</p>
              <p>The number is: {random2}</p>
              <p>The number is: {random3}</p>
              <p>The number is: {random4}</p>
            </Card>
          </Card>
          <Button variant="primary" onClick={handleClick}>
            Gacha
          </Button>
      </header>
    </div>
  );
}

export default App;
