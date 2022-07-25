import React, {useState} from 'react';
import './App.css';
import Add from './Add/Add';
import Update from './Update/Update';
import Count from './Add/Count';

function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
     <Add data={data} setData={setData} />
     <Update data={data} setData={setData} />
     <Count data={data}/>
    </div>
  );
}

export default App;
