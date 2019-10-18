import React, { Component } from 'react';
import Product from "../Product/Product";
import axios from "axios";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventory: []
        }
        
    }
    
    
    deleteProduct= id => {
        axios.delete('/api/product/' + id)
        .then(response => {
            this.props.get();
        }).catch(err => console.log(err));
    }


    render() {
        let arr = this.props.inventory.map(val => {
            return <Product delete={this.deleteProduct} changeProduct={this.props.changeProduct} name={val.name} price={val.price} img={val.img} id={val.id} key={val.id}/>
        })
        return(
            <div>
                {arr}
            </div>
        )
    }




}


export default Dashboard;