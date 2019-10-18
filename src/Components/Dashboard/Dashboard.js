import React, { Component } from 'react';
import Product from "../Product/Product";
import axios from "axios";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this)
    }
    
    
    deleteProduct(id){
        console.log(id)
        axios.delete(`/api/product/${id}`)
        .then(response => {
            this.props.componentDidMount();
        }).catch(err => console.log(err));
    }


    render() {
        let newInventory = this.props.inventory.map(val => {
            return <Product delete={this.deleteProduct} changeProduct={this.props.changeProduct} id={val.id} name={val.name} price={val.price} img={val.img} key={val.id}/>
        })
        return(
            <div>
                {newInventory}
            </div>
        )
    }




}


export default Dashboard;