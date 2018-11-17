import React, { Component } from 'react';
import Navitems from './Constants/navitems';

export default class Navigation{
    render(){
        return(
            <div>
                <ul>
                    Navitems.map((item)=>{
                        return item;
                    });
                    <li>{item}</li>
                </ul>
            </div>
        )
    }
};
