import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from "./Components/Header/Header";
import axios from "axios";


class App extends Component {
    constructor(){
      super();
      this.state = {
        inventory:[],

      }
    
}

getInventory=() =>{
  axios.get('/api/inventory')
  .then(response => {
    this.setState({inventory: response.data});
  }).catch(err => console.log(err))
  console.log("I got the inventory to frontend")
}


componentDidMount() {
  this.getInventory();
}

changeProduct= product => {
  this.setState({currentProduct: product});
}

  render(){
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory} get={this.getInventory} changeProduct={this.changeProduct}/>
        <Form/>
        <Header/>
      </div>
    );
}
}
export default App;
