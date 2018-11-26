import React, { Component } from 'react';
import { BannerInfo } from '../Constants/constants';
import '../styling/banner.css';

export  class Banner extends Component{
    render(){
        console.log("info",BannerInfo);
        const banner_info = BannerInfo.map((item, idx)=>{
            return(
                <div key={idx} className="banner-info">
                    <span className="price">{item.price}</span>
                    <h2>{item.heading1}</h2>
                    <h2>{item.heading2}</h2>
                    <p className="info">{item.info}</p>
                </div>    
            )
        })
        return(
            <div className="banner-container">
                <img src="src/assets/banner.png"/>
                {banner_info}
             </div>
        )
    }
}