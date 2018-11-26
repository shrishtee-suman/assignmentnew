import React from 'react';
import '../styling/ItemImages.css';
import { tabContent } from '../Constants/constants';

 const itemImages = ({selectedTab}) =>{
    let selected = tabContent[selectedTab];
     const tabsContent=selected.map((item, idx)=>{
         return(
             <li key={idx} className="item-img-list">
                <img className="tab-images" src={item.image}/>
                <span className="offer-badge">{item.label}</span>
             </li>
         )
     })
    return(
        <div className="tabsContentContainer">
            <ul className="itemImagesContainer">
                {tabsContent}
            </ul>
        </div>    
       
    )
}
export default itemImages;



