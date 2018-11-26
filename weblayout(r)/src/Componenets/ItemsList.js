import React, { Component } from 'react';
// import Axios from 'axios';
import { connect } from 'react-redux';
import { fetchData } from '../Actions/actions';
import '../styling/items_list.css';


export class ItemsList extends Component {

    
    componentDidMount() {
        this.props.dispatch(fetchData());
    }
   
    render() {
        const { error, loading, data } = this.props;
    
        if (error) {
          return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
          return <div>Loading...</div>;
        }
    const newdata = data.filter((item,idx)=>{
        return(
            item.id<=3
        )
    });
    const newdata1 = data.filter((item,idx)=>{
        return(
            item.id>3
        )
    });
    const list1 = newdata.map((item,idx)=>{
        return(
            <li className="itemImage" key={idx}>                                                                                
                <img className="productImg"  src ={item.image}/>
                <hr/>
                <span className="itemPrice">${item.Price}</span>
                <span className="caption">{item.caption}</span>
            </li>    
        )
    });
    const list2 = newdata1.map((item,idx)=>{
        return(
            <li className="itemImage" key={idx}>                                                                                
                <img className="productImg"  src ={item.image}/>
                <hr/>
                <span className="itemPrice">${item.Price}</span>
                <span className="caption">{item.caption}</span>
            </li>    
        )
    })
        return (
            <div className="add-ons-container">
                <div className="new-arrivals-heading">
                    <h3>New Arrivals On Fooseshoes</h3>
                    <button className="show-all">SHOW ALL</button>
                </div>
                <ul className="image-container">
                    { list1 }
                </ul>
                <div className ="best-sellers-heading">
                    <h3>Best Sellers Of The Month</h3>
                    <button className="show-all">SHOW ALL</button>
                </div> 
                <ul className="image-container">
                    {list2}
                </ul>
            </div>
        );
      }
    }
    
    const mapStateToProps = state =>  ({
        data: state.data.items,
        loading: state.data.loading,
        error: state.data.error
      });
export default connect(mapStateToProps)(ItemsList);

