import './App.css';
// import React, {Component} from "react"
import Item from './components/card/Item'
import jsonData from './data.json'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
    }
    this.delItem = this.delItem.bind(this);
  }
  componentDidMount(){
    this.setState({
      data: jsonData
    })
  }
  delItem = (id) => {
    this.setState({
      data: this.state.data.filter((item)=> item.id !== id)
    })
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <ul className="productList">
        {this.state.data.map((d) => 
          <li><Item key={d.id} id={d.id} title={d.title} src={d.img} delItem={this.delItem}  /></li>
        )}
        </ul>
        <br />
        <Footer />
      </div>
    )
  };
}

export default App;
