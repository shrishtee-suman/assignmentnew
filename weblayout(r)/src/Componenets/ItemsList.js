import React, { Component } from 'react';
import Axios from 'axios';
import '../styling/items_list.css';


export class ItemsList extends Component {

    constructor() {
        super();
        this.state = {
            productsList: [],
        };
    }

    componentDidMount() {
        this.getApiData();
    }

    getApiData = () => {
        Axios.get('https://api.myjson.com/bins/qzkkq')
            .then((response) => {
                this.setState({ productsList: response.data }, () => {
                    console.log(" >>>> ", this.state.productsList);
                });
            })
            .catch((error) => {
                console.log("error",error);
            });
    }

    render() {

         const list = this.state.productsList.filter((item) =>{
            return(  
                item.id<=3
            );   
        });
        const newlist = this.state.productsList.filter((item)=>{
            return(
                item.id>3
            );
        });

        const list1 = list.map((item)=>{
            return(
                
                    <li className="itemImage">                                                                                
                        <img className="productImg"  src ={item.image}/>
                        <hr/>
                        <span className="itemPrice">${item.Price}</span>
                        <span className="caption">{item.caption}</span>
                    </li>    
                
            )
        });
        const list2 = newlist.map((item)=>{
            return(
                <li className="itemImage">
                    <img className="productImg" src={item.image}/>
                    <hr/>
                    <span className="itemPrice">${item.Price}</span>
                    <span className="caption">{item.caption}</span>
                </li>
            )
        });
            

        console.log(",,,,,,,,,,,,",list);
        return (
            
            <div className="add-ons-container">
                <div className="new-arrivals-heading">
                    <h3>New Arrivals On Fooseshoes</h3>
                    <button className="show-all">SHOW ALL</button>
                </div>
                <ul className="image-container">
                    {list1}
                </ul> 
                <div className ="best-sellers-heading">
                    <h3>Best Sellers Of The Month</h3>
                    <button className="show-all">SHOW ALL</button>
                </div> 
                <ul className="image-container">
                    { list2 }
                </ul> 
            </div>
        );
    }
}


