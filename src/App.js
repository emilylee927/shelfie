import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from "./Components/Header/Header";
import axios from "axios";
import {HashRouter, Route, Switch} from 'react-router-dom';



class App extends Component {
    constructor(){
      super();
      this.state = {
        inventory:[],
        currentProduct:null,
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

changeProduct =NewProduct=> {
  this.setState({currentProduct: NewProduct});
}

  render(){
    return (
       <>
        <Header className='Logo'/>
        <HashRouter>
          <Switch>
            <Route path='/' 
              render={() => 
              <><Dashboard inventory={this.state.inventory} get={this.getInventory} changeProduct={this.changeProduct}/>
              </>} >
            </Route>
            <Route path='/edit/:id' 
              render={() => 
              <><Form currentProduct={this.state.currentProduct} get={this.getInventory} /></>}>
            </Route>
            <Route path='/add' 
              render={() => 
              <><Form currentProduct={this.state.currentProduct} get={this.getInventory} /></>}>
            </Route>
            
            </Switch>  
        </HashRouter>
       
        </>
    );
}
}
export default App;
