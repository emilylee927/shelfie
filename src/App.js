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
              <Dashboard inventory={this.state.inventory} get={this.getInventory} changeProduct={this.changeProduct}/> 
            </Route>
            <Route exact path='/edit/:id' >
              <Form currentProduct={this.state.currentProduct} get={this.getInventory} changeProduct={this.changeProduct} />
            </Route>
            <Route exact path='/add' >
              <Form currentProduct={this.state.currentProduct} get={this.getInventory} changeProduct={this.changeProduct} />
            </Route>
            
          </Switch>
        </HashRouter>
      </>
    );
}
}
export default App;


