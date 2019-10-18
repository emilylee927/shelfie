import React from 'react';
import { Link } from 'react-router-dom';


function Product(props) {
    return(
        <div>
            {props.name}
            {props.price}
            <img src={props.img} />
            <button onClick={() => props.delete(props.id)}>Delete</button>
            <Link to={`/edit/${props.id}`}>
            <button onClick={() => props.changeProduct(props.id)}>Edit</button>
            </Link>
        </div>
    )
}






export default Product;