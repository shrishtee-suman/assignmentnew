import React, { Component } from 'react';
import { Header, Footer, Navigation, Banner, ItemsMenuList ,ItemsList, Widget } from './Componenets';
import '../loader';
class App extends Component {

    render() {
        const handleClick=()=>{
            $('button').click(function(){
                alert("Clicked!!!!  ");
            });
        }
        return (
            <div>
                <Header />
                <Navigation/>
                <Banner/> 
                <ItemsMenuList/>
                <ItemsList/>
                <Widget/>
                <Footer/>
                <button onClick={handleClick}>Click Me</button>
            </div>
        );
    }
}

export default App;
