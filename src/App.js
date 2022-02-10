import React, { useEffect, useState } from 'react';
import './App.css';
import Item from './components/card/Item'
import jsonData from './data.json'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(jsonData)
  },[]);

  let delItem = (id) =>{
    setData(data.filter((item) => item.id !== id))
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <ul className="productList">
      {data.map((d) => 
        <li><Item key={d.id} id={d.id} title={d.title} src={d.img} delItem={delItem} /></li>
      )}
      </ul>
      <br />
    {/* <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div> */}

      <Footer />
    </div>
  );
}

export default App;
