import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from "./Components/Header/Header";
import axios from "axios";
import {HashRouter, Route, Switch, Link} from 'react-router-dom';



class App extends Component {
    constructor(){
      super();
      this.state = {
        inventory:[],
        currentProduct: null,
        allInventory:[]
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
  console.log("DidMounted")
}

changeProduct = id => {
  this.setState({currentProduct: id});
}


updateItem = newArr =>{
  this.setState({allInventory:newArr})
}

  render(){
    return (
       <>
        
        <HashRouter>
        <Header className='Logo'/>
          <nav>
          <Link to='/'><button>Dashboard</button></Link>
          <Link to='/add'><button>Add Inventory</button></Link>
          </nav>
          <Switch>
            <Route exact path='/' >
              <Dashboard inventory={this.state.inventory} getInventory={this.getInventory} changeProduct={this.changeProduct}/> 
            </Route>
            <Route exact path='/edit/:id' >
              <Form editing={true} currentProduct={this.state.currentProduct} getInventory={this.getInventory} />
            </Route>
            <Route exact path='/add' >
              <Form editing={false} currentProduct={this.state.currentProduct} getInventory={this.getInventory} />
            </Route>
            
          </Switch>
        </HashRouter>
      </>
    );
}
}
export default App;


