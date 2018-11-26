import React, { Component } from 'react';
import { ItemsMenu } from '../Constants/constants';
import  ItemImages  from './ItemImages';
import '../styling/ItemsMenuList.css';

export class ItemsMenuList extends Component{
    
    state={
        selectedTab: 0
    }

    handleClick = index => {
        console.log("index",index);
          this.setState({
              selectedTab:index
          })
    }

    itemsMenu = () => ItemsMenu.map((item,index)=>{
        return(
            <li key={index} className={`menuItem ${this.state.selectedTab===index?'selectedTab':''}`}  onClick={() =>this.handleClick(index)}>
                <h3>{ item.heading }</h3>
                <p>{ item.caption }</p>
            </li>
        )
    })
    
    render(){
        
        
        
        return(
            <div>
                <div className="itemsMenuContainer">
                    <ul className="menuItemContainer">
                        { this.itemsMenu() }
                    </ul>
                </div>
               
                    <ItemImages selectedTab={this.state.selectedTab}/>
                
            </div>    
        )
    }
}
