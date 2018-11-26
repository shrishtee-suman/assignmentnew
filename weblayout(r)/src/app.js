import React, { Component } from 'react';
import { Header, Footer, Navigation } from './Componenets';
import { home } from './Componenets/Views/Home';
import { products } from './Componenets/Views/Products';
import { about } from './Componenets/Views/About';
import { pages } from './Componenets/Views/Pages';
import  { blog } from './Componenets/Views/Blog';
import { contact } from './Componenets/Views/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import ItemList from './Componenets/ItemsList';
import '../loader';
class App extends Component {

    render() {
        return (
            <div>
            <Header />
            <Router>
                <div>
                <Navigation />
                <Route exact path ="/" component={home}/>
                <Route path ="/products" component={products}/>
                <Route path ="/about" component={about}/>
                <Route path ="/pages" component={pages}/>
                <Route path ="/blog" component={blog}/>
                <Route path ="/contact" component={contact}/>
                </div>
            </Router>
            <Footer />
            </div>
        );
    }
}

export default App;
