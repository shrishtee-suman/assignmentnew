import React, { Component } from 'react';
import { NavItems, images } from '../Constants/constants';
import { Link } from 'react-router-dom';
import '../styling/navigation.css';

export class Navigation extends Component {
    render() {

        console.log(NavItems);
        console.log("images",images);
        const navitems_list = NavItems.map((item, idx) => { 
            return(
                   <li key={idx} className="menu-item"> {item} </li>  
            ) 
        });
        const images_list = images.map((item, idx)=>{
            return(
                    <span key={idx} className="nav-icons">
                        <img src= {item.img1} />
                        <img src= {item.img2} />
                    </span>
            )
        });
        
        return (
            
                <div className="navigation-bar">
                    <ul className="menu">
                    <Link to="/">{navitems_list[0]}</Link>
                    <Link to="/products">{navitems_list[1]}</Link>
                    <Link to="/about">{navitems_list[2]}</Link> 
                    <Link to="/pages">{navitems_list[3]}</Link>
                    <Link to="/blog">{navitems_list[4]}</Link>
                    <Link to="/contact">{navitems_list[5]}</Link>   
                    </ul>
                    
                        {images_list}
                   
                </div>    
                
        )
    }
};


