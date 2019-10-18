import React, { Component } from 'react';
import axios from "axios";



class Form extends Component {
    constructor(){
        super();
        this.state={
            input1: '',
            input2: '',
            input3: '',
            editing:true,
        }
    }
   

    updateInput1(e) {
        this.setState({input1: e.target.value});
    }
    updateInput2(e) {
        this.setState({input2: e.target.value});
    }
    updateInput3(e) {
        this.setState({input3: e.target.value});
    }
   
    handleCancelClick =()=> {
        console.log("cancel click working")
        this.setState({input1: '', input2: '', input3: ''});
    }

    addProduct = ()=> {
        console.log('hi~ADD product is working')
        axios.post('/api/product', {name: this.state.input1, price: this.state.input2, img: this.state.input3})
        .then(response => {
            this.props.get();
            this.handleCancelClick();
        })
    }

render(){
    return(
        <div>
            <input onChange={(e)=> this.updateInput1(e)}  value={this.state.input1}></input>
            <input onChange={(e) => this.updateInput2(e)} value={this.state.input2}></input>
            <input onChange={e => this.updateInput3(e)}  value={this.state.input3}></input>
            <button onClick={() => this.handleCancelClick()}>Cancel</button>
            {this.state.editing ?
            <button onClick={() => this.addProduct()}>Add to Inventory</button> 
            : <button onClick={() => this.updateProduct(this.state.currentProduct)}>Save Changes</button>
            }
        </div>
    )
}





}


export default Form;