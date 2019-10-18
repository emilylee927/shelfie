import React, { Component } from 'react';
import axios from "axios";
import "./Form.css";
import { identifier } from '@babel/types';
import {Link} from 'react-router-dom';




class Form extends Component {
    constructor(){
        super();
        this.state={
            input1: '',
            input2: '',
            input3: '',
            editing:false,
        }
    }
   

    componentDidMount(){
        if(this.props.currentProduct !== null){
            this.state.editing = true
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

     updateProduct=()=>{
         axios.put('/api/product' +identifier, {name:this.state.input1,price: this.state.input2, img: this.state.input3})
         .then(response=>{
             this.setState({editing:false});
             this.props.changeProduct(null);
             this.props.get();
             this.handleCancelClick();
         })
     }

render(){
    return(
        <div className="form-div">
            <label for="Img_URL">Img_URL:</label>
            <br/>
            <input name="Img_URL" onChange={e => this.updateInput3(e)}  value={this.state.input3}></input>
            <label for="Name">Name:</label>
            <br/>
            <input  name='Name' onChange={(e)=> this.updateInput1(e)}  value={this.state.input1}></input>
            <label for="Product_Price">Product_Price:</label>
            <br/>
            <input name='Product_Price' onChange={(e) => this.updateInput2(e)} value={this.state.input2}></input>
            <div className="buttons">
                <button className='Cancel' onClick={() => this.handleCancelClick()}>Cancel</button>
                {this.state.editing ?
                <Link to='/'><button className="Save" onClick={()=>this.updateProduct(this.props.currentProduct)}>Save Changes</button></Link>
                :<button  className="add"onClick={() => this.addProduct()}>Add to Inventory</button> 
                
                }
            </div>    
        </div>
    )
}





}


export default Form;