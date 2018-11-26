import React from 'react';
import ItemsList from '../ItemsList';
import '../../styling/views.css'

export const products=()=>{
    return(
        <div>
            <h2 className="content-heading">Our Products</h2>
            <ItemsList/>
        </div>
    )
}