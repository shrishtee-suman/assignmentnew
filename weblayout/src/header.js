import React,{ Component } from 'react';
import './style.css';

export class Header extends Component{
    render(){
        return(
            <header class="heading">
                <div class="inner-container">
                    <h1>FOOSESHOES</h1>
                    <div>
                        <span class="search-icon">
                            <img src="assets/Search Icon.png" />
                        </span>
                        <button class="user-login">Login or Register</button>
                    </div>
                </div>
            </header>
        );
    }
}

