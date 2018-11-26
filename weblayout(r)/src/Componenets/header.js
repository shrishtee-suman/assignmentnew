import React, { Component } from 'react';
import '../styling/header.css';

export class Header extends Component {
    render() {
        return (
            <header className="heading">
                <div className="inner-container">
                    <h1>FOOSESHOES</h1>
                    <div className="for-user">
                        <span className="search-icon">
                            <img className="search-icon-img" src={require('../assets/search-icon.png')} />
                        </span>
                        <button className="user-login">Login or Register</button>
                    </div>
                </div>
            </header>
        );
    }
}
