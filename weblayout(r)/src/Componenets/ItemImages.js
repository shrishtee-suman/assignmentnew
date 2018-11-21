import React from 'react';
import '../styling/ItemImages.css';
import { tabContent } from '../Constants/constants';

 const itemImages = ({selectedTab}) =>{
    //  console.log("content",);
    //  console.log(selectedTab)
    console.log("content",tabContent[0][1].label);
     let selected = tabContent[selectedTab];
     const tabsContent=selected.map((item)=>{
         return(
             <li className="item-img-list">
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


{/* <li className="item-img-list">
                    <img className="tab-images" src={selected[0].img} alt="Pink-shoes"/>
                    <span className="offer-badge">{selected[0].label}</span>
                </li>
                <li className="item-img-list">
                    <img className="tab-images" src={selected[0].img} alt="Pink-shoes"/>
                    <span className="offer-badge">{selected[1].label}</span>
                </li>
                <li className="item-img-list">
                    <img  className="tab-images" src={require("../assets/must-have.png")} alt="Pink-Shoes"/>
                    <span className="offer-badge">{selected[2].label}</span>
                </li> */}
