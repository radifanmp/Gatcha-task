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


      <div className="App-header"> 
      
        <h1 style={{fontWeight:"bold" ,color:"#ffb8b8", position:"absolute", top:"200px", right:"40%", left:"40%"}}>Gacha Task</h1>

        <div style={{display:'flex', flexDirection: "row", marginTop:"90px"}}>
          
          <Card style={{ marginBottom: "50px", marginRight: "10px", color:"black", width: "300px" }}>
            <Card body>
            <p style={{color:"#fd9644", fontWeight:"bold"}}>Ways Hub</p>
              <p>The number is: {random1}</p>
            </Card>
          </Card>

          <Card style={{ marginBottom: "50px", marginRight: "10px",color:"black", width: "300px" }}>
            <Card body>
            <p style={{color:"#EAB543", fontWeight:"bold"}}>Ways Beans</p>
              <p>The number is: {random2}</p>
              </Card>
          </Card>

          <Card style={{ marginBottom: "50px", marginRight: "10px",color:"black", width: "300px" }}>
            <Card body>          
            <p style={{color:"#2ecc71", fontWeight:"bold"}}>Ways Vin</p>
              <p>The number is: {random3}</p>
              </Card>
          </Card>

          <Card style={{ marginBottom: "50px", marginRight: "10px",color:"black", width: "300px" }}>
            <Card body>
            <p style={{color:"#e84118", fontWeight:"bold"}}>Ways Bucks</p>
              <p>The number is: {random4}</p>
              </Card>
          </Card>
        </div>

          <Button onClick={handleClick} style={{width:"350px", background:"#0fbcf9"}}>
            TURN
          </Button>
      </div>
    </div>
  );
}

export default App;
