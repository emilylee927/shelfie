import React from 'react';



function Product(props) {
    return(
        <div>
            {props.name}
            {props.price}
            <img src={props.img} />
            <button onClick={() => props.delete(props.id)}>Delete</button>
            <button onClick={() => props.changeProduct(props.id)}>Edit</button>
        </div>
    )
}






export default Product;