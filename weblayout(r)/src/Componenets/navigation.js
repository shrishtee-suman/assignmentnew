import React, { Component } from 'react';
import { NavItems, images } from '../Constants/constants';
import '../styling/navigation.css';

export class Navigation extends Component {
    render() {

        console.log(NavItems);
        console.log("images",images);
        const navitems_list = NavItems.map((item) => { 
            return(
                   <li className="menu-item"> {item} </li>  
            ) 
        });
        const images_list = images.map((item)=>{
            return(
                    <span className="nav-icons">
                        <img src= {item.img1} />
                        <img src= {item.img2} />
                    </span>
            )
        });
        
        return (
            
                <div className="navigation-bar">
                    <ul className="menu">
                        {navitems_list}
                    </ul>
                    
                        {images_list}
                   
                </div>    
                
        )
    }
};


