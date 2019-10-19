import React, { Component } from 'react';
import axios from "axios";
import "./Form.css";
import { identifier } from '@babel/types';
import {Link} from 'react-router-dom';




class Form extends Component {
    constructor(){
        super();
        this.state={
            name: '',
            product_price: '',
            img: ''
        }
    }

    updateName(e) {
        this.setState({name: e.target.value});
    }
    updateProduct_price(e) {
        this.setState({product_price: e.target.value});
    }
    updateImg(e) {
        this.setState({img: e.target.value});
    }
   
    handleCancelClick =()=> {
        console.log("cancel click working")
        this.setState({name: '', product_price: '', img: ''});
    }

    addProduct = ()=> {
        console.log('hi~ADD product is working')
        axios.post('/api/product', {name: this.state.name, price: this.state.product_price, img: this.state.img})
        .then(response => {
            this.props.getInventory();
            this.handleCancelClick();
        })
    }

     updateProduct=(id)=>{
         axios.put('/api/product/' +id, {name:this.state.name,price: this.state.product_price, img: this.state.img})
         .then(response=>{
             this.props.getInventory();
             this.handleCancelClick();
         })
     }

render(){
    return(
        <div className="form-div">
            <label for="Img_URL">Img_URL:</label>
            <br/>
            <input name="Img_URL" onChange={e => this.updateImg(e)}  value={this.state.img}></input>
            <label for="Name">Name:</label>
            <br/>
            <input  name='Name' onChange={(e)=> this.updateName(e)}  value={this.state.name}></input>
            <label for="Product_Price">Product_Price:</label>
            <br/>
            <input name='Product_Price' onChange={(e) => this.updateProduct_price(e)} value={this.state.product_price}></input>
            <div className="buttons">
                <button className='Cancel' onClick={() => this.handleCancelClick()}>Cancel</button>
                {this.props.editing ?
                <button className="Save" onClick={()=>this.updateProduct(this.props.currentProduct)}>Save Changes</button>
                :<button  className="add"onClick={() => this.addProduct()}>Add to Inventory</button> 
                
                }
            </div>    
        </div>
    )
}





}


export default Form;