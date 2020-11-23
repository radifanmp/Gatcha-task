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
        <span style={{display:'flex', flexDirection: "row"}}>
          
          <Card style={{ marginBottom: "20px", marginRight: "10px", color:"black", width: "300px" }}>
            <Card body>
            <p style={{color:"#FFCC5C", fontWeight:"bold"}}>Ways Hub</p>
              <p>The number is: {random1}</p>
            </Card>
          </Card>

          <Card style={{ marginBottom: "20px", marginRight: "10px",color:"black", width: "300px" }}>
            <Card body>
            <p style={{color:"#CCB288", fontWeight:"bold"}}>Ways Beans</p>
              <p>The number is: {random2}</p>
              </Card>
          </Card>

          <Card style={{ marginBottom: "20px", marginRight: "10px",color:"black", width: "300px" }}>
            <Card body>          
            <p style={{color:"#b7eabd", fontWeight:"bold"}}>Ways Vin</p>
              <p>The number is: {random3}</p>
              </Card>
          </Card>

          <Card style={{ marginBottom: "20px", marginRight: "10px",color:"black", width: "300px" }}>
            <Card body>
            <p style={{color:"#fb6363", fontWeight:"bold"}}>Ways Bucks</p>
              <p>The number is: {random4}</p>
              </Card>
          </Card>
        </span>

          <Button variant="info" onClick={handleClick} style={{width:"350px"}}>
            Gacha
          </Button>
      </header>
    </div>
  );
}

export default App;
